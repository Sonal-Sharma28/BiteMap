const express = require("express");
const cors = require("cors");
const db = require("./db/connection");

const app = express();

app.use(cors());
app.use(express.json());

/* GET ALL PLACES */

app.get("/places", (req, res) => {

  const query = "SELECT * FROM places";

  db.query(query, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(result);
    }
  });

});


/* ADD NEW PLACE */

app.post("/places", (req, res) => {

  const { name, location } = req.body;

  const query = "INSERT INTO places (name, location) VALUES (?, ?)";

  db.query(query, [name, location], (err, result) => {

    if (err) {
      res.status(500).send(err);
    } else {
      res.json({ message: "Place added successfully" });
    }

  });

});


/* SEARCH PLACES */

app.get("/search", (req, res) => {

  const searchQuery = req.query.q;

  const query = `
    SELECT * FROM places
    WHERE name LIKE ? OR location LIKE ?
  `;

  db.query(query,[`%${searchQuery}%`,`%${searchQuery}%`], (err, result) => {

    if (err) {
      res.status(500).send(err);
    } else {
      res.json(result);
    }

  });

});


app.listen(5000, () => {
  console.log("Server running on port 5000");
});