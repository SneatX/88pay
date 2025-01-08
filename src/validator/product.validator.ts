import { body} from 'express-validator';

const createProductValidator = [

    body("id")
        .exists().withMessage("id is required in the body")
        .isString().withMessage("id must be a string"),

    body("name")
        .exists().withMessage("name is required")
        .isString().withMessage("name must be a string"),

    body("price")
        .exists().withMessage("price is required")
        .isNumeric().withMessage("price must be a number"),

    body("createdBy")
        .exists().withMessage("createdBy is required")
        .isString().withMessage("createdBy must be a string")
        
    
]

export {createProductValidator}