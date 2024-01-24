// const jsonServer = require('json-server')
// const server = jsonServer.create()
// const router = jsonServer.router('data.json')
// const middlewares = jsonServer.defaults()

// server.use(middlewares);

// // Custom middleware to simulate a 500 error
// server.use((req, res, next) => {
//   if (req.path === '/error') {
//     res.status(500).json({ message: 'Internal Server Error' })
//   } else {
//     next()
//   }
// })

// server.use(router)

// server.listen(3001, () => {
//   console.log('JSON Server is running on port 3001')
// })


const jsonServer = require('json-server');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

// Create database instances for each data file
const adapter1 = new FileSync('./data/data.json');
const adapter2 = new FileSync('./data/schema.json');

const db1 = low(adapter1);
const db2 = low(adapter2);

// Create the main server instance
const server = jsonServer.create();
const router1 = jsonServer.router(db1);
const router2 = jsonServer.router(db2);
const middlewares = jsonServer.defaults();

// Custom middleware to simulate a 500 error with a specific message
const simulate500Error = (req, res, next) => {
  res.status(500).json({ message: 'Internal Server Error' });
};

// Use middlewares
server.use(middlewares);

// Mount the routers for each data file with the custom middleware
server.use('/data1', router1);
server.use('/data2', simulate500Error, router2);

// Start the server
const PORT = 3001;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});





If you want to use multiple JSON files as data sources in a single json-server instance, you can achieve this by using the lowdb database adapter that json-server relies on. lowdb allows you to create a database instance from multiple JSON files.

Here's an example of how you can set up a json-server instance with multiple data files:

Assuming you have two JSON data files, let's say data1.json and data2.json. You can structure your project as follows:

Create data1.json and data2.json:

json
Copy code
// data1.json
{
  "posts": [
    { "id": 1, "title": "Post 1 from Data 1" },
    { "id": 2, "title": "Post 2 from Data 1" }
  ]
}
json
Copy code
// data2.json
{
  "comments": [
    { "id": 1, "body": "Comment 1 from Data 2", "postId": 1 },
    { "id": 2, "body": "Comment 2 from Data 2", "postId": 1 }
  ]
}
Create a JavaScript file (e.g., server.js) for your json-server instance:

javascript
Copy code
const jsonServer = require('json-server');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

// Create database instances for each data file
const adapter1 = new FileSync('data1.json');
const adapter2 = new FileSync('data2.json');

const db1 = low(adapter1);
const db2 = low(adapter2);

// Create the main server instance
const server = jsonServer.create();
const router1 = jsonServer.router(db1);
const router2 = jsonServer.router(db2);
const middlewares = jsonServer.defaults();

// Use middlewares
server.use(middlewares);

// Mount the routers for each data file
server.use('/data1', router1);
server.use('/data2', router2);

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
Install the required npm packages:

bash
Copy code
npm install json-server lowdb lowdb/adapters/FileSync
Run your server:

bash
Copy code
node server.js
Now, you can access the data from each JSON file using different routes:

http://localhost:3000/data1/posts
http://localhost:3000/data2/comments
This setup allows you to have separate data sources and routes for each JSON file within a single json-server instance. Adjust the code according to your specific use case and data files.



In Express and similar web frameworks, including json-server, 
the next function is a callback function that is typically used to pass control to the next middleware function in the stack. 
Middleware functions are functions that have access to the request object (req), 
the response object (res), 
and the next middleware function in the application’s request-response cycle.

In the provided code snippet, 
the custom middleware function is defined as follows:

----- javascript (Copy code)

server.use((req, res, next) => {
  if (req.path === '/error') {
    res.status(500).json({ message: 'Internal Server Error' });
  } else {
    next();
  }
});
Here's a breakdown of what happens:

When a request is made, the middleware checks if the request path is /error.
If the path is /error, it sends a JSON response with a 500 status code, simulating an Internal Server Error.
If the path is not /error, it calls the next function, passing control to the next middleware in the stack.
The next function is crucial for the middleware to let the application know that it should move on to the next middleware in the chain. If the next function is not called, the request will be stuck in the current middleware, and subsequent middleware in the stack won't be executed.

In summary, the next function is used to delegate control to the next middleware in the application's request-response cycle. It allows you to define a sequence of middleware functions that handle different aspects of the request before reaching the final route handler or response.