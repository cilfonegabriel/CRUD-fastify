const admins = require('../../db/admins');

const getAdminsHandler = (req, reply) => {
  reply.send(admins);
};

module.exports = { getAdminsHandler };