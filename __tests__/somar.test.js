import {  it, describe, expect } from '@jest/globals'
import { somar } from '../services/exercicio'

describe('Testando funçaõ somar', () => {

    it('Somando dois números positivos', () => {
        const resultado = somar(1, 2)

        expect(resultado).toBe(3)
    })

    it('Somando dois números negativos', () => {
        const resultado = somar(-1, -2)

        expect(resultado).toBe(-3)
    })

    it('Somando dois números com casa decimal', () => {
        const resultado = somar(1.2, 2.2)

        expect(resultado).toBe(3.4)
    })

    it('Somando zero com outro números', () => {
        const resultado = somar(0, 2)

        expect(resultado).toBe(2)
    })

    it('Somando um números com zero', () => {
        const resultado = somar(1, 0)

        expect(resultado).toBe(1)
    })

})