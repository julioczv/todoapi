const express = require('express');
const app = express();
const port = 3000
const dados = require('./dados.json');
const bodyParser = require('body-parser')
const { Pessoa } = require('./models');



app.use(bodyParser.json());



app.listen(port);

