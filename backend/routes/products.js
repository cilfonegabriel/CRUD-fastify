const { getProductsSchema, getProductSchema, addProductSchema, updateProductSchema, deleteProductSchema } = require('../controllers/schemas/products.js');
const { getProductsHandler, getProductHandler, addProductHandler, updateProductHandler, deleteProductHandler } = require('../controllers/handlers/products.js');
const verifyToken = require('../controllers/auth/verifyToken')

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

const productsRoutes = async (fastify, options, done) => {
    fastify.register(require('@fastify/auth'));

    fastify.get('/api/products', getProductsOpts);
    fastify.get('/api/products/:id', getProductOpts);

    fastify.register(privateProductRoutes);

    done();
};

const privateProductRoutes = (fastify,options, done) => {

    //Create a new Product
    fastify.post('/api/products/new',{
        preHandler: fastify.auth([verifyToken]),
        ...addProductOpts
    });

    //Update a Product
    fastify.put('/api/products/edit/:id',{
        preHandler: fastify.auth([verifyToken]),
        ...updateProductOpts
    });
        
    //Delete a Product
    fastify.delete('/api/products/:id',{
        preHandler: fastify.auth([verifyToken]),
        ...deleteProductOpts
    });

    done();
};

module.exports = productsRoutes;
