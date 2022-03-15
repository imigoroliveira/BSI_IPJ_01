import express, { request, response } from 'express';
import { routes } from './config/routes';

const app = express();
app.use(routes);

app.listen(934, () => {
    console.log("Servidor rodando!");
});