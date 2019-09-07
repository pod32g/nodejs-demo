import { Request, Response } from 'express';
import JWT from '../utils/webtokens';
import { Users } from '../models/Users';

export default class Authentication {

    login = async (req: Request, res: Response) => {
        let { username, password } = req.body;
        let user: any = await Users.filter(username);
        if (user.error) {
            console.log('error');
        }
        let resp: { token?: string, error?: string } = {
            error: "Wrong username/password"
        };

        if (username === user.username && password === user.password) {
            let token = JWT.encrypt(username);

            resp = {
                token: token
            }
        }

        res.json(resp);
    }

    test = (req: Request, res: Response) => {
        console.log(res.locals.user);
        // console.log(user.toString());
        res.send("Hello World");
    }

    register = (req: Request, res: Response) => {
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