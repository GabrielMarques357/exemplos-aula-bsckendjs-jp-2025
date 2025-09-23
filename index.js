
import express from "express"
import { exercicio1Get, exercicio1Post, exercicio2, exercicio3, exercicio4, exercicio5 } from "./services/exercicio.js"

const app = express()
app.use(express.json())

app.get('/api/pessoa/:id', (req, res) => {
    // Query params
    // Inicializa na URL depois do ?
    // ?nome=joao&idade=10
    // ?idade=10

    const nome = req.query.nome
    console.log(req.params)
    
    res.status(200).send("Hello "+ nome)
})



//       /exercicio1/20/10
app.get('/exercicio1/:num1/:num2', exercicio1Get)
app.post('/exercicio1', exercicio1Post)

//       /exercicio2/10/10
app.get('/exercicio2/:valorHr/:qtdHr', exercicio2)

//       /exercicio3/10/10/5/6/7
app.get('/exercicio3/:num1/:num2/:num3/:num4/:num5', exercicio3)

//       /exercicio4/10
app.get('/exercicio4/:celsius', exercicio4)

//       /exercicio5/40
app.get('/exercicio5/:milhas', exercicio5)



app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})