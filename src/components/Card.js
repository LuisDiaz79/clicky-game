import React from "react";

function Card(props) {
  return (
    <div className="card text-center my-3 p-4 hvr-bounce-in">
      <div className="card-header">
       <img className="card-img-top cardstyle" src={props.imagesrc} alt="Card cap" onClick={props.clickimage}/>
      </div>
    </div>
  );
}

export default Card;
