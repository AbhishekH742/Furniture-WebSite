import React from "react";

const Box1 = (props) => {
  const host = "http://localhost:4000";
  const deleteOrderfromCart = async () => {
    const response = await fetch(
      `${host}/api/actions/deleteorder1/${props.id}`,
      {
        method: "DELETE",
      }
    );
    const json = await response.json();
    console.log(json);
    window.location.reload();
  };

  return (
    <div className="box">
      <i className="ri-close-line close-icon" onClick={deleteOrderfromCart}></i>

      <div className="content">
        <h3>{props.name}</h3>
        <span className="quantity">1</span>
        <span className="multiply">x</span>
        <span className="price">{props.price}</span>
      </div>
    </div>
  );
};

export default Box1;
