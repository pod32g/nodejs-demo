import { Request, Response } from 'express';

export default new class Error {
    globalError = (err: any, req: Request, res: Response, next: any) => {
        console.log(err.stack);
        res.status(500).send("Something Broke");
    }

    globalLogs = (req: Request, res: Response, next: any) => {

        let host = req.headers.host;
        let origin = req.headers.origin;
        let user_agent = req.headers["user-agent"];

        console.log(`HOST => ${host} ORIGIN => ${origin} USER AGENT => ${user_agent}`);
        next();
    }
}