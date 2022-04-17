import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import {  NavItem, NavbarBrand } from 'reactstrap';
import { Nav, Navbar,Container } from "react-bootstrap";
// import { Jumbotron } from 'react-bootstrap';

class Header extends Component  {
    constructor(props) {
        super(props);
    
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false
        };
      }

      toggleNav() {
          this.setState(
              { isNavOpen: !this.state.isNavOpen }
          );
      }
    render()
    {
        return (
            <>
                <Navbar collapseOnSelect expand="md" className="navbar-dark" variant="light">
                <Container>
                    <NavbarBrand className="mr-auto" href="/"><img src='assets/images/logo.png' height="30" width="41" alt='Ristorante Con Fusion' /></NavbarBrand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    <NavItem>
                                <NavLink className="nav-link"  to='/home'><span className="fa fa-home fa-lg"></span>Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/aboutus'><span className="fa fa-info fa-lg"></span> About Us</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to='/menu'><span className="fa fa-list fa-lg"></span> Menu</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/contactus'><span className="fa fa-address-card fa-lg"></span> Contact Us</NavLink>
                            </NavItem>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
                <div className=' jumbotron h-100 p-5 border rounded-3'>
                        <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                            <h1>Ristorante Con Fusion</h1>
                            <hr></hr>
                            <p>We take inspiration from world's best cuisines, and create a uinque fusion experience. Our lipsmacking creations tickle your culinary senses!  </p>
                            </div>
                        </div>
                    </div>
                </div>
            </>  
        );
    }
}

export default Header