require("dotenv").config();
const express = require("express");
const cors = require("cors");

const connectToMongo = require("./db1");
connectToMongo();

const app = express();

const port = process.env.PORT || 3006;

app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/auth"));
app.use("/api/actions", require("./routes/actions"));

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(port, () => {
  console.log(`new furniture listening at http://localhost:${port}`);
});
