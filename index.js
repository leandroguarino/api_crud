const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
const port = 3000
app.use(express.json())

//banco de dados de clientes
var clientes = []

app.post('/body-builder', (req, res) => {
    console.log(req.body)
    const bodyBuilder = req.body //receber o bodyBuilder, que é um objeto JSON que vem do front-end
    clientes.push(bodyBuilder) //adicionar o bodyBuiler no banco de dados
    res.send("Cadastrou")
})

app.put('/body-builder/:cpf', (req, res) => {
    res.send("Atualizou")
})

app.delete('/body-builder/:cpf', (req, res) => {
    res.send("Deletou")
})

app.get('/body-builder', (req, res) => {
  res.send('Recreio')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})