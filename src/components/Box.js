import React from "react";

const Box = (props) => {
  return (
    <div className="box">
      <i className="ri-close-line close-icon"></i>
      <div className="image">
        <img src={props.img} alt="" />
      </div>
      <div className="content">
        <h3>{props.name}</h3>
        <span className="quantity">{props.quantity}</span>
        <span className="multiply">{props.multiply}</span>
        <span className="price">{props.price}</span>
      </div>
    </div>
  );
};

export default Box;
