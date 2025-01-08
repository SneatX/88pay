import { Router } from 'express'
import UserController from '../controller/user.controller'
import { createUserValidation } from '../validator/user.validator'

const router = Router()

router.get('/', UserController.getAll)
router.get('/:id', UserController.getOne)
router.post('/',createUserValidation,  UserController.createUser)

export default router