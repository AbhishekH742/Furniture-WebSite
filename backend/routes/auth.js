//https://stackoverflow.com/questions/42241113/bcrypt-error-data-and-hash-arguments-required
require("dotenv").config();
const express = require("express");
const cors = require("cors");
//const pg = require("pg");
const db = require("../db");
const bcrypt = require("bcrypt");

const bodyParser = require("body-parser");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const fetchUser = require("../middleware/fetchUser");

const jwt = require("jsonwebtoken");
const JWT_SECRET = "sKisabadb$oy";

const app = express();
//const port = 3000;
const saltRounds = 10;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

router.post(
  "/register",
  [
    body("email_id", "Enter a valid email").isEmail(),
    body("password", "Enter password").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const email_id = req.body.email_id;
    const password = req.body.password;

    try {
      const result = await db.query("SELECT * FROM Login WHERE email_id = $1", [
        email_id,
      ]);
      if (result.rows.length > 0) {
        res.json({ exists: "exists" });
        console.log("Email id already exists");
      } else {
        bcrypt.hash(password, saltRounds, async (err, hash) => {
          if (err) {
            console.error("Error hashing password:", err);
          } else {
            await db.query(
              "INSERT INTO Login (email_id, password) VALUES ($1, $2) RETURNING *",
              [email_id, hash]
            );
          }
        });
        const user = await db.query("SELECT * FROM Login WHERE email_id = $1", [
          email_id,
        ]);
        const data = {
          user: {
            id: user.login_id,
          },
        };
        const authtoken = jwt.sign(data, JWT_SECRET);

        success = true;
        res.json({ success, authtoken });
      }
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Some error occurred");
    }
  }
);

router.post(
  "/login",
  [
    body("email_id", "Enter a valid email").isEmail(),
    body("password", "password cant be blank").exists(),
  ],
  async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const email_id = req.body.email_id;
    const password = req.body.password;
    try {
      let user = await db.query("SELECT * FROM Login WHERE email_id = $1", [
        email_id,
      ]);
      if (!(user.rows.length > 0)) {
        success = false;
        return res.status(400).json({
          success,
          error: "Please try to login with correct credentials",
        });
      } else {
        //console.log(user.rows[0].password);
        await bcrypt.compare(password, user.rows[0].password, (err, valid) => {
          console.log(valid);
          if (!valid) {
            success = false;
            return res.status(400).json({
              success,
              error: "Please try to login with correct credentials ",
            });
          } else if (valid) {
            const data = {
              user: {
                id: user.login_id,
              },
            };
            const authtoken = jwt.sign(data, JWT_SECRET);

            success = true;
            res.json({ success, authtoken });
          }
        });
      }
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal server error occurred");
    }
  }
);

/*
router.post("/getUser", fetchUser, async (req, res) => {
  try {
    userId = req.user_id;
    const user = await db.query("SELECT * FROM Login WHERE email_id = $1", [
      email_id,
    ]);
    res.send(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error occurred");
  }
});
*/

//----------
router.post("/getUser", fetchUser, async (req, res) => {
  try {
    const userId = req.user_id;
    const user = await db.query("SELECT * FROM Login WHERE email_id = $1", [
      email_id,
    ]);
    res.send(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error occurred");
  }
});
//-------------

router.delete("/deletelogin/:email_id", async (req, res) => {
  const email_id = req.params.email_id;
  try {
    const result = await db.query(
      "DELETE FROM Login WHERE email_id=$1 RETURNING *",
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

/*
router.post(
  "/admin",
  [
    body("email_id", "Enter a valid email").isEmail(),
    body("password", "Enter password").exists(),
    body("Phone", "Enter Your Phone Number").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const email_id = req.body.email_id;
    const password = req.body.password;
    const Phone = req.body.Phone;
    try {
      const result = await db.query("SELECT * FROM Admin WHERE email_id = $1", [
        email_id,
      ]);
      if (result.rows.length > 0) {
        console.log("Admin email id already exists");
      } else {
        bcrypt.hash(password, saltRounds, async (err, hash) => {
          if (err) {
            console.error("Error hashing password:", err);
          } else {
            await db.query(
              "INSERT INTO Admin (password,email_id,Phone) VALUES ($1, $2,$3) RETURNING *",
              [hash, email_id, Phone]
            );
          }
        });
        const user = await db.query("SELECT * FROM Admin WHERE email_id = $1", [
          email_id,
        ]);
        const data = {
          user: {
            id: user.login_id,
          },
        };
        const authtoken = jwt.sign(data, JWT_SECRET);
        success = true;
        res.json({ success, authtoken });
      }
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Some error occurred");
    }
  }
);
*/

router.delete("/deleteadmin/:email_id", async (req, res) => {
  const email_id = req.params.email_id;
  try {
    const result = await db.query(
      "DELETE FROM Admin WHERE email_id=$1 RETURNING *",
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
//http://localhost:4000/api/auth/deleteAdmin/ad@gmail.com
router.get("/getAdmin/:email_id", async (req, res) => {
  try {
    const email_id = req.params.email_id;
    const user = await db.query("SELECT * FROM Admin WHERE email_id = $1", [
      email_id,
    ]);
    res.send(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error occurred");
  }
});

router.post(
  "/admin2",
  [body("email_id"), body("password")],
  async (req, res) => {
    const email_id = req.body.email_id;
    const password = req.body.password;
    // const Phone = req.body.Phone;
    try {
      let user = await db.query("SELECT * FROM Admin WHERE email_id = $1", [
        email_id,
      ]);
      if (!(user.rows.length > 0)) {
        success = false;
        return res.status(400).json({
          error: "Please try to login with correct credentials",
        });
      } else {
        await bcrypt.compare(password, user.rows[0].password, (err, valid) => {
          if (!valid) {
            success = false;
            return res.status(400).json({
              success,
              error: "Please try to login with correct credentials ",
            });
          } else if (valid) {
            success = true;
            return res.status(200).json({
              success,
              message: "Login successfull",
            });
          }
        });
      }
      /*
      await db.query(
        "INSERT INTO Admin (password,email_id,Phone) VALUES ($1, $2,$3) RETURNING *",
        [password, email_id, Phone]
      );
      */
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal server error occurred");
    }
  }
);

router.post(
  `/addadmin`,
  [body("phone"), body("email_id"), body("password")],
  async (req, res) => {
    try {
      const phone = req.body.phone;
      const email_id = req.body.email_id;
      const password = req.body.password;

      bcrypt.hash(password, saltRounds, async (err, hash) => {
        if (err) {
          console.error("Error hashing password:", err);
        } else {
          await db.query(
            "INSERT INTO Admin (password,email_id,Phone) values ($1,$2,$3);",
            [hash, email_id, phone]
          );
        }
      });

      // const responsejson = await response.json();
      success = true;
      return res.status(200).json({
        success,
        message: "Login successfull",
      });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal server error occurred");
    }
  }
);

module.exports = router;

/*
router.post(
  "/register",
  [
    body("email_id", "Enter a valid email").isEmail(),
    body("password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    res.send(req.body);

    const email_id = req.body.email_id;
    const password = req.body.password;

    const result = await db.query(
      "INSERT INTO Login (email_id,password) VALUES ($1,$2) RETURNING *",
      [email_id, password]
    );
    const user = result.rows[0];
  }
);

login

router.post(
  "/login",
  [ 
    body("email_id", "Enter a valid email").isEmail(),
    body("password", "password cant be blank").isLength({ min: 5 }),
  ],
  async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const email_id = req.body.email_id;
    const password = req.body.password;
    try {
      let user = await db.query("SELECT * FROM Login WHERE email_id = $1",[email_id,]);
      if (!user) {
        success = false;
        return res.status(400).json({
          error: "Please try to login with correct credentials",
        });
      }
      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        success = false;
        return res.status(400).json({
          success,
          error: "Please try to login with correct credentials ",
        });
      }
      const data = {
        user: {
          id: user.id,
        },
      };
      const authtoken = jwt.sign(data, JWT_SECRET);
      //console.log(jwtData);

      success = true;
      res.json({ success, authtoken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal server error occurred");
    }
  }
);


router.post(
  "/login",
  [
    body("email_id", "Enter a valid email").isEmail(),
    body("password", "password cant be blank").isLength({ min: 5 }),
  ],
  async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const email_id = req.body.email_id;
    const password = req.body.password;
    try {
      let user = await db.query("SELECT * FROM Login WHERE email_id = $1", [
        email_id,
      ]);
      if (!user) {
        success = false;
        return res.status(400).json({
          error: "Please try to login with correct credentials",
        });
      }
      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        success = false;
        return res.status(400).json({
          success,
          error: "Please try to login with correct credentials ",
        });
      }
      const data = {
        user: {
          id: user.login_id,
        },
      };
      const authtoken = jwt.sign(data, JWT_SECRET);
      //console.log(jwtData);

      success = true;
      res.json({ success, authtoken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal server error occurred");
    }
  }
);

router.post(
  "/login",
  [
    body("email_id", "Enter a valid email").isEmail(),
    body("password", "password cant be blank").isLength({ min: 5 }),
  ],
  async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const email_id = req.body.email_id;
    const password = req.body.password;
    try {
      let user = await db.query("SELECT * FROM Login WHERE email_id = $1", [
        email_id,
      ]);
      if (!user) {
        success = false;
        return res.status(400).json({
          error: "Please try to login with correct credentials",
        });
      }
      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        success = false;
        return res.status(400).json({
          success,
          error: "Please try to login with correct credentials ",
        });
      }
      const data = {
        user: {
          id: user.login_id,
        },
      };
      const authtoken = jwt.sign(data, JWT_SECRET);
      //console.log(jwtData);

      success = true;
      res.json({ success, authtoken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal server error occurred");
    }
  }
);

imp
router.post(
  "/login",
  [
    body("email_id", "Enter a valid email").isEmail(),
    body("password", "password cant be blank").isLength({ min: 5 }),
  ],
  async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const email_id = req.body.email_id;
    const password = req.body.password;
    try {
      let user = await db.query("SELECT * FROM Login WHERE email_id = $1", [
        email_id,
      ]);
      if (!(user.rows.length > 0)) {
        success = false;
        return res.status(400).json({
          error: "Please try to login with correct credentials",
        });
      } else {
        await bcrypt.compare(password, user.password, (valid, err) => {
          if (err) {
            success = false;
            return res.status(400).json({
              success,
              error: "Please try to login with correct credentials ",
            });
          } else if (valid) {
            const data = {
              user: {
                id: user.login_id,
              },
            };
            const authtoken = jwt.sign(data, JWT_SECRET);
            //console.log(jwtData);

            success = true;
            res.json({ success, authtoken });
          }
        });
      }
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal server error occurred");
    }
  }
);


*/
