import React, { Component } from 'react';
import {  Card, CardImg, CardText,CardBody, CardTitle } from 'reactstrap';

class DishdetailComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };

    }

    

    render() {
        function formatDate(string){
            var options = { year: 'numeric', month: 'long', day: 'numeric' };
                return new Date(string).toLocaleDateString([],options);
        }
        const comments = this.props.dish.comments.map((comments) => {
            return (
                <div key={comments.id}>
                    <p> {comments.comment} </p>
                    <p>-- {comments.author} , { formatDate(comments.date)}</p>
                    
                </div>
        );
    });
        return (
            <div className='row'>
                <div key={this.props.dish.id} className="mt-5 col-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name} />
                    <CardBody>
                        <CardTitle>{this.props.dish.name}</CardTitle>
                        <CardText> {this.props.dish.description} </CardText>
                    </CardBody>
                </Card>
                </div>
                <div className="mt-5 col-11 col-md-5 m-1">
                    <h4>Comments</h4>
                    {comments}
                </div>
            </div>
            
        );
        
    }
};
export default  DishdetailComponent;