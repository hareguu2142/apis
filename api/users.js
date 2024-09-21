// Example URL: /api/users?id=1&name=Alice&age=30
let users = [];

module.exports = (req, res) => {
  const { method } = req;
  const { id, name, age } = req.query;

  if (method === 'GET') {
    if (id || name || age) {
      const user = {
        id: id ? parseInt(id) : users.length + 1,
        name: name || 'Unknown',
        age: age ? parseInt(age) : 0
      };
      res.status(200).json(user);
    } else {
      res.status(200).json(users);
    }
  } else if (method === 'POST') {
    const { name, age } = req.body;
    if (!name || !age) {
      return res.status(400).json({ error: 'Name and age are required' });
    }
    const newUser = { id: users.length + 1, name, age: parseInt(age) };
    users.push(newUser);
    res.status(201).json(newUser);
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${method} Not Allowed`);
  }
};