import { Router } from 'express'
import UserRouter from './user.router'
import ProductRouter from './products.router'
import OrderRouter from './order.router'

const router = Router()

router.use('/user', UserRouter)
router.use('/product', ProductRouter)
router.use('/order', OrderRouter)


export default router