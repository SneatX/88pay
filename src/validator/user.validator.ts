import { body} from 'express-validator';

const emptyBodyValidator = [
    body().custom((value, { req }) => {
        if (Object.keys(req.body).length > 0) {
            throw new Error('the body of the request should be empty');
        }
        return true;
    }),
]

const createUserValidation = [
    body("name")
        .exists().withMessage("name is required")
        .isString().withMessage("name must be a string"),

    body("email")
        .exists().withMessage("email is required")
        .isEmail().withMessage("email must be an valid email")
]

export { emptyBodyValidator, createUserValidation }