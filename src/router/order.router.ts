import { Router } from 'express'
import OrderController from '../controller/order.controller'
import { emptyBodyValidator, createOrderValidator  } from '../validator/order.validator'

const router = Router()

router.get('/', emptyBodyValidator, OrderController.getAll)
router.get('/:id', emptyBodyValidator, OrderController.getOne)
router.post('/',createOrderValidator,  OrderController.createOrder)

export default router