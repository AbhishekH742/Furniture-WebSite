import React from "react";

const Navbar = (props) => {
  return (
    <>
      <nav className={props.mode}>
        <a href="/home">home</a>
        <a href="/shop">shop</a>
        <a href="/about">about</a>
      </nav>
    </>
  );
};

export default Navbar;
