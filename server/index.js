const express = require("express");
const cors = require("cors");
const db = require("./db/connection");

const app = express();

app.use(cors());
app.use(express.json());

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

app.listen(5000, () => {
  console.log("Server running on port 5000");
});