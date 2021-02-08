const express = require('express');
const app = express();
const port = 3000
const dados = require('./dados.json');
const bodyParser = require('body-parser')
const estudantes = ('./estudantes.json')

app.use(bodyParser.json());

app.get('/pessoas', (req, res) => {
    res.send(dados.pessoas);

});

app.get('/Estudantes/:aluno', (req, res) => {
    res.send(estudantes.classe);
    for (let i = 0; 1 < estudantes.classe.length; i += 1) {
        if (estudantes.classe[i].aluno == req.params.aluno) {
            res.send(estudantes.classe[i]);
        }
    }

});
app.post('/pessoas', (req, res) => {
    //inserção no bando
    //Retornar o valor inserido
    res.send(req.body);
});

app.get('/pessoas/:id', (req, res) => {
    for (let i = 0; 1 < dados.pessoas.length; i += 1) {
        if (dados.pessoas[i].id == req.params.id) {
            res.send(dados.pessoas[i]);
        }
    }
});

app.put('/pessoas/id :', (req, res) => {
    //Atualização no bando de dados
    res.send(req.body);
});

app.delete('/pessoas/id :', (req, res) => {
    //Remoção no bando de dados
    res.send(req.body);
});


app.listen(port);

