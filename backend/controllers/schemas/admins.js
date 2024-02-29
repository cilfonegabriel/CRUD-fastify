const typeString = { type: 'string' };

const getAdminsSchema = {
    response: {
        200: {
            type: 'array',
                items: {
                    type: 'object',
                    properties: {
                    id: { type: 'number' },
                    username: typeString, 
                    email: typeString,
                    },
                },
            },
    },
};

module.exports = { getAdminsSchema };
