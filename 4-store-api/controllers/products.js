const getAllProductsStatic = (req, res) => {
  res.status(200).json({ msg: 'testing route' });
};

const getAllProducts = (req, res) => {
  res.status(200).json({ msg: 'products route' });
};

module.exports = { getAllProducts, getAllProductsStatic };
