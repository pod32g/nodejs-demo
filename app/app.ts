import express from 'express';
import bodyParser from 'body-parser';
import router from './routes/router';
import Error from './middleware/globalerrors';

const app = express();

app.use(Error.globalError);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', router);

app.listen(3000, () => {
    console.log('Listening on port 3000');
});