const { getProductsSchema, getProductSchema } = require('../controllers/schemas/products.js');
const { getProductsHandler, getProductHandler } = require('../controllers/handlers/products.js');

const getProductsOpts = {
    schema: getProductsSchema,
    handler: getProductsHandler,
};

const getProductOpts = {
    schema: getProductSchema,
    handler: getProductHandler,
};

const productsRoutes = async (fastify, options) => {
    fastify.get('/api/products', getProductsOpts);
    fastify.get('/api/products/:id', getProductOpts);
};

module.exports = productsRoutes;
