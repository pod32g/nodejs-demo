import { Router } from 'express';
import Authentication from '../controllers/authentication';
import AuthenticationMiddleware from '../middleware/authentication';
import Post from '../controllers/posts';
import PostsMiddleware from '../middleware/posts';

const authRouter = Router();
const postRouter = Router();

const auth = new Authentication();
const authMid = new AuthenticationMiddleware();

const post = new Post();
const postMid = new PostsMiddleware();

authRouter.post('/login', authMid.login, auth.login);
authRouter.post('/test', authMid.test, auth.test);
authRouter.post('/register', authMid.register, auth.register);

postRouter.post('/new', postMid.newPost, post.newPost);
postRouter.get('/', post.getAllPosts);
postRouter.get('/:postId', postMid.getSinglePost, post.getSinglePost);
postRouter.get('/like/:postId', postMid.plusOne, post.plusOne);

export { authRouter, postRouter };