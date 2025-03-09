import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  adminconfirm,
  setadmin,
  unsetadmin,
} from "../features/Activity/activity";

import { useNavigate } from "react-router-dom";
import { setUserLoginDetails } from "../features/user/userSlice";

import { setusername } from "../features/Activity/activity";

import { useState } from "react";

const host = "http://localhost:4000";

const LoginForm = (props) => {
  // eslint-disable-next-line
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const admin = useSelector(adminconfirm);
  const radioGroup = document.getElementsByName("isadmin");

  const Admin = () => {
    if (Userdetails.name && Userdetails.email && Userdetails.password) {
      if (radioGroup[0].checked) {
        dispatch(setadmin());
        localStorage.setItem("admin", "yes");
      } else if (radioGroup[1].checked) {
        dispatch(unsetadmin());
        localStorage.setItem("admin", "no");
      }
    }
  };

  const [Userdetails, setUserdetails] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    city: "",
    state: "",
    phone: "",
  });

  const adminassign = async () => {
    const response = await fetch(`${host}/api/auth/admin2`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email_id: Userdetails.email,
        password: Userdetails.password,
      }),
    });
    const ajson = await response.json();
    if (!ajson.success) {
      localStorage.setItem("admin", "no");
      alert("Please login with correct credentials");
    } else if (ajson.success) {
      localStorage.setItem("admin", "yes");
      const email = Userdetails.email;
      localStorage.setItem("email", Userdetails.email);
      localStorage.setItem("name", Userdetails.name);
      alert("admin login successful");
      //navigate("/home");
    }
  };

  const assign = async (e) => {
    e.preventDefault();
    /* alert(userName);*/
    //alert(Userdetails.email);
    Admin();
    if (localStorage.getItem("admin") != "yes") {
      const response = await fetch(`${host}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email_id: Userdetails.email,
          password: Userdetails.password,
        }),
      });
      const json = await response.json();
      //console.log(json.success);
      if (!json.success) {
        alert("Please login with correct credentials");
      }
      const email = Userdetails.email;
      localStorage.setItem("email", Userdetails.email);
      localStorage.setItem("name", Userdetails.name);
      localStorage.setItem("user", Userdetails.name);
      if (json.success) {
        const getcustomer = await fetch(
          `${host}/api/actions/customer/${email}`,
          {
            method: "GET",
          }
        );
        const getcustomerjson = await getcustomer.json();

        console.log(getcustomerjson.data.customer.name);

        setUserdetails({
          ...Userdetails,
          name: getcustomerjson.data.customer.name,
        });
        setUserdetails({
          ...Userdetails,
          address: getcustomerjson.data.customer.address,
        });
        setUserdetails({
          ...Userdetails,
          city: getcustomerjson.data.customer.city,
        });
        setUserdetails({
          ...Userdetails,
          state: getcustomerjson.data.customer.state,
        });
        setUserdetails({
          ...Userdetails,
          phone: getcustomerjson.data.customer.phone,
        });
        setUser();
        alert("login successfull");
      }
      window.location.reload();
    } else {
      adminassign();
    }
  };

  const onChange = (e) => {
    setUserdetails({ ...Userdetails, [e.target.name]: e.target.value });
  };

  const setUser = () => {
    dispatch(
      setUserLoginDetails({
        name: Userdetails.name,
        email: Userdetails.email,
        password: Userdetails.password,
        address: Userdetails.address,
        city: Userdetails.city,
        state: Userdetails.state,
        phone: Userdetails.phone,
      })
    );
  };

  return (
    <>
      <div className={props.mode}>
        <form action="/home" onSubmit={assign} method="POST">
          <h3>login form</h3>

          <h2 className="isadmin">Admin</h2>
          <input
            type="radio"
            id="yes"
            name="isadmin"
            value="yes"
            //onClick={Admin}
          />
          <span> </span>
          <label htmlFor="yes" className="yes">
            Yes <span> </span>
          </label>
          <input
            type="radio"
            id="no"
            name="isadmin"
            value="no"
            // onClick={Admin}
          />
          <span> </span>
          <label htmlFor="no" className="no">
            No <span> </span>
          </label>
          <input
            type="name"
            placeholder="enter your name"
            className="box"
            name="name"
            onChange={onChange}
          />
          <input
            type="email"
            placeholder="enter your email"
            className="box"
            name="email"
            onChange={onChange}
          />
          <input
            type="password"
            placeholder="enter your password"
            className="box"
            name="password"
            onChange={onChange}
          />
          <div className="remember">
            <input type="checkbox" name="" id="remember-me" />
            <label htmlFor="remember-me">remember me</label>
          </div>
          <input type="submit" value="login now" className="btn" />

          <p>
            don't have an account? <a href="/register">create now</a>
          </p>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
