import { Request, Response } from 'express';
import Base from './base';

export default class AuthenticationMiddleware extends Base {

    constructor() {
        super();
    }

    login = (req: Request, res: Response, next: any) => {
        let fields = [
            "username",
            "password"
        ]

        this.checkForFields(req, res, fields);
        next();
    }

    test = (req: Request, res: Response, next: any) => {
        let fields = [
            "token"
        ]

        this.checkAuthentication(req, res);
        this.checkForFields(req, res, fields);
        res.locals.user = this.user;
        next();
    }

    register = (req: Request, res: Response, next: any) => {
        let fields = [
            "username",
            "password"
        ]

        this.checkForFields(req, res, fields);
        next();
    }
}