const typeString = { type: 'string' };

const productSchema = {
  type: 'object',
  properties: {
    id: { type: 'number' },
    name: typeString,
    description: typeString,
    price: { type: 'number' },
    availability: { type: 'boolean' }
  },
};

const getProductsSchema = {
  response: {
    200: {
      type: 'array',
      items: productSchema,
    },
  },
};

const getProductSchema = {
  params: {
    id: { type: 'number' },
  },
  response: {
    200: productSchema,
  },
};

module.exports = { getProductsSchema, getProductSchema };
