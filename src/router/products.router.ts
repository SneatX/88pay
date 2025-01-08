import { Router } from 'express'
import ProductController from '../controller/product.controller'
import { createProductValidator } from '../validator/product.validator'

const router = Router()

router.get('/', ProductController.getAll)
router.get('/:id', ProductController.getOne)
router.post('/',createProductValidator,  ProductController.createProduct)

export default router