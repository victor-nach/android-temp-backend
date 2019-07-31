import express from 'express';
import bodyParser from 'body-parser';
import router from './routes';

const app = express();

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', router);

app.get('/', (req, res) => {
  res.status(200).json({
    status: 200,
    message: 'Welcome',
  });
});

app.all('*', (req, res) => {
  res.status(404).json({
    status: 400,
    error: 'Sorry endpoint does not exist',
  });
});

app.listen(PORT);

export default app;
