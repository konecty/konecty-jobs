const data = require("./data/produtos.json")
const express = require("express")
const app = express()
const port = 5000

//Retorna todos os dados sem filtro
app.get('/products', (req,res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.send(JSON.stringify(data))
})

//Retorna os dados
app.get('/products/category/:category', (req,res) => {
    const filtered = data.filter(a => a.categoria == req.params.category)

    res.send(JSON.stringify(filtered))
})

app.listen(port, () => {
    console.log("Servidor ligado")
})