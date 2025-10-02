import express from 'express'
import ControllerExercicio from '../src/controllers/exercicios.js'

const router = express.Router()

//       /exercicio1/20/10
router.get('/exercicio1/:num1/:num2', ControllerExercicio.exercicio1Get)
router.post('/exercicio1', ControllerExercicio.exercicio1Post)

//       /exercicio2/10/10
router.get('/exercicio2/:valorHr/:qtdHr', ControllerExercicio.exercicio2Get)
router.post('/exercicio2', ControllerExercicio.exercicio2Post)

//       /exercicio3/10/10/5/6/7
router.get('/exercicio3/:num1/:num2/:num3/:num4/:num5', ControllerExercicio.exercicio3Get)
router.post('/exercicio3', ControllerExercicio.exercicio3Post)

//       /exercicio4/10
router.get('/exercicio4/:celsius', ControllerExercicio.exercicio4Get)
router.post('/exercicio4', ControllerExercicio.exercicio4Post)

//       /exercicio5/40
router.get('/exercicio5/:milhas', ControllerExercicio.exercicio5Get)
router.post('/exercicio5', ControllerExercicio.exercicio5Post)

export default router 