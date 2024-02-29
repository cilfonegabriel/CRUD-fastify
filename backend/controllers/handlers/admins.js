const jwt = require('jsonwebtoken');

const admins = require('../../db/admins');

const getAdminsHandler = (req, reply) => {
  reply.send(admins);
};

const registerAdminHandler = (req, reply) => {
    const { username, email, password } = req.body;
    const id = admins.length + 1;
  
    admins.push({
      id,
      username,
      email,
      password,
    });
  
    reply.send('Account created successfully');
};

const loginAdminHandler = (req, reply) => {
  const { username, password } = req.body;

  const admin = admins.filter((admin) => {
    return admin.username === username;
  })[0];

  if (!admin) {
    return reply.send("This admin doesn't exist");
  }

  // check if password is correct
  if (password !== admin.password) {
    return reply.send('Invalid credentials');
  }

  // sign a token
  jwt.sign(
    { id: admin.id },
    'my_jwt_secret',
    { expiresIn: 3 * 86400 },
    (err, token) => {
      if (err) reply.status(500).send(new Error(err));

      reply.send({ token });
    }
  );
};

module.exports = { getAdminsHandler, registerAdminHandler, loginAdminHandler };