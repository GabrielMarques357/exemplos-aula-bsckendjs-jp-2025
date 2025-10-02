 import ServiceExercicio from "../services/exercicio.js"


 class ControllerExercicio {

 
     exercicio1Get (req, res) {

        const num1 = Number (req.params.num1)
        const num2 = Number (req.params.num2)
        console.log(req.params)
        const result = num1 + num2
        
        res.status(200).send("Resultado: "+ result)
    }

     exercicio1Post (req, res) {
            try {
                
                const num1 = req.body.num1
                const num2 = req.body.num2
                const result = ServiceExercicio.Somar(num1, num2)
                res.status(200).send({
                msg: "O resultado é "+result,
                data: result,
                error: null
            }) 
            } catch (error) {
                res.status(400).send({ 
                    msg: error.message,
                    data: null,
                    error: true
                })
            }
        }


     exercicio2Get (req, res) {

        //const { valorHr, qtdHr } = req.params
        const num1 = Number (req.params.valorHr)
        const num2 = Number (req.params.qtdHr)
        const result = num1 * num2

        res.status(200).send("Valor a receber: " + result)
    }

     exercicio2Post (req, res) {

        //const { valorHr, qtdHr } = req.params
        const num1 = Number (req.body.valorHr)
        const num2 = Number (req.body.qtdHr)
        const result = num1 * num2

        res.status(200).send("Valor a receber: " + result)
    }

     exercicio3Get (req, res) {

        const num1 = Number (req.params.num1)
        const num2 = Number (req.params.num2)
        const num3 = Number (req.params.num3)
        const num4 = Number (req.params.num4)
        const num5 = Number (req.params.num5)

        const result1 = num1 + num2 + num3 + num4 + num5
        const result2 = result1 / 5

        res.status(200).send("Média: " + result2)
    }

     exercicio3Post (req, res) {

        const num1 = Number (req.body.num1)
        const num2 = Number (req.body.num2)
        const num3 = Number (req.body.num3)
        const num4 = Number (req.body.num4)
        const num5 = Number (req.body.num5)

        const result1 = num1 + num2 + num3 + num4 + num5
        const result2 = result1 / 5

        res.status(200).send("Média: " + result2)
    }

     exercicio4Get (req, res) {

        const celsius = Number (req.params.celsius)

        const fahre = (9*celsius+160) / 5
        
        res.status(200).send("Fahrenheit: " + fahre)
    }

     exercicio4Post (req, res) {

        const celsius = Number (req.body.celsius)

        const fahre = (9*celsius+160) / 5
        
        res.status(200).send("Fahrenheit: " + fahre)
    }

     exercicio5Get (req, res) {

        const milhas = Number (req.params.milhas)
        const quilometros = 1.60934

        const result = milhas * quilometros

        res.status(200).send("Resulado Km: " + result +"km")
    }

     exercicio5Post (req, res) {

        const milhas = Number (req.body.milhas)
        const quilometros = 1.60934

        const result = milhas * quilometros

        res.status(200).send("Resulado Km: " + result +"km")
    }
 }

 export default new ControllerExercicio()