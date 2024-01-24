// const jsonServer = require('json-server');
import jsonServer from 'json-server'
const server = jsonServer.create();
const router = jsonServer.router('data.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);

// Custom middleware to simulate a 500 error
server.use((req, res, next) => {
  if (req.path === '/error') {
    res.status(500).json({ message: 'Internal Server Error' });
  } else {
    next();
  }
});

server.use(router);

server.listen(3001, () => {
  console.log('JSON Server is running on port 3001');
});