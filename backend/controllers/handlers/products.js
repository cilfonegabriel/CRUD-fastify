const products = require('../../db/products.js');

const getProductsHandler = (req, reply) => {
    reply.send(products);
  };

  const getProductHandler = (req, reply) => {
    const { id } = req.params;
  
    const product = products.filter((product) => {
      return product.id === id;
    })[0];
  
    if (!product) {
        return reply.status(404).send(new Error('Product not found'));
    }
  
    return reply.send(product);
  };
  
  module.exports = { getProductsHandler, getProductHandler };