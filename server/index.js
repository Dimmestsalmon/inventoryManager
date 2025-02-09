const express = require('express');
const server = express();
const knex = require('knex')(require('./knexfile.js')['production']);
const cors = require('cors');
server.use(express.json())
server.use(
  cors({
    origin: '*',
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


server.listen(3000, () => console.log('Server ready on port 3000.'));

export default server