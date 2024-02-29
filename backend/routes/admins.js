const { getAdminsHandler } =  require('../controllers/handlers/admins.js');
const { getAdminsSchema } = require('../controllers/schemas/admins.js');

const getAdminsOpts = {
    schema: getAdminsSchema,
    handler: getAdminsHandler,
};

const adminRoutes = (fastify, options, done) => {
    fastify.get('/api/admins', getAdminsOpts);

      done();
};
  
  module.exports = adminRoutes;