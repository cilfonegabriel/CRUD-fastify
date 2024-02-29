const getProductsSchema = {
    response: {
        200: {
            type: 'array',
            items: {
                type: 'object',
                properties: {
                id: { type: 'number' },
                name: { type: 'string' },
                description: { type: 'string' },
                price: { type: 'number' },
                availability: { type: 'boolean' }
            },
        },
    },
}};

module.exports = { getProductsSchema };
