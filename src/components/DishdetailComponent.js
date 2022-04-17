import React from 'react';
import {  Card, CardImg, CardText,CardBody, CardTitle } from 'reactstrap';

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
                    <div className="mt-5 col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="mt-5 col-11 col-md-5 m-1">
                        <h4>Comments</h4>
                        <RenderComments comments={props.dish.comments} />
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