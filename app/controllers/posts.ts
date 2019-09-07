import { Request, Response } from 'express';
import { Posts } from '../models/Posts';

export default class Post {
    newPost = (req: Request, res: Response) => {

        let { user } = res.locals;
        let { title, content, image } = req.body;
        Posts.createNewPost(title, content, image, user);

        res.json({
            status: 'ALL OK'
        });
    }

    getAllPosts = async (req: Request, res: Response) => {
        let posts: any = await Posts.getAll();
        // console.log(posts);

        res.json({
            posts: posts
        });
    }

    getSinglePost = async (req: Request, res: Response) => {
        let { postId } = req.params;

        console.log(postId);

        let post = await Posts.getOne(parseInt(postId));

        res.json({
            post: post
        });
    }

    plusOne = async (req: Request, res: Response) => {
        let { postId } = req.params;

        Posts.plusLike(parseInt(postId));

        res.json({
            status: "all ok"
        });
    }
}