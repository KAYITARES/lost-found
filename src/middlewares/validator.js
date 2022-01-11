import { check, validationResult } from "express-validator";

class Validator{

    static validateInput = (req, res, next) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const errorMessage = errors.errors.map((err) => err.msg);

            return res.status(400).json({ message: errorMessage });
        }

        return next();

    };
     
    static newUserFounderRules(){

return[

    check("email", "email invalid").trim().isEmail(),
    check("password", "password is not strong").trim().isStrongPassword(),
    check("lastName", "Last name should be valid").trim().isAlpha(),
    check("firstName", "first name should be valid").trim().isAlpha(),
    check("phone","Phone should be valid").trim().isMobilePhone(),
]


    }




}

export default Validator;