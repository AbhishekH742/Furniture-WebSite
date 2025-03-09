import React from "react";
import Header from "./Header";
import Banner from "./Banner";
import Footer from "./Footer";

import { useState } from "react";

const AdminPage = () => {
  const host = "http://localhost:4000";
  const [values, setValues] = useState({
    Product_name: "",
    Supplier_id: 0,
    Quantity: 0,
    Category_id: 0,
    Description: "",
    Price: 0,
    Category_type: "",
  });

  const [uvalues, setuValues] = useState({
    Product_name: "",
    Supplier_id: 0,
    Quantity: 0,
    Price: 0,
  });
  const onChange1 = (e) => {
    setuValues({ ...uvalues, [e.target.name]: e.target.value });
  };
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const addProducts = async () => {
    const response = await fetch(`${host}/api/actions/updateaddproduct/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Product_name: values.Product_name,
        Supplier_id: values.Supplier_id,
        Quantity: values.Quantity,
        Category_id: values.Category_id,
        Description: values.Description,
        Price: values.Price,
        Category_type: values.Category_type,
      }),
    });
    const json = await response.json();
    alert("product added successfully");
  };

  const adduProducts = async () => {
    const Product_name = uvalues.Product_name;
    const response = await fetch(
      `${host}/api/actions/updateoraddproductsadmin/${Product_name}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Supplier_id: uvalues.Supplier_id,
          Quantity: uvalues.Quantity,
          Price: uvalues.Price,
        }),
      }
    );
    const json = await response.json();
    // console.log(json.data);
    alert("product updated successfully");
  };

  return (
    <div>
      <Header />
      <div className="">
        <div>
          <h1>Add New Products</h1>
          <section className="adminhome">
            <div>
              <div className="adminelements">
                <h1 className="admincontent">Product Name</h1>
                <input
                  placeholder="enter name"
                  className="adminbox"
                  name="Product_name"
                  onChange={onChange}
                />
              </div>
              <div className="adminelements">
                <h1 className="admincontent">Supplier id</h1>
                <input
                  placeholder="enter Supplier id"
                  className="adminbox"
                  name="Supplier_id"
                  onChange={onChange}
                />
              </div>
              <div className="adminelements">
                <h1 className="admincontent">quantity</h1>
                <input
                  placeholder="enter quantity"
                  className="adminbox"
                  name="Quantity"
                  onChange={onChange}
                />
              </div>
              <div className="adminelements">
                <h1 className="admincontent">Category id</h1>
                <input
                  placeholder="enter Category id"
                  className="adminbox"
                  name="Category_id"
                  onChange={onChange}
                />
              </div>
              <div className="adminelements">
                <h1 className="admincontent">Product Description</h1>
                <input
                  placeholder="enter description"
                  className="adminbox"
                  name="Description"
                  onChange={onChange}
                />
              </div>
              <div className="adminelements">
                <h1 className="admincontent">Product Price</h1>
                <input
                  placeholder="enter  Price"
                  className="adminbox"
                  name="Price"
                  onChange={onChange}
                />
              </div>
              <div className="adminelements">
                <h1 className="admincontent">Category type</h1>
                <input
                  placeholder="enter Category type"
                  className="adminbox"
                  name="Category_type"
                  onChange={onChange}
                />
              </div>

              <button
                className="btn"
                onClick={() => {
                  addProducts();
                  //console.log(values.Price);
                }}
              >
                Add
              </button>
            </div>
          </section>
        </div>
        <div>
          <h1>Modify Product Details</h1>
          <section className="adminhome">
            <div>
              <div className="adminelements">
                <h1 className="admincontent">Product Name</h1>
                <input
                  placeholder="enter name"
                  className="adminbox"
                  name="Product_name"
                  onChange={onChange1}
                />
              </div>
              <div className="adminelements">
                <h1 className="admincontent">Supplier id</h1>
                <input
                  placeholder="enter Supplier id"
                  className="adminbox"
                  name="Supplier_id"
                  onChange={onChange1}
                />
              </div>
              <div className="adminelements">
                <h1 className="admincontent">quantity</h1>
                <input
                  placeholder="enter quantity"
                  className="adminbox"
                  name="Quantity"
                  onChange={onChange1}
                />
              </div>
              <div className="adminelements">
                <h1 className="admincontent">Product Price</h1>
                <input
                  placeholder="enter  Price"
                  className="adminbox"
                  name="Price"
                  onChange={onChange1}
                />
              </div>
              <button
                className="btn"
                onClick={() => {
                  adduProducts();
                  //console.log(values.Price);
                }}
              >
                Update
              </button>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminPage;
