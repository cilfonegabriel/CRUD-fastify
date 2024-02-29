const fastify = require('fastify')({ logger: true });
const PORT = process.env.PORT || 4000;

const startServer = async () => {
    try {
        await fastify.register(require('./routes/products'));
        fastify.register(require('./routes/admins'));
        await fastify.listen(PORT);
        console.log(`Servidor corriendo en el puerto ${PORT}`);
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};

startServer();
