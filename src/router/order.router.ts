import { Router } from 'express'
import OrderController from '../controller/order.controller'
import { emptyBodyValidator, createOrderValidator  } from '../validator/order.validator'

const router = Router()

router.get('/', emptyBodyValidator, OrderController.getAll)
router.get('/:id', emptyBodyValidator, OrderController.getOne)
router.get('/:id/product', emptyBodyValidator, OrderController.getOrderWithProductAndUserData)
router.get('/user/:id', emptyBodyValidator, OrderController.getOrdersOfUser)
router.post('/',createOrderValidator,  OrderController.createOrder)
router.delete('/:id', emptyBodyValidator, OrderController.deleteOrder)

export default router