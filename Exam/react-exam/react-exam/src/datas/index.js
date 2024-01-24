const data = require('./data.json');
const schema = require('./schema.json');

// Something more

module.exports = () => ({
  data: data,
  schema: schema
  // Something more
});


// import jsonServer from 'json-server';
// const data = jsonServer.create();
// const record = jsonServer.create();
// const routerData = jsonServer.router('./datas/data.json');
// const routerRecord = jsonServer.router('./datas/record.json');
// const middleware = jsonServer.defaults();
// const port1 = 3001;
// const port2 = 3002;

// data.use(middleware);
// data.use('/api', routerData);

// record.use(middleware);
// record.use('/api', routerRecord);

// // Combine the routers
// const combinedRouter = jsonServer.router({
//   '/api/data': routerData.db,
//   '/api/record': routerRecord.db,
// });port jsonServer from 'json-server';
// const data = jsonServer.create();
// const record = jsonServer.create();
// const routerData = jsonServer.router('./datas/data.json');
// const routerRecord = jsonServer.router('./datas/record.json');
// const middleware = jsonServer.defaults();
// const port1 = 3001;
// const port2 = 3002;

// data.use(middleware);
// data.use('/api', routerData);

// record.use(middleware);
// record.use('/api', routerRecord);

// // Combine the routers
// const combinedRouter = jsonServer.router({
//   '/api/data': routerData.db,
//   '/api/record': routerRecord.db,
// });

// const combinedServer = jsonServer.create();
// combinedServer.use(middleware);
// combinedServer.use(combinedRouter);

// // Listen on a single port
// combinedServer.listen(port1, () => {
//   console.log(`Server is running on port ${port1}`);
// });









// If you want to run both JSON servers in a single command, you can use a package like concurrently to run multiple npm scripts concurrently. First, you need to install concurrently:

// bash
// npm install -g concurrently

// "startS1": "json-server --watch src/datas/data.json --port 4000",
// "startS2": "json-server --watch src/datas/schema.json --port 4001"








// import jsonServer from 'json-server';
// const data = jsonServer.create();
// const record = jsonServer.create();
// const routerData = jsonServer.router('./datas/data.json');
// const routerRecord = jsonServer.router('./datas/record.json');
// const middleware = jsonServer.defaults();
// const port1 = 3001;
// const port2 = 3002;

// data.use(middleware);
// data.use('/api', routerData);
// data.listen(port1, () => {
//   console.log(`Server 1 is running on port ${port1}`);
// });

// record.use(middleware);
// record.use('/api', routerRecord);
// record.listen(port2, () => {
//   console.log(`Server 2 is running on port ${port2}`);
// });




// "start": "json-server --watch src/datas/index.js --port 4000"

// import jsonServer from 'json-server'

// const data = jsonServer.create()
// const record = jsonServer.create()

// const routerData = jsonServer.router('./datas/data.json')
// const routerRecord = jsonServer.router('./datas/record.json')

// const middleware = jsonServer.defaults();

// const port1 = 3001; // Change the port number as needed
// const port2 = 3002;

// data.use(middleware);
// data.use('/api', routerData);
// data.listen(port1, () => {
//   console.log(`Server 1 is running on port ${port1}`);
// });

// record.use(middleware);
// record.use('/api', routerRecord);
// record.listen(port2, () => {
//   console.log(`Server 2 is running on port ${port2}`);
// });


















// const users = require('./users.json');
// const posts = require('./posts.json');
// // Something more

// module.exports = () => ({
//   users: users,
//   posts: posts
//   // Something more
// });

// multiple json server
// https://github.com/huychau/json-server-multiple-files/tree/master

// import data from './data.json'
// import record from './record.json'

// const files = {
//   data: data,
//   record: record,
//   // Additional data here...
// };

// export default () => files;