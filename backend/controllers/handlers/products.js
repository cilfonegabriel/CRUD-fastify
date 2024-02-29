const getProductsHandler = (req, reply) => {
    reply.send([
        { id: 1, name: 'Product One', description: 'This is product one', price: 30.20, availability: true },
        { id: 2, name: 'Product Two', description: 'This is product two', price: 19.50, availability: false },
        { id: 3, name: 'Product Three', description: 'This is product three', price: 8.99, availability: true }
    ]);
  };
  
  module.exports = { getProductsHandler };