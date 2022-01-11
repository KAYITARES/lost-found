import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import {Param} from "express-validator";

dotenv.config();

class TokenAuth{

    /** 
 * Generate Token
 * @static
 * @param{object} data object
 * @meberof TokenAuth
 * @return {string} token
 */

static tokenGenerator(data){
    const token = jwt.sign(data,process.env.JWT_KEY);
    
    return token;
    }
    
    static decodeToken(token){
        const data=jwt.verify(token,process.env.JWT_KEY);
        return data;
    }



}
export default TokenAuth;