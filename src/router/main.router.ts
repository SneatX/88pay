import { Router } from 'express'
import UserRouter from './user.router'
import ProductRouter from './products.router'
import OrderRouter from './order.router'
import setupDatabase from '../scripts/seed'

const router = Router()

router.get('/seed', setupDatabase)

router.use('/user', UserRouter)
router.use('/product', ProductRouter)
router.use('/order', OrderRouter)


export default router