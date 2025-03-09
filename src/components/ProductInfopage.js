import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { productimage, productname } from "../features/Activity/activity";
import { useDispatch, useSelector } from "react-redux";
//import { useEffect } from "react";
import {
  pid,
  pname,
  pdesc,
  pquan,
  pcattype,
  pprice,
  setpvalues,
} from "../features/Activity/activity";

import Reviewscontent from "./Reviewscontent";
import ReviewInput from "./ReviewInput";

const ProductInfopage = () => {
  const Productimage = useSelector(productimage);
  const Productname = useSelector(productname);

  const dispatch = useDispatch();
  const host = "http://localhost:4000";

  const Pid = useSelector(pid);
  const Pname = useSelector(pname);
  const Pdesc = useSelector(pdesc);
  const Pquan = useSelector(pquan);
  const Pcattype = useSelector(pcattype);
  const Pprice = useSelector(pprice);

  const [Arr, setArr] = useState();

  const Productinfo = async () => {
    localStorage.setItem("Product_category", Productname);
    if (Productname) {
      const response = await fetch(
        `${host}/api/actions/getproduct/${Productname}`,
        {
          method: "GET",
        }
      );

      const responsejson = await response.json();

      dispatch(
        setpvalues({
          pid: responsejson.data.productdata.product_id,
          pname: responsejson.data.productdata.product_name,
          pquan: responsejson.data.productdata.quantity,
          pdesc: responsejson.data.productdata.description,
          pcattype: responsejson.data.productdata.category_type,
          pprice: responsejson.data.productdata.price,
        })
      );

      localStorage.setItem("Productimage", Productimage);
      localStorage.setItem(
        "Productcattype",
        responsejson.data.productdata.category_type
      );
      localStorage.setItem(
        "Pname2",
        responsejson.data.productdata.product_name
      );
      localStorage.setItem("Pdesc", responsejson.data.productdata.description);
      localStorage.setItem("Pquan", responsejson.data.productdata.quantity);
      localStorage.setItem("Pprice", responsejson.data.productdata.price);
    }
  };

  const Reviewnewfun = async () => {
    const nPname = localStorage.getItem("Pname");
    const reviewinfo = await fetch(
      `${host}/api/actions/fetchallreviews/${nPname}`,
      {
        method: "GET",
      }
    );
    const reviewinfojson = await reviewinfo.json();

    setArr(reviewinfojson);
  };

  useEffect(() => {
    Reviewnewfun();
    Productinfo();
    Reviewnewfun();
  }, []);

  return (
    <div>
      <Header />

      <section className="shop">
        <div className="shopproductinfo">
          {localStorage.getItem("Productimage") && (
            <div className="productbox">
              <div className="image">
                <img
                  src={Productimage || localStorage.getItem("Productimage")}
                  className="imagesize"
                  alt=""
                />
              </div>
              <div className="content">
                <h1>{Pname || localStorage.getItem("Pname2")}</h1>
              </div>
              <div>
                <h3>Stocks left : {Pquan || localStorage.getItem("Pquan")}</h3>
              </div>
              <div>
                <h3>Price : {Pprice || localStorage.getItem("Pprice")}</h3>
              </div>
              <div>
                <h3>Description : {Pdesc || localStorage.getItem("Pdesc")}</h3>
              </div>
            </div>
          )}
          <div className="shopping-cart2">
            <div className="reviewtitle">Reviews</div>
            <ReviewInput />
            <div>
              {Arr &&
                Arr.map((review) => (
                  <Reviewscontent
                    key={review._id}
                    name={review.user_name}
                    date={review.date}
                    review={review.reviewpara} // replace with the actual property from your review object
                  />
                ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductInfopage;
