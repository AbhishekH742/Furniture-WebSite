import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  setCategory,
  setCategorytypes,
  category,
} from "../features/Activity/activity";

const Shopheadingcategories = (props) => {
  const dispatch = useDispatch();

  const categoryname = useSelector(category);
  const Callme = () => {
    useEffect(() => {
      if (categoryname === "Living Room") {
        dispatch(
          setCategorytypes({
            type1: "Sofas",
            type2: "Coffee tables",
            type3: "Side tables",
          })
        );
      }
      if (categoryname === "BedRoom") {
        dispatch(
          setCategorytypes({
            type1: "Beds",
            type2: "Dressers",
            type3: "Nightstands",
          })
        );
      }
      if (categoryname === "Dining Room") {
        dispatch(
          setCategorytypes({
            type1: "Dining tables",
            type2: "Dining chairs",
            type3: "Buffets",
          })
        );
      }
      if (categoryname === "Kitchen") {
        dispatch(
          setCategorytypes({
            type1: "Kitchen islands",
            type2: "Bar stools",
            type3: "Dining sets",
          })
        );
      }
      if (categoryname === "Home/Office") {
        dispatch(
          setCategorytypes({
            type1: "Desks",
            type2: "Office chairs",
            type3: "Bookshelves",
          })
        );
      }
      if (categoryname === "Outdoor") {
        dispatch(
          setCategorytypes({
            type1: "Patio furniture",
            type2: "Garden benches",
            type3: "Hammocks",
          })
        );
      }
    });
  };
  Callme();
  return (
    <div>
      <section className="heading">
        <h3>Categories</h3>
        <h1
          className="categories"
          name="name"
          value="Living Room"
          onClick={() => {
            dispatch(
              setCategory({
                category: "Living Room",
              })
            );
          }}
        >
          Living Room
        </h1>
        <h1
          className="categories"
          name="name"
          value="Bedroom"
          onClick={() => {
            dispatch(
              setCategory({
                category: "BedRoom",
              })
            );
          }}
        >
          Bedroom
        </h1>
        <h1
          className="categories"
          name="name"
          value="Dining Room"
          onClick={() => {
            dispatch(
              setCategory({
                category: "Dining Room",
              })
            );
          }}
        >
          Dining Room
        </h1>
        <h1
          className="categories"
          name="name"
          value="Kitchen"
          onClick={() => {
            dispatch(
              setCategory({
                category: "Kitchen",
              })
            );
          }}
        >
          Kitchen
        </h1>
        <h1
          className="categories"
          name="name"
          value="Home/Office"
          onClick={() => {
            dispatch(
              setCategory({
                category: "Home/Office",
              })
            );
          }}
        >
          Home/Office
        </h1>
        <h1
          className="categories"
          name="name"
          value="Outdoor"
          onClick={() => {
            dispatch(
              setCategory({
                category: "Outdoor",
              })
            );
          }}
        >
          Outdoor
        </h1>

        <p>
          <a href="/">home</a> / <span>{props.page}</span>
        </p>
      </section>
    </div>
  );
};

export default Shopheadingcategories;

/*
useEffect(() => {
  if (categoryname === "Living Room") {
    dispatch(
      setCategorytypes({
        type1: "Sofas",
        type2: "Coffee tables",
        type3: "Side tables",
      })
    );
  }
  if (categoryname === "BedRoom") {
    dispatch(
      setCategorytypes({
        type1: "Beds",
        type2: "Dressers",
        type3: "Nightstands",
      })
    );
  }
  if (categoryname === "Dining Room") {
    dispatch(
      setCategorytypes({
        type1: "Dining tables",
        type2: "Dining chairs",
        type3: "Buffets",
      })
    );
  }
  if (categoryname === "Kitchen") {
    dispatch(
      setCategorytypes({
        type1: "Kitchen islands",
        type2: "Bar stools",
        type3: "Dining sets",
      })
    );
  }
  if (categoryname === "Home/Office") {
    dispatch(
      setCategorytypes({
        type1: "Desks",
        type2: "Office chairs",
        type3: "Bookshelves",
      })
    );
  }
  if (categoryname === "Outdoor") {
    dispatch(
      setCategorytypes({
        type1: "Patio furniture",
        type2: "Garden benches",
        type3: "Hammocks",
      })
    );
  }
}, []);
*/
