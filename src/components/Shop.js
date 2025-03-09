import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Product from "./Product";
//import productboxes from "./product-boxes";
import Shopheadingcategories from "./Shopheadingcategories";
import CategoryHeading from "./CategoryHeading";
import {
  Bedsinfo,
  Dressersinfo,
  Nightstandsinfo,
  Buffetsinfo,
  Dinningchairsinfo,
  Diningtableinfo,
  Bookshelvesinfo,
  Desksinfo,
  Officechairsinfo,
  Barstoolsinfo,
  Diningsetsinfo,
  Kitchenislandsinfo,
  Coffeetablesinfo,
  Sidetablesinfo,
  Sofasinfo,
  GarderBenchesinfo,
  Hammocksinfo,
  PatioFurnituresinfo,
} from "./productjsons";

import { Imagecategory } from "../features/Activity/activity";
import { useSelector } from "react-redux/es/hooks/useSelector";
import Arsection from "./Arsection";
//https://www.amazon.in/gp/bestsellers/kitchen/5689367031

const Shop = () => {
  const imagecategory = useSelector(Imagecategory);
  var arr = Sofasinfo;

  const CallmePlease = () => {
    if (imagecategory === "Sofas") {
      arr = Sofasinfo;
    } else if (imagecategory === "Coffee tables") {
      arr = Coffeetablesinfo;
    } else if (imagecategory === "Side tables") {
      arr = Sidetablesinfo;
    } else if (imagecategory === "Beds") {
      arr = Bedsinfo;
    } else if (imagecategory === "Dressers") {
      arr = Dressersinfo;
    } else if (imagecategory === "Nightstands") {
      arr = Nightstandsinfo;
    } else if (imagecategory === "Dining tables") {
      arr = Diningtableinfo;
    } else if (imagecategory === "Dining chairs") {
      arr = Dinningchairsinfo;
    } else if (imagecategory === "Buffets") {
      arr = Buffetsinfo;
    } else if (imagecategory === "Kitchen islands") {
      arr = Kitchenislandsinfo;
    } else if (imagecategory === "Bar stools") {
      arr = Barstoolsinfo;
    } else if (imagecategory === "Dining sets") {
      arr = Diningsetsinfo;
    } else if (imagecategory === "Desks") {
      arr = Desksinfo;
    } else if (imagecategory === "Office chairs") {
      arr = Officechairsinfo;
    } else if (imagecategory === "Bookshelves") {
      arr = Bookshelvesinfo;
    } else if (imagecategory === "Patio furniture") {
      arr = PatioFurnituresinfo;
    } else if (imagecategory === "Garden benches") {
      arr = GarderBenchesinfo;
    } else if (imagecategory === "Hammocks") {
      arr = Hammocksinfo;
    }
  };
  CallmePlease();
  //console.log(imagecategory);
  return (
    <div>
      <Header />
      <Shopheadingcategories page="Shop" />
      <CategoryHeading />
      <section className="shop">
        <div className="shopproduct">
          {arr.map((product) => {
            return (
              <Product
                key={product.id}
                _id={product.id}
                qr={product.qr}
                img={product.img}
                name={product.name}
                quantity={product.quantity}
                multiply={product.multiply}
                price={product.price}
              />
            );
          })}
        </div>
      </section>
      <Arsection />
      <Footer />
    </div>
  );
};

export default Shop;

//cd furniture2
//nodemon index.js

//cd backend
//npm start
//pg 150 heading
//243

/*
type1: "Sofas",
type2: "Coffee tables",
type3: "Side tables"

type1: "Beds",
type2: "Dressers",
type3: "Nightstands",

type1: "Dining tables",
type2: "Dining chairs",
type3: "Buffets",

type1: "Kitchen islands",
type2: "Bar stools",
type3: "Dining sets",

type1: "Desks",
type2: "Office chairs",
type3: "Bookshelves",
            
type1: "Patio furniture",
type2: "Garden benches",
type3: "Hammocks",
*/

/*

const CallmePlease = () => {
    useEffect(() => {
      if (imagecategory=== "Sofas") {
       arr= Sofasinfo;
      } else if (imagecategory=== "Coffee tables") {
       arr= Coffeetablesinfo;
      } else if (imagecategory=== "Side tables") {
       arr= Sidetablesinfo;
      } else if (imagecategory=== "Beds") {
       arr= Bedsinfo;
      } else if (imagecategory=== "Dressers") {
       arr= Dressersinfo;
      } else if (imagecategory=== "Nightstands") {
       arr= Nightstandsinfo;
      } else if (imagecategory=== "Dining tables") {
       arr= Diningtableinfo;
      } else if (imagecategory=== "Dining chairs") {
       arr= Dinningchairsinfo;
      } else if (imagecategory=== "Buffets") {
       arr= Buffetsinfo;
      } else if (imagecategory=== "Kitchen islands") {
       arr= Kitchenislandsinfo;
      } else if (imagecategory=== "Bar stools") {
       arr= Barstoolsinfo;
      } else if (imagecategory=== "Dining sets") {
       arr= Diningsetsinfo;
      } else if (imagecategory=== "Desks") {
       arr= Desksinfo;
      } else if (imagecategory=== "Office chairs") {
       arr= Officechairsinfo;
      } else if (imagecategory=== "Bookshelves") {
       arr= Bookshelvesinfo;
      } else if (imagecategory=== "Patio furniture") {
       arr= PatioFurnituresinfo;
      } else if (imagecategory=== "Garden benches") {
       arr= GarderBenchesinfo;
      } else if (imagecategory=== "Hammocks") {
       arr= Hammocksinfo;
      }
    });
  };

*/
