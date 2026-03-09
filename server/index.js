const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("BiteMap server running");
});

app.get("/places", (req,res) => {
 res.json([
    {name: "Cafe Coffee Day", location: "Mumbai"},
    {name: "Starbucks", location: "Delhi"}
 ]);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});