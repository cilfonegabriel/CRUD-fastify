const { getProductsSchema } = require('../controllers/schemas/products.js');
const { getProductsHandler } = require('../controllers/handlers/products.js');

const getProductsOpts = {
    schema: getProductsSchema,
    handler: getProductsHandler,
};

const productsRoutes = async (fastify, options) => {
    fastify.get('/api/products', getProductsOpts);
    fastify.get('/api/products/:id', getProductsOpts);
};

module.exports = productsRoutes;
