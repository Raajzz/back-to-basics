const express = require("express");
const app = express();
const { products } = require("../data/data.js");

app.get("/", (req, res) => {
  res.status(200).send("<h1>Home</h1><a href='/api/products'>Products</a>");
});

app.get("/api/products", (req, res) => {
  const newProducts = products.map((item) => {
    const { id, name, image } = item;
    return { id, name, image };
  });
  res.status(200).json(newProducts);
});

app.get("/api/products/:productId", (req, res) => {
  const { productId } = req.params;
  const singleProduct = products.find((item) => {
    return item.id === Number(productId);
  });
  if (singleProduct) {
    res.status(200).json(singleProduct);
  } else {
    res.status(404).send("<h1>the requested product does not exist</h1>");
  }
});

app.listen(3001, () => {
  console.log("Listening on port 3001");
});
