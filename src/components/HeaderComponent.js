import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import {  NavItem, NavbarBrand } from 'reactstrap';
import { Nav, Navbar, Container, Modal, ModalBody, ModalHeader, Button, Form, FormGroup, FormFeedback, FormLabel, FormControl } from "react-bootstrap";
// import { Jumbotron } from 'react-bootstrap';

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
						<Navbar
							collapseOnSelect
							expand='md'
							className='navbar-dark'
							variant='light'>
							<Container>
								<NavbarBrand className='mr-auto' href='/'>
									<img
										src='assets/images/logo.png'
										height='30'
										width='41'
										alt='Ristorante Con Fusion'
									/>
								</NavbarBrand>
								<Navbar.Toggle aria-controls='responsive-navbar-nav' />
								<Navbar.Collapse id='responsive-navbar-nav'>
									<Nav className='me-auto'>
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
								</Navbar.Collapse>
							</Container>
						</Navbar>
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
										<FormLabel>Username</FormLabel>
										<FormControl
											type='text'
											placeholder='username'
											name='username'
											id='username'
											onChange={this.handleChange}></FormControl>
									</FormGroup>
									<FormGroup className='mb-3'>
										<FormLabel>Password</FormLabel>
										<FormControl
											type='password'
											placeholder='password'
											name='password'
											id='password'
											onChange={this.handleChange}></FormControl>
									</FormGroup>
									<Form.Group className='mb-3' controlId='formBasicCheckbox'>
										<Form.Check
											type='checkbox'
											label='Remember Me'
											name='remember'
											onChange={this.handleChange}
										/>
									</Form.Group>
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

export default Header