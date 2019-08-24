import { Request, Response } from 'express';

export default new class Error {
    globalError = (err: any, req: Request, res: Response, next: any) => {
        console.log(err.stack);
        res.status(500).send("Something Broke");
    }
}