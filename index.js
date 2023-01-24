const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());

app.get("/user", (req, res) => {
  const user = { name: "Dmytro Babich", age: 21 };
  res.json({
    response: true,
    user,
  });
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
