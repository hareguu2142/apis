// Example URL: /api/products
module.exports = (req, res) => {
  const products = [
    { id: 1, name: 'Laptop', price: 999 },

    { id: 2, name: 'Smartphone', price: 699 },
  ];

  res.status(200).json(products);
};