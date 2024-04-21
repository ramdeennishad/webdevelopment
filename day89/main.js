const express = require("express");
const app = express();
const port = 3000;
const blog = require('./routes/blog')
const shop = require('./routes/shop')


app.use(express.static("public"));
app.use('/blog', blog)
app.use('/shop', shop)

app
  .get("/", (req, res) => {
    console.log("hey its get request");

    res.send("Hello World2244");
  })
  .post("/", (req, res) => {
    console.log("this is post request");

    res.send("Hello World by POST");
  })
  .put("/", (req, res) => {
    console.log("this is put request");

    res.send("Hello World by PUT");
  });

app.get("/index", (req, res) => {
  console.log("this is index ");

  res.sendFile("templates/index.html", { root: __dirname });
});

app.get("/api", (req, res) => {
  console.log("this is index ");

  res.json({ a: 1, b: 2, c: 3, d: 4 , name:["ram","shyam"]});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
