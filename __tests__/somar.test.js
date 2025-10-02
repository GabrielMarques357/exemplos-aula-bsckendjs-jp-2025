import {  it, describe, expect } from '@jest/globals'
import ServiceExercicio from '../services/exercicio'

describe('Testando funçaõ somar', () => {

    it('Somando dois números positivos', () => {
        const resultado = ServiceExercicio.Somar(1, 2)

        expect(resultado).toBe(3)
    })

    it('Somando dois números negativos', () => {
        const resultado = ServiceExercicio.Somar(-1, -2)

        expect(resultado).toBe(-3)
    })

    it('Somando dois números com casa decimal', () => {
        const resultado = ServiceExercicio.Somar(1.2, 2.2)

        expect(resultado).toBe(3.4)
    })

    it('Somando zero com outro números', () => {
        const resultado = ServiceExercicio.Somar(0, 2)

        expect(resultado).toBe(2)
    })

    it('Somando um números com zero', () => {
        const resultado = ServiceExercicio.Somar(1, 0)

        expect(resultado).toBe(1)
    })

})