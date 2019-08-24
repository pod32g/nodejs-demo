import { Request, Response } from 'express';
import JWT from '../utils/webtokens';
import { Users } from '../models/Users';

export default class Authentication {

    login = (req: Request, res: Response) => {
        let token = JWT.encrypt(req.body);

        let response = {
            token: token
        }

        res.json(response);
    }

    test = (req: Request, res: Response) => {
        console.log(res.locals.user);
        // console.log(user.toString());
        res.send("Hello World");
    }

    register = (req: Request, res: Response) => {
        console.log(req.body);
        Users.createNewUser(req.body.username, req.body.password);

        let token = JWT.encrypt({
            username: req.body.username
        })

        res.json({
            status: "All Correct",
            token: token
        });
    }
}