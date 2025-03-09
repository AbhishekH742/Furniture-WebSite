import React, { useEffect } from "react";
import { useState } from "react";
//import Box from "./Box";
import Box1 from "./Box1";
//import furnitureboxes from "./furnitures-box";
import { shoppingcart } from "../features/Activity/activity";
import { useSelector } from "react-redux";
//import { useDispatch } from "react-redux";
//import { CartPrice, setCartPrice } from "../features/Activity/activity";

const ShoppingCart = () => {
  //const cartPrice = useSelector(CartPrice);
  //const dispatch = useDispatch();
  //console.log(shoppingcart);
  const host = "http://localhost:4000";
  const shopping = useSelector(shoppingcart);

  /*
  const [Price, setPrice] = useState({
    price: 0,
  });*/
  const [Arr1, setArr1] = useState();
  //var Totalprice = 0;
  const cart = async () => {
    const username = localStorage.getItem("user");
    //const username = localStorage.getItem("name");
    const response = await fetch(
      `${host}/api/actions/getcartinfo/${username}`,
      {
        method: "GET",
      }
    );
    if (response) {
      const responsejson = await response.json();
      //console.log(responsejson.data[0]);
      setArr1(responsejson.data);
      if (Arr1) {
        /*
        const totalPrice = Arr1.reduce((total, furniture) => {
          return total + furniture.total_amount;
        }, 0);*/
        /*
        const totalPrice = Arr1.map((furniture) => {
          return Totalprice + furniture.price;
        });*/
        /*
        const totalPrice =
          Arr1 &&
          Arr1.reduce((total, furniture) => {
            return total + furniture.price;
          }, 0);
        setPrice({ price: totalPrice });
        dispatch(setCartPrice({ CartPrice: totalPrice }));
        */
      }
    }
  };
  useEffect(() => {
    cart();
  }, []);

  const PlaceOrders = async () => {
    const Customer_name = localStorage.getItem("name");
    const response = await fetch(
      `${host}/api/actions/placeOrder/${Customer_name}`,
      {
        method: "PUT",
      }
    );

    const responsejson = await response.json();
    console.log(responsejson);
    alert("Order Placed Succefully");
  };

  return (
    <div className={shopping}>
      {Arr1 &&
        Arr1.map((furniture) => {
          return (
            <Box1
              key={furniture.product_id}
              id={furniture.product_id}
              name={furniture.product_name}
              price={furniture.price}
            />
          );
        })}
      <h3 className="total">
        total :
        <span>
          {Arr1 &&
            Arr1.reduce((total, furniture) => {
              return total + furniture.price;
            }, 0)}
        </span>
      </h3>
      <button
        className="btn"
        onClick={() => {
          PlaceOrders();
        }}
      >
        place order
      </button>
    </div>
  );
};

export default ShoppingCart;
