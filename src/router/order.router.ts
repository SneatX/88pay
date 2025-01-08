import { Router } from 'express'
import OrderController from '../controller/order.controller'
import { createProductValidator  } from '../validator/order.validator'

const router = Router()

router.get('/', OrderController.getAll)
router.get('/:id', OrderController.getOne)
router.post('/',createProductValidator,  OrderController.createProduct)

export default router