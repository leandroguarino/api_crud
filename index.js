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
  let cpf = req.params.cpf
  for(let i=0; i < clientes.length; i++){
    let cliente = clientes[i]
    if (cliente.cpf == cpf){
      clientes[i] = req.body 
      //substitui o bodyBuilder pelos dados enviados no body
      res.send("Atualizou")
    }
  }
  throw new Error("Body builder nao encontrado")
})

app.delete('/body-builder/:cpf', (req, res) => {
  let cpf = req.params.cpf
  for(let i = 0; i < clientes.length; i++){
      let cliente = clientes[i]
      if (cliente.cpf == cpf){
          clientes.splice(i, 1)
          res.send("Deletou")        
      }
  }
  throw new Error("Cliente nao encontrado")
})

app.get('/body-builder', (req, res) => {
  res.json(clientes)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})