import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import {  NavItem, NavbarBrand } from 'reactstrap';
import { Nav, Navbar,NavbarToggler, Collapse, Container, Modal, ModalBody, ModalHeader, Button, Form, FormGroup, Label } from "reactstrap";

class Header extends Component  {
    constructor(props) {
        super(props);
    
        this.toggleNav = this.toggleNav.bind(this);
		this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            isNavOpen: false,
            isModalOpen: false,
            username: "",
            password: "",
            remember: false,
        };
      }
      toggleNav() {
          this.setState(
              { isNavOpen: !this.state.isNavOpen }
          );
    }
    toggleModal() {
        this.setState({ isModalOpen: !this.state.isModalOpen });
    }
    handleChange(e) {
        const target = e.target;
        const name = target.name;
        const value =target.type === "checkbox" ? target.checked : target.value;
        this.setState({
            [name]: value
        })
    }
    handleLogin(e) {
        e.preventDefault();
        alert(
					"Username :" +
						this.state.username +
						" Password: " +
						this.state.password +
						" Remember Me:  " +
						this.state.remember
				);

        this.toggleModal();
    }
    render()
    {
        return (
			<>
				<div>
						<Navbar container="md"
							collapseOnSelect
							expand='md'
							className='navbar-dark'
							variant='light'>
								<NavbarBrand className='mr-auto' href='/'>
									<img
										src='http://localhost:3000/assets/images/logo.png'
										height='30'
										width='41'
										alt='Ristorante Con Fusion'
									/>
								</NavbarBrand>
					<NavbarToggler onClick={this.toggleNav} />
					<Collapse isOpen={this.state.isNavOpen} navbar>
									<Nav className='me-auto' navbar>
										<NavItem>
											<NavLink className='nav-link' to='/home'>
												<span className='fa fa-home fa-lg'></span>Home
											</NavLink>
										</NavItem>
										<NavItem>
											<NavLink className='nav-link' to='/aboutus'>
												<span className='fa fa-info fa-lg'></span> About Us
											</NavLink>
										</NavItem>
										<NavItem>
											<NavLink className='nav-link' to='/menu'>
												<span className='fa fa-list fa-lg'></span> Menu
											</NavLink>
										</NavItem>
										<NavItem>
											<NavLink className='nav-link' to='/contactus'>
												<span className='fa fa-address-card fa-lg'></span>{" "}
												Contact Us
											</NavLink>
										</NavItem>
									</Nav>
									<Nav>
										<NavItem>
											<Button outline='true' onClick={this.toggleModal}>
												<span className='fa fa-sign-in fa-lg'>Login</span>
											</Button>
										</NavItem>
									</Nav>
								</Collapse>
					</Navbar>
				</div>
						<div className=' jumbotron h-100 p-5 border rounded-3'>
							<div className='container'>
								<div className='row row-header'>
									<div className='col-12 col-sm-6'>
										<h1>Ristorante Con Fusion</h1>
										<hr></hr>
										<p>
											We take inspiration from world's best cuisines, and create
											a uinque fusion experience. Our lipsmacking creations
											tickle your culinary senses!{" "}
										</p>
									</div>
								</div>
							</div>
						</div>
						<Modal show={this.state.isModalOpen} onHide={this.toggleModal}>
							<ModalHeader closeButton>Login</ModalHeader>
							<ModalBody>
								<Form onSubmit={this.handleLogin}>
									<FormGroup  className="mb-3">
										<Label>Username</Label>
										<input
											type='text'
											placeholder='username'
											name='username'
											id='username'
											onChange={this.handleChange}></input>
									</FormGroup>
									<FormGroup className='mb-3'>
										<Label>Password</Label>
										<input
											type='password'
											placeholder='password'
											name='password'
											id='password'
											onChange={this.handleChange}></input>
									</FormGroup>
									<FormGroup className='mb-3' controlId='formBasicCheckbox'>
										<check
											type='checkbox'
											label='Remember Me'
											name='remember'
											onChange={this.handleChange}
										/>
									</FormGroup>
									<Button variant='primary' type='submit'>
										Login
									</Button>
								</Form>
							</ModalBody>
						</Modal>
					</>
				);
    }
}

export default Header;