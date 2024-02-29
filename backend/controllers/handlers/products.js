const products = require('../../db/products.js');

const getProductsHandler = (req, reply) => {
    reply.send(products);
  };
  
  module.exports = { getProductsHandler };