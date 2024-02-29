const typeString = { type: 'string' };
const typeNumber = { type: 'number' }; // Definir typeNumber como un objeto con type 'number'
const typeBoolean = { type: 'boolean' }; // Definir typeBoolean como un objeto con type 'boolean'

const productSchema = {
  type: 'object',
  properties: {
    id: { type: 'number' },
    name: typeString,
    description: typeString,
    price: typeNumber, // Usar typeNumber en lugar de { type: 'number' }
    availability: typeBoolean // Usar typeBoolean en lugar de { type: 'boolean' }
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

const addProductSchema = {
  body: {
    type: 'object',
    required: ['name', 'description', 'price', 'availability'],
    properties: {
      name: typeString,
      description: typeString,
      price: typeNumber,
      availability: typeBoolean
    },
  },
  response: {
    200: {
      type: 'object',
      properties: {
        message: typeString
      }
    },
  },
};

const updateProductSchema = {
    body: {
      type: 'object',
      required: ['name', 'description', 'price', 'availability'],
      properties: {
        name: typeString,
        description: typeString,
        price: typeNumber,
        availability: typeBoolean
      },
    },
    params: {
      id: { type: 'number' },
    },
    response: {
      200: typeString, 
    },
  };

module.exports = { getProductsSchema, getProductSchema, addProductSchema, updateProductSchema };
