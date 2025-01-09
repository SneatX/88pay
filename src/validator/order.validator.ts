import { body} from 'express-validator';

const emptyBodyValidator = [
    body().custom((value, { req }) => {
        if (Object.keys(req.body).length > 0) {
            throw new Error('the body of the request should be empty');
        }
        return true;
    }),
]

const createOrderValidator = [
    body("userId")
        .exists().withMessage("userId is required")
        .isString().withMessage("userId must be a string"),

    body("productId")
        .exists().withMessage("productId is required")
        .isString().withMessage("productId must be a number"),

    body("quantity")
        .exists().withMessage("quantity is required")
        .isNumeric().withMessage("quantity must be a number"),    
]

export { emptyBodyValidator, createOrderValidator}