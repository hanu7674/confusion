/* eslint-disable react/jsx-pascal-case */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
	Card,
	CardImg,
	CardText,
	CardBody,
	CardTitle,
	Breadcrumb,
	BreadcrumbItem,
	Button,
	Label,
	Row,
	Col,
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter
} from "reactstrap";
import { Control, LocalForm, Errors } from "react-redux-form";
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';
function RenderDish({ dish }) {
	return (
		<FadeTransform
			in
			transformProps={{
				exitTransform: 'scale(0.5) translateY(-50%)'
			}}>
            <Card>
			<CardImg width="100%" src={baseUrl + dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText> {dish.description} </CardText>
                    </CardBody>
			</Card>
		</FadeTransform>
        
    );
    
}
function RenderComments({comments, postComment, dishId}) {
    return (
		<div>
			<Stagger in>
				{comments.map((comments) => {
					return (
						<Fade in>
						<li key={comments.id}>
							<p> {comments.comment} </p>
							<p>
								-- {comments.author} ,{" "}
								{new Intl.DateTimeFormat("en-US", {
									year: "numeric",
									month: "short",
									day: "2-digit",
								}).format(new Date(Date.parse(comments.date)))}
							</p>
						</li>
						</Fade>
					);
				})}
			</Stagger>
			<CommentForm dishId={dishId} postComment={postComment} />
			</div>
		);
      
}

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

	handleSubmit(values) {
		// console.log("Current state" + JSON.stringify(values));
		// alert("Current state" + JSON.stringify(values));
		this.props.postComment(this.props.dishId, values.rating, values.author, values.comment)
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
								<Label htmlFor='author'>Name</Label>
								<Col>
									<Control.text
										model='.author'
										className='form-control'
										id='author'
										name='author'
										validators={{
											required,
											minLength: minLength(3),
											maxLength: maxLength(15),
										}}
										placeholder='Your name'
									/>
									<Errors
										className='text-danger'
										model='.author'
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
 const DishdetailComponent = (props) => {
    
	 if (props.isLoading) {
		 return (<div className='container'>
			 <div className='row'>
				 <Loading />
			 </div>
			 </div>)
	 }
	 else if (props.errMess) {
		 return (<div className='container'>
			 <div className='row'>
				 <h4>{ props.errMess }</h4>
			 </div>
		 </div>)
	 }
     else if (props.dish != null) {
         
        return (
					<>
						<div className='container'>
							<div className='row'>
								<Breadcrumb>
									<BreadcrumbItem>
										<Link to='/menu'>Menu</Link>
									</BreadcrumbItem>
									<BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
								</Breadcrumb>
								<div className='col-12'>
									<h3>{props.dish.name}</h3>
									<hr></hr>
								</div>
							</div>
							
							<div className='row'>
								<div className='mt-5 col-12 col-md-5 m-1'>
									<RenderDish dish={props.dish} />
								</div>
								<div className='mt-5 col-11 col-md-5 m-1'>
									<h4>Comments</h4>
							<RenderComments comments={props.comments}
								postComment={props.postComment}
								dishId={props.dish.id} />
								</div>
							</div>
						</div>
					</>
				);
    }
}
export default  DishdetailComponent;