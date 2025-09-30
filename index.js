
import express from "express"
import { exercicio1Get, exercicio1Post, exercicio2Get, exercicio2Post, exercicio3Get, exercicio3Post, exercicio4Get, exercicio4Post,
     exercicio5Get, exercicio5Post } from "./controllers/exercicios.js"

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
app.get('/exercicio2/:valorHr/:qtdHr', exercicio2Get)
app.post('/exercicio2', exercicio2Post)

//       /exercicio3/10/10/5/6/7
app.get('/exercicio3/:num1/:num2/:num3/:num4/:num5', exercicio3Get)
app.post('/exercicio3', exercicio3Post)

//       /exercicio4/10
app.get('/exercicio4/:celsius', exercicio4Get)
app.post('/exercicio4', exercicio4Post)

//       /exercicio5/40
app.get('/exercicio5/:milhas', exercicio5Get)
app.post('/exercicio5', exercicio5Post)


app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})