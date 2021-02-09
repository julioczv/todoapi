const express = require('express');
const app = express();
const port = 3000
const dados = require('./dados.json');
const bodyParser = require('body-parser')
const { Pessoa } = require('./models');



app.use(bodyParser.json());


//Listagens de todas as pessoas


app.get('/pessoas', async (req, res) => {
    const pessoas = await Pessoa.findAll(); //SELECT * FROM PESSOAS
    res.send(pessoas);

});

//Listagem de pessoa por id

app.get('/pessoas/:id', async (req, res) => {
    const pessoa = await Pessoa.findAll({
        where: {
            id: req.params.id
        }
    }); 
    res.send(pessoa)
});

//listagem de pessoa por tipo 

app.get ('/pessoas/tipo/:tipo' , async (req , res) => {
    const pessoas = await Pessoa.findAll ({
        where: { 
            tipo: req.params.tipo
        }

    });
    res.send(pessoas)
});

//Remoção de pessoa

app.delete('/pessoas/:id', async (req, res) => {
    const pessoa = await Pessoa.destroy({
        where: {
            id: req.params.id
        }
    });
    res.status(200).json(pessoa);
});



//Cadastro de nova pessoa

app.post('/pessoas', async (req, res) => {
    const pessoa = await Pessoa.create(req.body);
    res.send(pessoa);
});



//Atualização de pessoa

app.put('/pessoas/:id', async (req, res) => {
    const pessoa = await Pessoa.update(req.body, {
        where: {
            id: req.params.id
        }
    });
    res.send(pessoa);
});


app.listen(port);

