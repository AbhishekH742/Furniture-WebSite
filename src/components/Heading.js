import React from "react";

const Heading = (props) => {
  return (
    <div>
      <section class="heading">
        <h3>out shop</h3>
        <p>
          <a href="/home">home</a> / <span>{props.page}</span>
        </p>
      </section>
    </div>
  );
};

export default Heading;
