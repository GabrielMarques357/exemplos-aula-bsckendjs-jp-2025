
import express from "express"

const app = express()

app.get('/api/pessoa/:id', (req, res) => {
    // Query params
    // Inicializa na URL depois do ?
    // ?nome=joao&idade=10
    // ?idade=10

    const nome = req.query.nome
    console.log(req.params)
    
    res.status(200).send("Hello "+ nome)
})

app.get('/exercicio1/:num1/:num2', (req, res) => {

     const num1 = req.params.num1
     const num2 = req.params.num2
     console.log(req.params)
     const result = num1 + num2
     
     res.status(200).send("Resultado: "+ result)
})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})