import React, { useEffect } from "react";
import Banner from "./Banner";
import Header from "./Header";
import Footer from "./Footer";

import { useSelector } from "react-redux";
import { forusername } from "../features/Activity/activity";

const Home1 = () => {
  const user = useSelector(forusername);
  console.log(user);
  //useEffect();

  return (
    <>
      <Header />
      <div>
        <section className="home">
          <div className="slides-container">
            <div className="slide active">
              <div className="content">
                <span>new arrivals</span>
                <h3>flexible chair</h3>
                <p>
                  "Transform your space into a sanctuary of style and comfort
                  with our curated collection of exquisite furniture pieces.
                  Welcome to a world where every corner tells a story of
                  elegance and functionality."
                </p>
                <a href="/shop" className="btn">
                  shop now
                </a>
              </div>
              <div className="image">
                <img src="/image/home-img-1.png" alt="" />
              </div>
            </div>

            <div className="slide">
              <div className="content">
                <span>new arrivals</span>
                <h3>flexible chair</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Ipsam odio at corrupti itaque. Saepe praesentium est nobis
                  quis incidunt veritatis. Accusamus fugiat quaerat optio modi
                  officiis maiores doloremque cumque nesciunt.
                </p>
                <a href="/shop" className="btn">
                  shop now
                </a>
              </div>
              <div className="image">
                <img src="/image/home-img-2.png" alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
      <Banner />
      <Footer />
    </>
  );
};

export default Home1;
