require("dotenv").config();
const express = require("express");
const { body, validationResult } = require("express-validator");
const bodyParser = require("body-parser");
const router = express.Router();
const db = require("../db");
const app = express();

const ReviewsSchema = require("../models/Reviewmodel");

//const cors = require("cors");
//app.use(cors());
router.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

router.get("/products/:name", async (req, res) => {
  try {
    const result = await db.query(
      "SELECT * FROM Product WHERE Product_name = $1",
      [req.params.name]
    );

    res.status(200).json({
      status: "success",
      data: {
        product: result.rows[0],
      },
    });
    console.log(result.rows[0]);
  } catch (error) {
    console.log(error);
    res.status(500).send("Some error occured");
  }
});

router.get("/orders/:id", async (req, res) => {
  try {
    const result = await db.query(
      "SELECT * FROM Orders WHERE Customer_id = $1",
      [req.params.id]
    );

    res.status(200).json({
      status: "success",
      data: {
        order: result.rows[0],
      },
    });
    console.log(result.rows[0]);
  } catch (error) {
    console.log(error);
    res.status(500).send("Some error occured");
  }
});

router.get("/customer/:email_id", async (req, res) => {
  try {
    const result = await db.query(
      "SELECT * FROM Customer WHERE email_id = $1",
      [req.params.email_id]
    );

    res.status(200).json({
      status: "success",
      data: {
        customer: result.rows[0],
      },
    });
    console.log(result.rows[0]);
  } catch (error) {
    console.log(error);
    res.status(500).send("Some error occured");
  }
});

router.post(
  "/customer",
  [
    body("name", "Enter a valid name"),
    body("email_id").isEmail(),
    body("address", "Enter your address"),
    body("city", "Enter your city"),
    body("state", "Enter your state"),
    body("phone", "Enter your phone number"),
  ],
  async (req, res) => {
    const name = req.body.name;
    const email = req.body.email_id;
    const address = req.body.address;
    const city = req.body.city;
    const state = req.body.state;
    const phone = req.body.phone;

    try {
      const result = await db.query(
        "INSERT INTO Customer (Name,email_id,Address,City,State,phone) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *",
        [name, email, address, city, state, phone]
      );
      res.status(200).json({
        success: "success",
        data: result.rows[0],
      });
    } catch (error) {
      console.error(error);
    }
  }
);

router.get("/getproduct/:name", async (req, res) => {
  try {
    const result = await db.query(
      "SELECT * FROM Product WHERE Product_name=$1",
      [req.params.name]
    );
    res.status(200).json({
      success: "success",
      data: {
        productdata: result.rows[0],
      },
    });
  } catch (error) {
    console.error(error);
  }
});

/*
router.get("/getproducts/:type", async (req, res) => {
  try {
    const result = await db.query(
      "SELECT * FROM Product WHERE Category_type=$1",
      [req.params.type]
    );
    res.status(200).json({
      success: "success",
      data: result.rows,
    });
  } catch (error) {
    console.error(error);
  }
});
*/
router.put(
  "/updateoraddproducts/:name",
  [body("Supplier_id"), body("quantity")],
  async (req, res) => {
    const Supplier_id = req.body.Supplier_id;
    const quantity = req.body.quantity;
    try {
      const result = await db.query(
        "UPDATE Product SET Supplier_id=$1,quantity=$2 WHERE Product_name=$3 RETURNING *;",
        [Supplier_id, quantity, req.params.name]
      );
      res.status(200).json({
        success: "success",
        data: result.rows,
      });
    } catch (error) {
      console.error(error);
    }
  }
);

router.post(
  "/addsupplierdetails/",
  [body("Supplier_name"), body("Address"), body("Phone"), body("email_id")],
  async (req, res) => {
    /*
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    */
    const Supplier_name = req.body.Supplier_name;
    const Address = req.body.Address;
    const Phone = req.body.Phone;
    const email_id = req.body.email_id;

    try {
      const result = await db.query(
        "INSERT INTO Supplier (Supplier_name,Address,Phone,email_id) VALUES ($1,$2,$3,$4) RETURNING *",
        [Supplier_name, Address, Phone, email_id]
      );

      res.status(200).json({
        success: "success",
        data: result.rows,
      });
    } catch (error) {
      console.error(error);
    }
  }
);

//SELECT * FROM Orders  INNER JOIN Product ON Orders.Product_id=Product.Product_id INNER JOIN Customer ON Orders.Customer_id=Customer.Customer_id WHERE Customer.name=$1;
//SELECT * FROM Orders  INNER JOIN Product ON Orders.Product_id=Product.Product_id INNER JOIN Customer ON Orders.Customer_id=Customer.Customer_id WHERE Customer.name='Shivamkal';

router.post(
  "/addorders/",
  [
    body("Customer_id"),
    body("Product_id"),
    body("Ship_address"),
    body("Shipping_date"),
    body("Total_amount"),
  ],
  async (req, res) => {
    const Customer_id = req.body.Customer_id;
    const Product_id = req.body.Product_id;
    const Ship_address = req.body.Ship_address;
    const Shipping_date = req.body.Shipping_date;
    const Order_status = "on board";
    const Total_amount = req.body.Total_amount;

    try {
      const result = await db.query(
        "INSERT INTO Orders (Customer_id, Product_id, Ship_address,Shipping_date,Order_status,Total_amount) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *",
        [
          Customer_id,
          Product_id,
          Ship_address,
          Shipping_date,
          Order_status,
          Total_amount,
        ]
      );
      res.status(200).json({
        success: "success",
        data: result.rows,
      });
    } catch (error) {
      console.error(error);
    }
  }
);

router.put(
  "/updateorplaceorders/",
  [body("Ship_address")],
  async (req, res) => {
    try {
      const Ship_address = req.body.Ship_address;
      const result = await db.query(
        "UPDATE Product SET Ship_address=$1,Shipping_date=$2,Order_status=$3 WHERE Customer_id=$4 RETURNING *;",
        [Ship_address, Shipping_date, Order_status, Customer_id]
      );
      res.status(200).json({
        success: "success",
        data: result.rows,
      });
    } catch (error) {
      console.error(error);
    }
  }
);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
router.put(
  "/updateoraddproductsadmin/:name",
  [body("Supplier_id"), body("Quantity"), body("Price")],
  async (req, res) => {
    const Supplier_id = req.body.Supplier_id;
    const Quantity = req.body.Quantity;
    const Price = req.body.Price;
    try {
      const result = await db.query(
        "UPDATE Product SET Supplier_id=$1,Quantity=$2,Price=$3 WHERE Product_name=$4 RETURNING *;",
        [Supplier_id, Quantity, Price, req.params.name]
      );
      res.status(200).json({
        success: "success",
        data: result.rows,
      });
    } catch (error) {
      console.error(error);
    }
  }
);
router.post(
  "/addsupplier/",
  [body("Supplier_name"), body("Address"), body("Phone"), body("email_id")],
  async (req, res) => {
    const Supplier_name = req.body.Supplier_name;
    const Address = req.body.Address;
    const Phone = req.body.Phone;
    const email_id = req.body.email_id;
    try {
      const result = await db.query(
        "INSERT INTO Supplier (Supplier_name, Address,Phone,email_id) VALUES ($1,$2,$3,$4) RETURNING *",
        [Supplier_name, Address, Phone, email_id]
      );
      res.status(200).json({
        success: "success",
        data: result.rows,
      });
    } catch (error) {
      console.error(error);
    }
  }
);
//////////////////////////////////////////////////////////////////////////////////////////////////////////

router.delete("/deletecustomer/:email_id", async (req, res) => {
  const email_id = req.params.email_id;
  try {
    const result = await db.query(
      "DELETE FROM Customer WHERE email_id=$1 RETURNING *",
      [email_id]
    );

    res.status(200).json({
      success: "success",
      data: result.rows,
    });
  } catch (error) {
    console.error(error);
  }
});

router.delete("/deleteorder/:Order_id", async (req, res) => {
  const Order_id = req.params.Order_id;
  try {
    const result = await db.query(
      "DELETE FROM Orders WHERE Order_id=$1 RETURNING *",
      [Order_id]
    );

    res.status(200).json({
      success: "success",
      data: result.rows,
    });
  } catch (error) {
    console.error(error);
  }
});

router.delete("/deleteorder1/:Product_id", async (req, res) => {
  const Product_id = req.params.Product_id;
  try {
    const result = await db.query(
      "DELETE FROM Orders WHERE Product_id=$1 RETURNING *",
      [Product_id]
    );

    res.status(200).json({
      success: "success",
      data: result.rows,
    });
  } catch (error) {
    console.error(error);
  }
});

router.get("/fetchallreviews/:product_name", async (req, res) => {
  try {
    const Reviews = await ReviewsSchema.find({
      product_name: req.params.product_name,
    });
    res.json(Reviews);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error occurred");
  }
});

router.post(
  "/addreview/:user_name",
  [body("reviewpara"), body("product_name"), body("category_type")],
  async (req, res) => {
    try {
      const reviewpara = req.body.reviewpara;
      const category_type = req.body.category_type;
      const product_name = req.body.product_name;
      const user_name = req.params.user_name;
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const reviewschema = new ReviewsSchema({
        user_name,
        product_name,
        category_type,
        reviewpara,
      });
      const savedReview = await reviewschema.save();
      res.json(savedReview);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal server error occurred");
    }
  }
);

router.put("/updatenote/:_id", [body("reviewpara")], async (req, res) => {
  try {
    const reviewpara = req.body.reviewpara;

    /*
      const newReview = {};
      if (reviewpara) {
        newReview.reviewpara = reviewpara;
      }*/

    let Review = await ReviewsSchema.find({
      _id: req.params._id,
    });
    if (!Review) {
      return res.status(404).send("Not Found");
    }

    Review = await ReviewsSchema.findOneAndUpdate(
      {
        _id: req.params._id,
      },
      { reviewpara: reviewpara }
    );
    res.json({ Review });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some error occurred");
  }
});

router.post(
  "/updateaddproduct/",
  [
    body("Product_name"),
    body("Supplier_id"),
    body("Quantity"),
    body("Category_id"),
    body("Description"),
    body("Price"),
    body("Category_type"),
  ],
  async (req, res) => {
    try {
      const Product_name = req.body.Product_name;
      const Supplier_id = req.body.Supplier_id;
      const Quantity = req.body.Quantity;
      const Category_id = req.body.Category_id;
      const Description = req.body.Description;
      const Price = req.body.Price;
      const Category_type = req.body.Category_type;
      const response = await db.query(
        "INSERT INTO Product (Product_name,Supplier_id,Quantity,Category_id,Description,Price,Category_type) values ($1,$2,$3,$4,$5,$6,$7);",
        [
          Product_name,
          Supplier_id,
          Quantity,
          Category_id,
          Description,
          Price,
          Category_type,
        ]
      );
      const json = await response.json;
      res.status(200).json({
        success: "success",
        data: json,
      });
    } catch (error) {
      console.log(error);
    }
  }
);

//"UPDATE Product SET Supplier_id=$1,Quantity=$2,Price=$3 WHERE Product_name=$4 RETURNING *;"
router.post(
  "/updateaddproduct2/",
  [body("Product_name"), body("Quantity"), body("Price")],
  async (req, res) => {
    try {
      const Product_name = req.body.Product_name;

      const Quantity = req.body.Quantity;

      const Price = req.body.Price;

      const response = await db.query(
        "UPDATE Product SET (Product_name,Supplier_id,Quantity,Category_id,Description,Price,Category_type) values ($1,$2,$3,$4,$5,$6,$7);",
        [
          Product_name,
          Supplier_id,
          Quantity,
          Category_id,
          Description,
          Price,
          Category_type,
        ]
      );
      const json = await response.json;
      res.status(200).json({
        success: "success",
        data: json,
      });
    } catch (error) {
      console.log(error);
    }
  }
);

/*
router.delete("/deletenote/:user_name", async (req, res) => {
  try {
    let Review = await ReviewsSchema.find({ user_name: req.params.user_name });

    if (!Review) {
      return res.status(404).send("Not found");
    }

    Review = await ReviewsSchema.findOneAndDelete({
      user_name: req.params.user_name,
    });
    res.json("Success : Note has been deleted");
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some error occurred");
  }
});
*/

router.delete("/deletenote/:_id", async (req, res) => {
  try {
    let Review = await ReviewsSchema.find({ _id: req.params._id });

    if (!Review) {
      return res.status(404).send("Not found");
    }

    Review = await ReviewsSchema.findOneAndDelete({
      _id: req.params._id,
    });
    res.json("Success : Note has been deleted");
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some error occurred");
  }
});

router.get("/getcartinfo/:Customer_name", async (req, res) => {
  // const Product_id = req.params.product_id;
  const Customer_name = req.params.Customer_name;
  try {
    //SELECT * FROM Product WHERE Product_name IN (SELECT * FROM Orders1 WHERE Customer.name='ShivamKal');
    const result = await db.query(
      "SELECT * FROM Product WHERE Product_id IN (SELECT Product_id FROM Orders WHERE Customer_id=(SELECT Customer_id FROM Customer WHERE name = $1));",
      [Customer_name]
    );

    res.status(200).json({
      success: "success",
      data: result.rows,
    });
    // const resultjson = await result.json();
    // console.log(resultjson);
  } catch (error) {
    console.error(error);
  }
});

router.get("/getcartinfo1/:Customer_name", async (req, res) => {
  // const Product_id = req.params.product_id;
  const Customer_name = req.params.Customer_name;
  try {
    //SELECT * FROM Product WHERE Product_name IN (SELECT * FROM Orders1 WHERE Customer.name='ShivamKal');
    const result = await db.query(
      "SELECT * FROM Product WHERE Product_id IN (SELECT Product_id FROM Orders WHERE Customer_id=(SELECT Customer_id FROM Customer WHERE name = $1));",
      [Customer_name]
    );

    res.status(200).json({
      success: "success",
      data: result.rows,
    });
    // const resultjson = await result.json();
    // console.log(resultjson);
  } catch (error) {
    console.error(error);
  }
});

//"UPDATE Product SET Supplier_id=$1,Quantity=$2,Price=$3 WHERE Product_name=$4 RETURNING *;"
router.put("/placeOrder/:Customer_name", async (req, res) => {
  // const Product_id = req.params.product_id;
  const Customer_name = req.params.Customer_name;
  try {
    /*
    const r1 = await db.query(
      "SELECT * FROM Customer WHERE Customer_name=$1;",
      [Customer_name]
    );
    const r1json = await r1.json;
    */
    const response = await db.query(
      "UPDATE Orders SET Order_status=$1 WHERE Customer_id IN (SELECT Customer_id FROM Customer WHERE name=$2);",
      ["order placed", Customer_name]
    );

    const json = await response.json;
    res.status(200).json({
      success: "success",
      data: json,
    });
  } catch (error) {
    console.error(error);
  }
});

router.get("/getProductdetails/:Productname", async (req, res) => {
  const Product_name = req.params.Productname;
  try {
    const response = await db.query(
      "SELECT * FROM Product WHERE Product_name = $1;",
      [Product_name]
    );
    //const json = await response.json;
    res.status(200).json({
      success: "success",
      data: response.rows[0],
    });
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;

/*
Review = await ReviewsSchema.findByIdAndUpdate(
      req.params.id,
      { $set: newNote },
      { new: true }
    );
*/
