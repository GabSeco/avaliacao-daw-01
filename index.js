const express = require('express');
const app = express();
const fs = require('fs');

app.use('/public', express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/html/index.html");
})

app.get("/index", (req, res) => {
    res.sendFile(__dirname + "/public/html/index.html");
})

app.get("/eu", (req, res) => {
    res.sendFile(__dirname + "/public/html/eu.html");
})

app.get("/duvida", (req, res) => {
    res.sendFile(__dirname + "/public/html/duvida.html");
})

app.get("/aluno", (req, res) => {
    res.sendFile(__dirname + "/public/html/aluno.html");
})

app.use(express.urlencoded({
    extended: true
}))

app.post("/confirmacao", (req, res) => {
    let email = req.body.email;
    let description = req.body.description;

    res.send("<h3>A sua dúvida (" + description + ") foi enviada com sucesso e será respondida no email '" + email + "'.</h3>");
})

app.get("/alunos", (req, res) => {
    fs.readFile("./public/json/alunos.json", (err, data) => {
        if (err) {
            console.log("Arquivo não existente...");
            return;
        }

        res.json(JSON.parse(data)).end();
    })
})

app.get('/alunos/search', (req, res) => {

    fs.readFile(__dirname + "/public/json/alunos.json", (err, data) => {
        if (err) {
            console.log("Arquivo não existente...");
            return;
        }

        let filtro = req.query.filtro;
        let alunos = JSON.parse(data);

        alunos = alunos.filter(aluno => aluno.nome.includes(filtro));
        res.send(alunos);
    });
});

app.listen(3000, () => {
    console.log("Server is running...");
})