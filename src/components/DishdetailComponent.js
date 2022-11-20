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
} from "reactstrap";
import CommentForm from './CommentForm';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
function RenderDish({ dish }) {
    return (
            <Card>
			<CardImg width="100%" src={baseUrl + dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText> {dish.description} </CardText>
                    </CardBody>
            </Card>
        
    );
    
}
function RenderComments({comments, addComment, dishId}) {
    return (
			<div>
				{comments.map((comments) => {
					return (
						<div key={comments.id}>
							<p> {comments.comment} </p>
							<p>
								-- {comments.author} ,{" "}
								{new Intl.DateTimeFormat("en-US", {
									year: "numeric",
									month: "short",
									day: "2-digit",
								}).format(new Date(Date.parse(comments.date)))}
							</p>
						</div>
					);
				})}
			<CommentForm dishId={dishId} addComment={addComment} />
			</div>
		);
      
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
								addComment={props.addComment}
								dishId={props.dish.id} />
								</div>
							</div>
						</div>
					</>
				);
    }
}
export default  DishdetailComponent;