const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.get("/", (req, res) => {
  res.send("Hello")
})

app.post("/authenticate", async (req, res) => {
  const { username } = res.body;
  return res.json({ username: username, secret: "Deepak23423..." });
});

app.listen(3000);
