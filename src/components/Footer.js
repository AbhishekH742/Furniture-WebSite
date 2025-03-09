import React from "react";

const Footer = () => {
  return (
    <>
      <section className="footer">
        <div className="box-container">
          <div className="box">
            <h3>quick links</h3>
            <a href="/home">
              <i className="ri-arrow-right-line">home</i>
            </a>
            <a href="/shop">
              <i className="ri-arrow-right-line">shop</i>
            </a>
          </div>

          <div className="box">
            <h3>extra links</h3>
            <a href="#">
              <i className="ri-facebook-fill"></i>facebook
            </a>
            <a href="#">
              <i className="ri-twitter-fill"></i>twitter
            </a>
            <a href="#">
              <i className="ri-instagram-fill"></i>instagram
            </a>
            <a href="#">
              <i className="ri-linkedin-box-fill"></i>linkedin
            </a>
            <a href="#">
              <i className="ri-pinterest-fill"></i>pinterest
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;

/*

import React from "react";

const Footer = () => {
  return (
    <>
      <section className="footer">
        <div className="box-container">
          <div className="box">
            <h3>quick links</h3>
            <a href="home.html">
              <i className="ri-arrow-right-line">home</i>
            </a>
            <a href="shop.html">
              <i className="ri-arrow-right-line">shop</i>
            </a>
            <a href="about.html">
              <i className="ri-arrow-right-line">about</i>
            </a>
            <a href="team.html">
              <i className="ri-arrow-right-line">team</i>
            </a>
            <a href="blog.html">
              <i className="ri-arrow-right-line">blog</i>
            </a>
            <a href="contact.html">
              <i className="ri-arrow-right-line">contact</i>
            </a>
          </div>

          <div className="box">
            <h3>extra links</h3>
            <a href="#">
              <i className="ri-arrow-right-line"></i>my order
            </a>
            <a href="#">
              <i className="ri-arrow-right-line"></i>my wishlist
            </a>
            <a href="#">
              <i className="ri-arrow-right-line"></i>my account
            </a>
            <a href="#">
              <i className="ri-arrow-right-line"></i>my favourite
            </a>
            <a href="#">
              <i className="ri-arrow-right-line"></i>terms of user
            </a>
          </div>

          <div className="box">
            <h3>extra links</h3>
            <a href="#">
              <i className="ri-facebook-fill"></i>facebook
            </a>
            <a href="#">
              <i className="ri-twitter-fill"></i>twitter
            </a>
            <a href="#">
              <i className="ri-instagram-fill"></i>instagram
            </a>
            <a href="#">
              <i className="ri-linkedin-box-fill"></i>linkedin
            </a>
            <a href="#">
              <i className="ri-pinterest-fill"></i>pinterest
            </a>
          </div>
          <div className="box">
            <h3>newsletter</h3>
            <p>subscribe for latest updates</p>
            <form action="#">
              <input
                type="email"
                name=""
                placeholder="enter your email"
                id=""
              />
              <input type="submit" value="subscribe" className="btn" />
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;

*/
