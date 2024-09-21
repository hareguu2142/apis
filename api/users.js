// Example URL: /api/users
let users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },

];

module.exports = (req, res) => {
  const { method } = req;

  if (method === 'GET') {
    res.status(200).json(users);
  } else if (method === 'POST') {
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ error: 'Name is required' });
    }
    const newUser = { id: users.length + 1, name };
    users.push(newUser);
    res.status(201).json(newUser);
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${method} Not Allowed`);
  }
};