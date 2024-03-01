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

  const addProductHandler = (req, reply) => {
    const { name, description, price, availability } = req.body;
  
    const id = products.length + 1; // Products is imported from db/product.js
    products.push({ id, name, description, price, availability });
  
    reply.send('Product added');
  };

  const updateProductHandler = (req, reply) => {
    const { name, description, price, availability } = req.body;
    const { id } = req.params;
  
    const product = products.filter((product) => {
      return product.id === id;
    })[0];
  
    if (!product) {
      return reply.status(404).send(new Error("product doesn't exist"));
    }
  
    product.name = name;
    product.description = description;
    product.price = price;
    product.availability = availability;
  
    return reply.send('Product updated');
  };

  const deleteProductHandler = (req, reply) => {
    const { id } = req.params;
  
    const productIndex = products.findIndex((product) => {
      return product.id === id;
    });
  
    if (productIndex === -1) {
      return reply.status(404).send(new Error("product doesn't exist"));
    }
  
    products.splice(productIndex, 1);
  
    return reply.send('Product deleted');
  };
  
  module.exports = { getProductsHandler, getProductHandler, addProductHandler, updateProductHandler, deleteProductHandler };