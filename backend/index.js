const fastify = require('fastify')({ logger: true });
const PORT = process.env.PORT || 4000

fastify.get('/', (req, reply) => {
    reply.send('Hello World!');
  });

  const startServer = async () => {
    try {
      await fastify.listen(PORT);
    } catch (err) {
      fastify.log.error(err);
      process.exit(1);
    }
  };

  startServer();