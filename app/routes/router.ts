import { Router } from 'express';
import Authentication from '../controllers/authentication';
import AuthenticationMiddleware from '../middleware/authentication';

const router = Router();
const auth = new Authentication();
const authMid = new AuthenticationMiddleware();

router.post('/login', authMid.login, auth.login);
router.post('/test', authMid.test, auth.test);
router.post('/register', authMid.register, auth.register);

export default router;