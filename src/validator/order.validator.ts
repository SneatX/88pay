import { body} from 'express-validator';

const createOrderValidator = [

    body("id")
        .exists().withMessage("id is required in the body")
        .isString().withMessage("id must be a string"),

    body("userId")
        .exists().withMessage("userId is required")
        .isString().withMessage("userId must be a string"),

    body("productId")
        .exists().withMessage("productId is required")
        .isString().withMessage("productId must be a number"),

    body("quantity")
        .exists().withMessage("quantity is required")
        .isNumeric().withMessage("quantity must be a number"),

    body("createdBy")
        .exists().withMessage("createdBy is required")
        .isString().withMessage("createdBy must be a string")
        
    
]

export {createOrderValidator as createProductValidator}