const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "Furniture Website",
  password: "ASH@742",
  port: 5432,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
