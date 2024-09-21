// Example URL: /api/hello
module.exports = (req, res) => {
  res.status(200).json({ message: 'Hello, World!' });
};