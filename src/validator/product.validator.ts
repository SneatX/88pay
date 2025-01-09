import { body} from 'express-validator';

const emptyBodyValidator = [
    body().custom((value, { req }) => {
        if (Object.keys(req.body).length > 0) {
            throw new Error('the body of the request should be empty');
        }
        return true;
    }),
]

const createProductValidator = [
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

export { emptyBodyValidator,createProductValidator}