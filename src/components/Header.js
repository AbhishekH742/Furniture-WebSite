import React from "react";
import ShoppingCart from "./ShoppingCart";
import Closer from "./Closer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import {
  setShoppingcart,
  unsetShoppingcart,
  shoppingcart,
  NavbarSetting,
  LoginSetting,
  setCloser,
  unsetCloser,
  setNavbar,
  unsetNavbar,
  setLogin,
  unsetLogin,
} from "../features/Activity/activity";

import Navbar from "./Navbar";
import LoginForm from "./LoginForm";

const Header = () => {
  const dispatch = useDispatch();

  //activity
  const shopping = useSelector(shoppingcart);
  const navbar = useSelector(NavbarSetting);
  const login = useSelector(LoginSetting);

  const onShop = () => {
    if (shopping === "shopping-cart") {
      dispatch(setShoppingcart());
      dispatch(setCloser());
    } else {
      dispatch(unsetShoppingcart());
      dispatch(unsetCloser());
    }
  };

  const onNavbar = () => {
    if (navbar === "navbar") {
      dispatch(setNavbar());
      dispatch(setCloser());
    } else {
      dispatch(unsetNavbar());
      dispatch(unsetCloser());
    }
  };

  const onLogin = () => {
    if (login === "login-form") {
      dispatch(setLogin());
      dispatch(setCloser());
    } else {
      dispatch(unsetLogin());
      dispatch(unsetCloser());
    }
  };
  const navigate = useNavigate();
  // eslint-disable-next-line

  return (
    <>
      <header className="header">
        <a href="/" className="logo">
          <i className="ri-store-2-line"></i>Furniture Management Sytem
        </a>
        <div className="header">
          <div className="icons">
            {localStorage.getItem("admin") !== "yes" ? (
              <>
                <div
                  id="menu-btn"
                  className="ri-menu-line"
                  onClick={onNavbar}
                ></div>

                <div
                  id="cart-btn"
                  className="ri-shopping-cart-line"
                  onClick={onShop}
                ></div>
                <div
                  id="login-btn"
                  className="ri-user-line"
                  onClick={onLogin}
                ></div>
              </>
            ) : (
              <></>
            )}
            {localStorage.getItem("admin") === "yes" ? (
              <div id="login-btn">
                <button
                  id="login-btn"
                  className="btn"
                  onClick={() => {
                    navigate("/adminPage");
                  }}
                >
                  Addproduct
                </button>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </header>
      <Closer />
      <LoginForm mode={login} />
      <Navbar mode={navbar} />
      <ShoppingCart />
    </>
  );
};

export default Header;

/*

<form action="#" className="search-form">
            <input type="search" placeholder="search here..." id="search-box" />
            <label htmlFor="search-box" className="ri-search-line"></label>
          </form>

 */
