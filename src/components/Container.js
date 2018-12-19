import React from "react";
import Row from "./Row";
function Container(props) {
  return (
  <div className={`container${props.fluid ? "-fluid" : ""} `}>
    <div className="jumbotron text-center container-bg">
      <h1 className="display-3">{props.title}</h1>
      <p className="lead">{props.subtitle}</p>
    </div>
    
      {props.children}
  </div>);
}

export default Container;
