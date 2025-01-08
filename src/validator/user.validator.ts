import { body} from 'express-validator';

const createUserValidation = [

    body("id")
        .exists().withMessage("id is required in the body")
        .isString().withMessage("id must be a string"),

    body("name")
        .exists().withMessage("name is required")
        .isString().withMessage("name must be a string"),

    body("email")
        .exists().withMessage("email is required")
        .isEmail().withMessage("email must be a string"),
    
]

export {createUserValidation}