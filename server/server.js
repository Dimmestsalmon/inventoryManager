const express = require('express');
const server = express();
const port = 8080;
const knex = require('knex')(require('./knexfile.js')['development']);
const cors = require('cors');
server.use(express.json())
server.use(
  cors({
    origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
  })
);
server.get('/', (req, res) => res.send('Hello Cici!'))

server.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))