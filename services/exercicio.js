 export const exercicio1Get = (req, res) => {

     const num1 = Number (req.params.num1)
     const num2 = Number (req.params.num2)
     console.log(req.params)
     const result = num1 + num2
     
     res.status(200).send("Resultado: "+ result)
}

export const exercicio1Post = (req, res) => {

     const num1 = Number (req.body.num1)
     const num2 = Number (req.body.num2)
     console.log(req.params)
     const result = num1 + num2
     
     res.status(200).send({
        msg: "O resultado é: "+result,
        data: result,
        error: null
     })
}

export const exercicio2 = (req, res) => {

    //const { valorHr, qtdHr } = req.params
    const num1 = Number (req.params.valorHr)
    const num2 = Number (req.params.qtdHr)
    const result = num1 * num2

    res.status(200).send("Valor a receber: " + result)
}

export const exercicio3 = (req, res) => {

    const num1 = Number (req.params.num1)
    const num2 = Number (req.params.num2)
    const num3 = Number (req.params.num3)
    const num4 = Number (req.params.num4)
    const num5 = Number (req.params.num5)

    const result1 = num1 + num2 + num3 + num4 + num5
    const result2 = result1 / 5

    res.status(200).send("Média: " + result2)
}

export const exercicio4 = (req, res) => {

    const celsius = Number (req.params.celsius)

    const fahre = (9*celsius+160) / 5
    
    res.status(200).send("Fahrenheit: " + fahre)
}

export const exercicio5 = (req, res) => {

    const milhas = Number (req.params.milhas)
    const quilometros = 1.60934

    const result = milhas * quilometros

    res.status(200).send("Resulado Km: " + result +"km")
}