import { Request, Response } from 'express';
import { Posts } from '../models/Posts';

export default class Post {
    newPost = (req: Request, res: Response) => {
        let { content, image } = req.body;
        Posts.createNewPost(content, image);

        res.json({
            status: 'ALL OK'
        });
    }

    getAllPosts = async (req: Request, res: Response) => {
        let posts: any = await Posts.getAll();

        res.json({
            posts: posts
        });
    }
}