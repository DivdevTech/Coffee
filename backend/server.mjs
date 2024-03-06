import express from "express";
import mysql from "mysql";

import cors from "cors";

const app = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "agency",
});
app.use(cors());

app.get("/", (req, res) => {
  res.json("Alliance Berries is LIVE! ");
});

//grn_main table
app.get("/grnmain", (req, res) => {
  const q = "SELECT * FROM grn_main LIMIT 2;  ";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

//growers table
app.get("/growers", (req, res) => {
  const q = "SELECT * FROM grower ;  ";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

//grn_outturns table
app.get("/grnoutturns", (req, res) => {
  const q = "SELECT * FROM grn_outturns;";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

//warranted_coffee table
app.get("/warranted_coffee", (req, res) => {
  const q = "SELECT * FROM warranted_coffee LIMIT 2;  ";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

//outturn
app.get("/outturns", (req, res) => {
  const q = "SELECT * FROM outturns LIMIT 2;  ";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.listen(8800, () => {
  console.log("connected to backend!");
});
