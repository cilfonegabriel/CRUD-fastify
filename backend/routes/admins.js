const { getAdminsHandler, registerAdminHandler  } =  require('../controllers/handlers/admins.js');
const { getAdminsSchema, registerAdminSchema  } = require('../controllers/schemas/admins.js');

const getAdminsOpts = {
    schema: getAdminsSchema,
    handler: getAdminsHandler,
};

const addAdminOpts = {
    schema: registerAdminSchema ,
    handler: registerAdminHandler ,
};


const adminRoutes = (fastify, options, done) => {
    fastify.get('/api/admins', getAdminsOpts);
    fastify.post('/api/login', addAdminOpts);

      done();
};
  
  module.exports = adminRoutes;