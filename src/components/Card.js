import React from "react";

function Card(props) {
  return (
    <div className="card text-center">
      <div className="card-header">
       <img className="card-img-top" src={props.image} alt="Card image cap"/>
      </div>
    </div>
  );
}

export default Card;
