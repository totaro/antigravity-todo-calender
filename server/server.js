const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const port = 3001;

server.use(middlewares);
server.use(jsonServer.bodyParser);

// Custom validation or logic can go here if needed
// For now, standard json-server behavior is sufficient

server.use(router);

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
