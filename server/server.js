const express = require('express');
const server = express();
const port = 8080;
const knex = require('knex')(require('./knexfile.js')['production']);
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
server.patch('/inventoryList', (req, res) => {
  console.log(req.body)
  knex('shirts').where('id', '=', req.body.id).decrement('quantity', 1)
  .then(res.send(req.body))
})
server.delete('/inventoryList', (req, res) => {
  knex('shirts').where('id', '=', req.body.id).delete()
  .then(res.send(req.body))
})

server.post('/addInventory', (req, res) => {
  knex('shirts').insert(req.body)
  .then(res.send(req.body))
})

server.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
