import { Request, Response } from 'express';
import JWT from '../utils/webtokens';

export default class Base {

    user?: {} = undefined;

    checkForFields = (req: Request, res: Response, fields: string[]) => {
        let keys = Object.keys(req.body);
        let missing: string[] = [];

        fields.forEach(key => {
            if (!keys.includes(key)) {
                missing.push(key);
            }
        });

        if (missing.length > 0) {
            res.status(400).json({
                "error": "Missing parameters",
                "missing": missing.toString()
            });
        }
    }

    checkAuthentication = (req: Request, res: Response) => {
        let header = req.headers.authorization;
        let token: string = "";
        if (header !== undefined) {
            token = header.split(" ")[1];
            try {
                this.user = JWT.decrypt(token);
            } catch (error) {
                res.status(400).json({ error: "JWT Token malformed" });
            }
        }
    }
}