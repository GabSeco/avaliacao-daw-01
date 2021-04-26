const express = require('express');
const app = express();

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

app.use(express.urlencoded({
    extended:true
}));

app.post("/confirmacao", (req, res) => {
    let email = req.body.email;
    let description = req.body.description;

    res.send("<h3>A sua dúvida (" + description + ") foi enviada com sucesso e será respondida no email '" + email + "'.</h3>");
})

app.listen(3000, () => {
    console.log("Server is running...");
})