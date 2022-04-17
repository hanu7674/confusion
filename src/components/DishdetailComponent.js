import React from 'react';
import { Link } from 'react-router-dom';
import {  Card, CardImg, CardText,CardBody, CardTitle,Breadcrumb,BreadcrumbItem } from 'reactstrap';

function RenderDish({ dish }) {
    return (
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText> {dish.description} </CardText>
                    </CardBody>
            </Card>
        
    );
    
}
function RenderComments({comments}) {
    return (
        <div>{comments.map((comments) => {
                return (
                    <div key={comments.id}>
                        <p> {comments.comment} </p>
                        <p>-- {comments.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comments.date)))}</p>
                    
                    </div>
                );
            })}</div>
            
    );
      
}

const DishdetailComponent = (props) => {
    console.log(props);
    if (props.dish != null) {
        return (
            <div className='container'>
                <div className='row'>
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name }</BreadcrumbItem>
                    </Breadcrumb>
                    <div className='col-12'>
                        <h3>{ props.dish.name }</h3>
                    <hr></hr></div>
                </div>
                <div className='row'>
                    <div className="mt-5 col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="mt-5 col-11 col-md-5 m-1">
                        <h4>Comments</h4>
                        <RenderComments comments={props.comments} />
                    </div>
                </div>
            </div>
        );
    }
    else {
        return (
            <div></div>
        );
    }
}
export default  DishdetailComponent;