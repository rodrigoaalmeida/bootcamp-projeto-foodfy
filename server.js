const express = require('express')
const nunjucks = require('nunjucks')

const receitas = require("./data")
const server = express()

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    noCache: true
})

server.get("/", function (req, res) {
    return res.render("index", { itens: receitas })
})


server.get("/receitas", function (req, res) {
    return res.render("receitas", { itens: receitas })
})

server.get("/sobre", function (req, res) {
    return res.render("sobre")
})

server.get("/detalhes/:numero", function (req, res) {
    const recipeIndex = req.params.numero;
    
    return res.render("detalhes", { itens: receitas[recipeIndex] })
})

server.listen(5000, function () {
    console.log("Server is running")
})