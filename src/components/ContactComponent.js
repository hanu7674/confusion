import React, {Component} from 'react';
import { Breadcrumb, BreadcrumbItem, Form, FormGroup,Button,Label, Col, Input } from 'reactstrap'
import Link from 'react-router-dom/Link';
class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            telnum: "",
            email: "",
            agree: false,
            contactType: "Tel.",
            message: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this)
    }
        handleInputChange(event){
            const target = event.target;
            const value = target.type === "checkbox" ? target.checked : target.value;
            const name = target.name;

            this.setState({
                [name]: value
            })
        }
        handleSubmit(e){
            e.preventDefault();
            console.log("Current state"+ JSON.stringify(this.state));
            alert("Current state"+ JSON.stringify(this.state));
        }
	render() {
		return (
			<div className='container'>
				<div className='row'>
					<Breadcrumb>
						<BreadcrumbItem>
							<Link to='/home'>Home</Link>
						</BreadcrumbItem>
						<BreadcrumbItem active>Contact Us</BreadcrumbItem>
					</Breadcrumb>
					<div className='col-12'>
						<h3>Contact US</h3>
						<hr></hr>
					</div>
				</div>
				<div className='row row-content'>
					<div className='col-12'>
						<h3>Location Information</h3>
					</div>
					<div className='col-12 col-sm-4 offset-sm-1'>
						<h5>Our Address</h5>
						<address>
							121, Clear Water Bay Road
							<br />
							Clear Water Bay, Kowloon
							<br />
							HONG KONG
							<br />
							<i className='fa fa-phone'></i>: +852 1234 5678
							<br />
							<i className='fa fa-fax'></i>: +852 8765 4321
							<br />
							<i className='fa fa-envelope'></i>:{" "}
							<a href='mailto:confusion@food.net'>confusion@food.net</a>
						</address>
					</div>
					<div className='col-12 col-sm-6 offset-sm-1'>
						<h5>Map of our Location</h5>
					</div>
					<div className='col-12 col-sm-11 offset-sm-1'>
						<div className='btn-group' role='group'>
							<a
								role='button'
								className='btn btn-primary'
								href='tel:+85212345678'>
								<i className='fa fa-phone'></i> Call
							</a>
							<a role='button' className='btn btn-info'>
								<i className='fa fa-skype'></i> Skype
							</a>
							<a
								role='button'
								className='btn btn-success'
								href='mailto:confusion@food.net'>
								<i className='fa fa-envelope-o'></i> Email
							</a>
						</div>
					</div>
				</div>
				<div className='row row-content'>
					<div className='col-12'>
						<h3> Send Us Your Feedback</h3>
					</div>
					<div className='col-12 col-md-9'>
						<Form onSubmit={this.handleSubmit}>
							<FormGroup row>
								<Label htmlFor='firstName' md={2}>
									First Name
								</Label>
								<Col md={10}>
									<Input
										type='text'
										id='firstName'
										name='firstName'
										placeholder='First Name'
										onChange={this.handleInputChange}
										></Input>
								</Col>
							</FormGroup>
							<FormGroup row>
								<Label htmlFor='lastName' md={2}>
									Last Name
								</Label>
								<Col md={10}>
									<Input
										type='text'
										id='lastName'
										name='lastName'
										onChange={this.handleInputChange}
										placeholder='Last Name'
										></Input>
								</Col>
							</FormGroup>
							<FormGroup row>
								<Label htmlFor='telnum' md={2}>
									Contact Tel.
								</Label>
								<Col md={10}>
									<Input
										type='text'
										onChange={this.handleInputChange}
										id='telnum'
										name='telnum'
										placeholder='Tel. Number'
										></Input>
								</Col>
							</FormGroup>
							<FormGroup row>
								<Label htmlFor='email' md={2}>
									Email
								</Label>
								<Col md={10}>
									<Input
										type='text'
										onChange={this.handleInputChange}
										id='email'
										name='email'
										placeholder='Email'
										></Input>
								</Col>
							</FormGroup>
							<FormGroup row>
								<Col md={{ size: 6, offset: 2 }}>
									<FormGroup check>
										<Label check>
											<Input
												type='checkbox'
												onChange={this.handleInputChange}
												name='agree'
												checked={this.state.agree}
											/>{" "}
											{""}
											<strong>May we contact you?</strong>
										</Label>
									</FormGroup>
								</Col>
								<Col md={{ size: 3, offset: 1 }}>
									<Input
										type='select'
										onChange={this.handleInputChange}
										name='contactType'
										>
										<option>Tel.</option>
										<option>email</option>
									</Input>
								</Col>
							</FormGroup>
							<FormGroup row>
								<Label htmlFor='message' md={2}>
									Your Feedback
								</Label>
								<Col md={10}>
									<Input
										type='textarea'
										onChange={this.handleInputChange}
										id='message'
										name='message'
										rows='12'
										placeholder=''
										></Input>
								</Col>
							</FormGroup>
							<FormGroup row>
								<Col md={{ size: 10, offset: 2 }}>
									<Button type='submit' color='primary'>
										Send Feedback
									</Button>
								</Col>
							</FormGroup>
						</Form>
					</div>
				</div>
			</div>
		);
	}
}

export default Contact;