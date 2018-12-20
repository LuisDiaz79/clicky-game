import React from "react";


function Container(props) {
  return (
  <div className={`container${props.fluid ? "-fluid" : ""} `}>
    <div className="jumbotron text-center container-bg my-3">
      <h1 className="display-3">{props.title}</h1>
      <p className="lead">{props.subtitle}</p>
    </div>
    
      {props.children}
  </div>);
}

export default Container;
