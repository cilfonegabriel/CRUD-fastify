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

module.exports = { getAdminsHandler, registerAdminHandler };