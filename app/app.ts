import express from 'express';
import bodyParser from 'body-parser';
import { authRouter, postRouter } from './routes/router';
import cors from 'cors';
import Error from './middleware/globalerrors';

const app = express();

app.use(Error.globalError);
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/authentication', authRouter);
app.use('/posts', postRouter);

app.listen(3000, () => {
    console.log('Listening on port 3000');
});