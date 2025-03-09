import React from "react";

const Arsection = () => {
  return (
    <div className="Arcontainer">
      <h1 className="colortitle">
        Visualize the products in Augmented Reality
      </h1>
      <div className="qrcode">
        <div>
          <h3>Couch</h3>
          <img src="../image/couch.jpg" className="imagesize" />
        </div>
        <div>
          <h3>Table</h3>
          <img src="../image/table.jpg" className="imagesize" />
        </div>
        <div>
          <h3>Closet</h3>
          <img src="../image/closet.jpg" className="imagesize" />
        </div>
      </div>
    </div>
  );
};

export default Arsection;
