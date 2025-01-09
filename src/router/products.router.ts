import { Router } from 'express'
import ProductController from '../controller/product.controller'
import { emptyBodyValidator, createProductValidator } from '../validator/product.validator'

const router = Router()

router.get('/',emptyBodyValidator, ProductController.getAll)
router.get('/:id',emptyBodyValidator,  ProductController.getOne)
router.get('/:id/user',emptyBodyValidator,  ProductController.getProductWithUserData)
router.get('/filter/:filter',emptyBodyValidator,  ProductController.getProductsWithFilter)
router.post('/',createProductValidator,  ProductController.createProduct)

export default router