import { Router } from 'express'
import UserController from '../controller/user.controller'
import { emptyBodyValidator, createUserValidation } from '../validator/user.validator'

const router = Router()

router.get('/',emptyBodyValidator, UserController.getAll)
router.get('/:id', emptyBodyValidator,  UserController.getOne)
router.post('/',createUserValidation,  UserController.createUser)

export default router