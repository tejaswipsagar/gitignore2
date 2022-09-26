import React from "react";

function Contacts(props){
    return(
            <div className="first-card mx-auto cards">
                <h4>{props.name1}</h4>
                <p>{props.ph_no1}</p>
                <p>{props.email1}</p>
                <img className="card-img" src={props.img1} alt=""></img>
            </div>
    )
};

export default Contacts;