import React from "react";

const Banner = () => {
  return (
    <div>
      <section className="banner-container">
        <div className="banner">
          <img src="image/banner-1.jpg" alt="" />
          <div className="content">
            <span> limited offer </span>
            <h3>upto 50% off</h3>
            <a href="/shop" className="btn">
              shop now
            </a>
          </div>
        </div>

        <div className="banner">
          <img src="image/banner-2.jpg" alt="" />
          <div className="content">
            <span> limited offer </span>
            <h3>upto 50% off</h3>
            <a href="/shop" className="btn">
              shop now
            </a>
          </div>
        </div>

        <div className="banner">
          <img src="image/banner-3.jpg" alt="" />
          <div className="content">
            <span> limited offer </span>
            <h3>upto 50% off</h3>
            <a href="/shop" className="btn">
              shop now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
