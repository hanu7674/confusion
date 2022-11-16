/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import {
	Button,
	Label,
	Row,
	Col,
} from "reactstrap";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "react-bootstrap";
import { Control, LocalForm, Errors } from "react-redux-form";
class CommentForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false,
        }
        
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleShow() {
        this.setState({
            show: true
        })
    }
    handleClose() {
        this.setState({
            show: false
        })
    }
    
    handleSubmit(values){
            console.log("Current state"+ JSON.stringify(values));
            alert("Current state"+ JSON.stringify(values));
			this.props.addComment(this.props.dishId, values.rating, values.author, values.comment)
	}
    render() {
    const required = (val) => val && val.length;
    const maxLength = (len) => (val) => !val || val.length <= len;
    const minLength = (len) => (val) => val && val.length >= len;
        return (
					<>
						<Button onClick={this.handleShow} color='secondary' outline>
							<span className='fa fa-solid fa-pencil'> </span> Submit Comment
						</Button>
						<Modal show={this.state.show} onHide={this.handleClose}>
							<ModalHeader closeButton>Submit Comment</ModalHeader>
							<ModalBody>
								<LocalForm onSubmit={(values) => this.handleSubmit(values)}>
									<Row className='form-group mb-2'>
										<Label htmlFor='rating'>Rating</Label>
										<Col>
											<Control.select
												type='select'
												model='.rating'
												className='form-control'
												validators={{
													required,
												}}
												placeholder='Rating'
												name='rating'>
												<option disabled selected>Rating</option>
												<option>1</option>
												<option>2</option>
												<option>3</option>
												<option>4</option>
												<option>5</option>
											</Control.select>
											<Errors
												className='text-danger'
												model='.rating'
												show='touched'
												messages={{
													required: "required",
												}}
											/>
										</Col>
									</Row>

									<Row className='form-group mb-2'>
										<Label htmlFor='name'>Name</Label>
										<Col>
											<Control.text
												model='.name'
												className='form-control'
												id='name'
												name='name'
												validators={{
													required,
													minLength: minLength(3),
													maxLength: maxLength(15),
												}}
												placeholder='Your name'
											/>
											<Errors
												className='text-danger'
												model='.name'
												show='touched'
												messages={{
													required: "required",
													minLength: "Must be greater than 2 characters",
													maxLength: "Must be 15 characters or less",
												}}
											/>
										</Col>
									</Row>

									<Row className='form-group mb-2'>
										<Label htmlFor='comment'>Your Comments</Label>
										<Col>
											<Control.textarea
												type='textarea'
												model='.comment'
												id='comment'
												className='form-control'
												name='comment'
												rows='6'
												placeholder=''></Control.textarea>
										</Col>
									</Row>
									<Row className='form-group mb-2'>
										<Col>
											<Button type='submit' color='primary'>
												Submit
											</Button>
										</Col>
									</Row>
								</LocalForm>
							</ModalBody>
						</Modal>
					</>
				);
    }
}

export default CommentForm