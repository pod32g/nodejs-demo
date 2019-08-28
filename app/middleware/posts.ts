import { Request, Response } from 'express';
import Base from './base';

export default class PostsMiddleware extends Base {
    constructor() {
        super();
    }

    newPost = (req: Request, res: Response, next: any) => {
        let fields = [
            "content",
            "image"
        ]

        this.checkAuthentication(req, res);
        this.checkForFields(req, res, fields);

        next();
    }
}