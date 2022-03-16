import { ProdutoController } from './../controllers/ProdutoController';
import { Router } from "express";

const routes = Router();

routes.get("/", (request, response) => {
    response.json({ message: "Hello world com express!" });
});

routes.post("/produto/cadastrar", new ProdutoController().create);

export { routes }