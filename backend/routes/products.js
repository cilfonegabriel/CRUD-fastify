const { getProductsSchema, getProductSchema, addProductSchema, updateProductSchema, deleteProductSchema } = require('../controllers/schemas/products.js');
const { getProductsHandler, getProductHandler, addProductHandler, updateProductHandler, deleteProductHandler } = require('../controllers/handlers/products.js');

const getProductsOpts = {
    schema: getProductsSchema,
    handler: getProductsHandler,
};

const getProductOpts = {
    schema: getProductSchema,
    handler: getProductHandler,
};

const addProductOpts = {
    schema: addProductSchema,
    handler: addProductHandler,
};

const updateProductOpts = {
    schema: updateProductSchema,
    handler: updateProductHandler, 
};

const deleteProductOpts = {
    schema: deleteProductSchema,
    handler: deleteProductHandler,
  };

const productsRoutes = async (fastify, options) => {
    fastify.get('/api/products', getProductsOpts);
    fastify.get('/api/products/:id', getProductOpts);
    fastify.post('/api/products/new', addProductOpts);
    fastify.put('/api/products/edit/:id', updateProductOpts);
    fastify.delete('/api/products/:id', deleteProductOpts);
};

module.exports = productsRoutes;
