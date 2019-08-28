import { Request, Response } from 'express';

export default class Base {
    sayHi = (req: Request, res: Response) => {
        res.send('Hello World');
    }
}