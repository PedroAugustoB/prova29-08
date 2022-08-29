import express from 'express';
const routes = express.Router();

import { ProdutoController } from "./src/Controller/ProdutoController.js"


routes.get("/produto", ProdutoController.listarTodos);
routes.post("/produto/novo", ProdutoController.novoProduto);
routes.put("/produto/alterar/:id", ProdutoController.alterarProduto)
routes.put("/produto/deletar/:id", ProdutoController.deletarProduto)

export { routes }