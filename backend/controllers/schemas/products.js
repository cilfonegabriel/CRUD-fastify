const typeString = { type: 'string' };
const typeNumber = { type: 'number' }; 
const typeBoolean = { type: 'boolean' }; 

const headerSchema = {
  type: 'object',
  required: ['token'],
  properties: {
    token: typeString,
  },
};

const productSchema = {
  type: 'object',
  properties: {
    id: { type: 'number' },
    name: typeString,
    description: typeString,
    price: typeNumber, 
    availability: typeBoolean 
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
  headers: headerSchema,
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
  headers: headerSchema,
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

  const deleteProductSchema = {
    headers: headerSchema,
    params: {
        id: { type: 'number' },
    },
    response: {
      200: typeString,
    },
  };

module.exports = { getProductsSchema, getProductSchema, addProductSchema, updateProductSchema, deleteProductSchema };
