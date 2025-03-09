import React from "react";
import Header from "./Header";
import Heading from "./Heading";
import Services from "./Services";
import Footer from "./Footer";
const About = () => {
  return (
    <div>
      <Header />
      <Heading page="About" />
      <section class="about">
        <div class="image">
          <img src="./image/about-img.jpg" alt="" />
        </div>
        <div class="content">
          <span>welcome to our shop</span>
          <h3>we make your home more astonishing</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi
            dignissimos maxime vitae, sint explicabo eum vero ad tempora
            molestias vel similique totam rem accusamus non esse, veritatis ut
            ipsum laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            porro expedita fugit tempore. Beatae, necessitatibus quisquam saepe
            repellat ipsa eum praesentium accusantium aliquam odit nisi,
            voluptatibus sit quis qui! Earum!
          </p>
          {/* <a href="/" class="btn">
            read more
          </a> */}
        </div>
      </section>
      <Services />
      <Footer />
    </div>
  );
};

export default About;
