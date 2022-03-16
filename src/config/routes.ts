import { ProdutoController } from './../controllers/ProdutoController';
import { Router } from "express";

const routes = Router();

routes.get("/", (request, response) => {
    response.json({ message: "Hello world com express!" });
});

routes.post("/produto/cadastrar", new ProdutoController().create);
routes.get("/produto/listar", new ProdutoController().list);
routes.put("/produto/alterar", new ProdutoController().update);
routes.delete("/produto/remover", new ProdutoController().remove);

export { routes }