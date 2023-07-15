const express = require('express');
const app = express();
const { products } = require('./data');

app.get('/', (req, res) => {
  res.send('<h1>home page</h1><a href="/api/products">products</a>');
});

app.get('/api/products', (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });

  res.json(newProducts);
});

app.get('/api/products/:id', (req, res) => {
  const { id } = req.params;
  const singleProduct = products.find((product) => product.id === parseInt(id));

  if (!singleProduct) {
    return res.status(404).send('product does not exist');
  }

  return res.status(200).json(singleProduct);
});

app.listen(5000, () => {
  console.log('Server is listening on port 5000....');
});
