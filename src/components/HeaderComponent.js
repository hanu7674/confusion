import React, { Component } from "react";
import { Navbar, NavbarBrand } from 'reactstrap';
// import { Jumbotron } from 'react-bootstrap';

class Header extends Component  {
    render()
    {
        return (
            <>
                <Navbar dark>
                <div className='container'>
                <NavbarBrand href='/'>Ristorante Con Fusion</NavbarBrand>
                </div>
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
                {/* <Jumbotron>
                    
                                <h1></h1>
                            </div>
                        </div>
                    </div>
                </Jumbotron> */}
            </>  
        );
    }
}

export default Header