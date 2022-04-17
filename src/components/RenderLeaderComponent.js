import React from "react";
import { Media } from "reactstrap";


function RenderLeader(props) {
    return (
        props.leaders.map((leader) => {
            return (
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-6 col-md-12">
                            <div className="row">
                                <div className="col-3 col-md-2">
                                    <img src={leader.image} alt={leader.name}></img>
                                </div>
                                <div className="col-9 col-md-9">
                                    <h3>{leader.name}</h3>
                                    <p> {leader.designation}</p>
                                    <p> { leader.description} </p>
                                </div>
                                <hr></hr>
                            </div>
                        </div>
                    </div>
            </div>
            );
    })
    );
}

export default RenderLeader