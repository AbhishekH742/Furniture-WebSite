import React, { useState } from "react";
import { useNavigate } from "react-router";
import { setproductimage } from "../features/Activity/activity";
import { useDispatch } from "react-redux";
//import { useEffect } from "react";

const Product = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const Productname = useSelector(productname);
  const host = "http://localhost:4000";

  const addToCart = async () => {
    const email_id = localStorage.getItem("email");
    const customerinfo = await fetch(
      `${host}/api/actions/customer/${email_id}`,
      {
        method: "GET",
      }
    );
    const customerinfojson = await customerinfo.json();
    const cid = customerinfojson.data.customer.customer_id;
    const shippingaddress = customerinfojson.data.customer.address;
    const shippingdate = new Date();

    const response = await fetch(
      `${host}/api/actions/getproduct/${props.name}`,
      {
        method: "GET",
      }
    );

    const responsejson = await response.json();

    const Total_amount = responsejson.data.productdata.price;
    const productid = responsejson.data.productdata.product_id;
    console.log(productid);
    const cartinfo = await fetch(`${host}/api/actions/addorders/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Customer_id: cid,
        Product_id: productid,
        Ship_address: shippingaddress,
        Shipping_date: shippingdate.toDateString(),
        Total_amount: Total_amount,
      }),
    });

    //const cartinfojson = await cartinfo.json();
    //console.log(cartinfojson.data);
    window.location.reload();
  };
  localStorage.setItem("Pname", props.name);

  //////////
  //const pname = localStorage.getItem("Pname");
  /*
  const [currentproductprice, setcurrentproductprice] = useState({
    price: 140,
  });
  const productprice = async () => {
    const price = await fetch(
      `${host}/api/actions/getProductdetails/${props.name}`,
      {
        method: "GET",
      }
    );
    const pricejson = await price.json();

    setcurrentproductprice({
      price: pricejson.data.price,
    });
    // return pricejson.data.price;
  };

  useEffect(() => {
    productprice();
    //console.log(currentproductprice);
  }, []);
*/
  /////////

  return (
    <div className="productbox">
      <div className="image">
        <img
          src={props.img}
          className="imagesize"
          alt=""
          onClick={async () => {
            dispatch(
              setproductimage({
                productimage: props.img,
                productname: props.name,
              })
            );

            navigate("/productInfoPage");
            localStorage.setItem("Pname", props.name);
          }}
        />
      </div>
      <div className="content">
        <h3>{props.name}</h3>
        {/*
        <span className="quantity">quantity : {props.quantity}</span>
        <span className="multiply"> </span>
        <br></br>
        <span className="price">price :{props.price}</span>
        */}
      </div>

      <button className="btn" onClick={addToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
