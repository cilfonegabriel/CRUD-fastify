const { getAdminsHandler, registerAdminHandler, loginAdminHandler  } =  require('../controllers/handlers/admins.js');
const { getAdminsSchema, registerAdminSchema, loginAdminSchema  } = require('../controllers/schemas/admins.js');

const getAdminsOpts = {
    schema: getAdminsSchema,
    handler: getAdminsHandler,
};

const addAdminOpts = {
    schema: registerAdminSchema ,
    handler: registerAdminHandler ,
};

const loginAdminOpts = {
    schema: loginAdminSchema,
    handler: loginAdminHandler,
  };


const adminRoutes = (fastify, options, done) => {
    fastify.get('/api/admins', getAdminsOpts);
    fastify.post('/api/admins/new', addAdminOpts);
    fastify.post('/api/admins/login', loginAdminOpts);

      done();
};
  
  module.exports = adminRoutes;