// Example URL: /api/users?id=1&name=Alice
let users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
];

module.exports = (req, res) => {
  const { method } = req;
  const { id, name } = req.query;

  if (method === 'GET') {
    if (id || name) {
      const user = users.find(user => 
        (id && user.id === parseInt(id)) || 
        (name && user.name.toLowerCase() === name.toLowerCase())
      );
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } else {
      res.status(200).json(users);
    }
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