const express = require('express');
const server = express();
const port = 8080;
const knex = require('knex')(require('./knexfile.js')['development']);
const cors = require('cors');
server.use(express.json())
server.use(
  cors({
    origin: ['http://localhost:3000', 'http://127.0.0.1:3000'],
  })
);
server.get('/', (req, res) => res.send('Hello Cici!'))

server.get('/inventoryList', (req, res) => {
  knex.select('*').from('shirts')
  .then(data => res.send(data))
})

server.post('/addInventory', (req, res) => {
  knex('shirts').insert(req.body)
  .then(res.send('added shirt'))
})

server.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))