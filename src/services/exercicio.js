class ServiceExercicio {
     Somar(num1, num2) {
        if(isNaN(num1) || isNaN(num2)) {
            throw new Error("Não é número")
        }
       const num1Inteiro = num1*100
       const num2Inteiro = num2*100
       const result = num1Inteiro + num2Inteiro
    
       
        return result/100;
    }
    
     
    Salario(valorHr, qtdHr) {
        return valorHr * qtdHr;
    }
 }
 export default new ServiceExercicio()