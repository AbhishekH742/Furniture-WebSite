import React from "react";

const Services = () => {
  return (
    <div>
      <section class="services">
        <h1 class="title">
          <span>our services</span>

          <div class="box-container">
            <div class="box">
              <img src="./image/serv-1.png" alt="" />
              <h3>product selling</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Excepturi vitae, facere tempora eum obcaecati magnam nihil quia
                id at enim, sunt qui suscipit nemo temporibus natus aut
                consequatur saepe doloribus.
              </p>
            </div>

            <div class="box">
              <img src="./image/serv-2.png" alt="" />
              <h3>product designing</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Excepturi vitae, facere tempora eum obcaecati magnam nihil quia
                id at enim, sunt qui suscipit nemo temporibus natus aut
                consequatur saepe doloribus.
              </p>

              {/* <a href="#" class="btn">
                read more
              </a> */}
            </div>

            <div class="box">
              <img src="./image/serv-3.png" alt="" />
              <h3>24 / 7 support</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Excepturi vitae, facere tempora eum obcaecati magnam nihil quia
                id at enim, sunt qui suscipit nemo temporibus natus aut
                consequatur saepe doloribus.
              </p>
              {/* <a href="#" class="btn">
                read more
              </a> */}
            </div>
          </div>
        </h1>
      </section>
    </div>
  );
};

export default Services;
