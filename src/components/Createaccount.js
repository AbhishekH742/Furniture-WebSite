import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUserLoginDetails } from "../features/user/userSlice";

import { setusername } from "../features/Activity/activity";

import { useState } from "react";

const host = "http://localhost:4000";

const Createaccount = () => {
  localStorage.clear();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [Userdetails, setUserdetails] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    city: "",
    state: "",
    phone: "",
  });

  const assign = async (e) => {
    e.preventDefault();
    if (Userdetails.phone.length != 10) {
      alert("Invalid credentials");
    } else if (Userdetails.phone.length == 10) {
      const response = await fetch(`${host}/api/auth/register`, {
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
      if (json.success) {
        setUser();
        const response2 = await fetch(`${host}/api/actions/customer`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: Userdetails.name,
            email_id: Userdetails.email,
            address: Userdetails.address,
            city: Userdetails.city,
            state: Userdetails.state,
            phone: Userdetails.phone,
          }),
        });

        localStorage.setItem("email", Userdetails.email);
        navigate("/home");
      } else if (json.exists) {
        setUser();
        alert("Email id already exists");
      }
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
    dispatch(setusername(Userdetails.name));
    localStorage.setItem("user", Userdetails.name);
  };

  return (
    <div className="register">
      <form action="/register" method="POST" onSubmit={assign}>
        <h3>Create Account</h3>

        <input
          tag="register"
          type="name"
          placeholder="enter your name"
          className="rbox"
          name="name"
          onChange={onChange}
        />
        <br></br>
        <input
          tag="register"
          type="email"
          placeholder="enter your email"
          className="rbox"
          name="email"
          onChange={onChange}
        />
        <br></br>
        <input
          tag="register"
          type="password"
          placeholder="enter your password"
          className="rbox"
          name="password"
          onChange={onChange}
        />
        <br></br>
        <input
          tag="register"
          type="address"
          placeholder="enter your address"
          className="rbox"
          name="address"
          onChange={onChange}
        />
        <br></br>
        <input
          tag="register"
          type="city"
          placeholder="enter your city"
          className="rbox"
          name="city"
          onChange={onChange}
        />
        <br></br>
        <input
          tag="register"
          type="state"
          placeholder="enter your state"
          className="rbox"
          name="state"
          onChange={onChange}
        />
        <br></br>
        <input
          tag="register"
          type="phone"
          placeholder="enter your phone number"
          className="rbox"
          name="phone"
          onChange={onChange}
        />
        <br></br>
        <p>
          Already exists <span> </span>
          <a href="/home">Click here</a>
        </p>
        <input type="submit" value="register now" className="btn" />
      </form>
    </div>
  );
};

export default Createaccount;
