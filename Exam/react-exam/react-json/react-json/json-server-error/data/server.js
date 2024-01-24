const jsonServer = require('json-server')
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

// Create database instances for each data file
const adapter1 = new FileSync('./data/data.json')
const adapter2 = new FileSync('./data/schema.json')
const adapter3 = new FileSync('./data/companies.json')
const adapter4 = new FileSync('./data/record.json')

const data = low(adapter1)
const schema = low(adapter2)
const companies = low(adapter3)
const record = low(adapter4)

// Create the main server instance
const server = jsonServer.create()
const routerData = jsonServer.router(data)
const routerSchema = jsonServer.router(schema)
const routerCompanies = jsonServer.router(companies)
const routerRecord = jsonServer.router(record)

const middlewares = jsonServer.defaults()

// Custom middleware to simulate a 500 error with a specific message
const simulate500Error = (req, res, next) => {
  res.status(500).json({ message: 'Internal Server Error' })
}

// Use middlewares
server.use(middlewares)

// Mount the routers for each data file with the custom middleware
// server.use('/data1', simulate500Error, routerData)
server.use('/data1', routerData) //data
server.use('/data2', routerSchema) //fields
server.use('/data3', routerCompanies) //data
server.use('/data4', routerRecord) //record


// Start the server
const PORT = 4000
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`)
})



