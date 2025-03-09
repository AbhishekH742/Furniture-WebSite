import React, { useEffect, useState } from "react";

import { pname, pcattype } from "../features/Activity/activity";
//import { selectUserName } from "../features/user/userSlice";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { forusername, setusername } from "../features/Activity/activity";

const ReviewInput = () => {
  const navigate = useNavigate();

  const Pname = useSelector(pname);
  const Pcattype = useSelector(pcattype);

  const host = "http://localhost:4000";
  const [review, setReview] = useState({
    reviewpara: "",
  });
  const onChange = (e) => {
    setReview({ reviewpara: e.target.value });
  };

  const user = useSelector(forusername);

  // console.log(localStorage.getItem("user"));
  const addReview = async () => {
    const fname = localStorage.getItem("user");
    const response = await fetch(`${host}/api/actions/addreview/${fname}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        reviewpara: review.reviewpara,
        product_name: Pname || localStorage.getItem("Pname2"),
        category_type: Pcattype || localStorage.getItem("Productcattype"),
      }),
    });
    // const responsejson = await response.json();
    window.location.reload();
    //console.log(resonsejson);
  };

  return (
    <div>
      <div className="reviewinputbox">
        <h1 className="">Add a Review</h1>

        <div className="">
          <br></br>
          <input
            type="text"
            className="inputbox"
            id="review"
            name="reviewpara"
            onChange={onChange}
            required
          />
        </div>

        <button
          className="btn"
          onClick={() => {
            addReview();
          }}
        >
          Add Review
        </button>
      </div>
    </div>
  );
};

export default ReviewInput;
