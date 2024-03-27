const express = require("express");
const cors = require("cors");

const datas = require("./datas.json");

const app = express();
app.use(cors());

app.get("/", async (req, res) => {
  try {
    return res.status(200).json(datas);
  } catch (error) {}
});

app.listen(3000, () => {
  console.log("Server started...");
});
