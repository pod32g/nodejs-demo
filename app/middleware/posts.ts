import { Request, Response } from 'express';
import Base from './base';

export default class PostsMiddleware extends Base {
    constructor() {
        super();
    }

    newPost = (req: Request, res: Response, next: any) => {
        let fields = [
            "title",
            "content",
            "image"
        ]

        this.checkAuthentication(req, res);
        res.locals.user = this.user;

        this.checkForFields(req, res, fields);

        next();
    }

    getSinglePost = (req: Request, res: Response, next: any) => {
        let params = [
            "postId"
        ]

        this.checkForURLParams(req, res, params);
        next();
    }

    plusOne = (req: Request, res: Response, next: any) => {
        let params = [
            "postId"
        ]

        this.checkForURLParams(req, res, params);
        next();
    }
}