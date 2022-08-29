import { Produto } from "../Model/ProdutoModel.js";

export class ProdutoController{

    static async listarTodos( req, res){
        try {
            const produtos = await Produto.SelectAll();
            return res.status(200).json(produtos);
        } catch (error) {
            console.log('Error controller ProdutoController.js: ' + error)
            return res.status(500).json(error)
        }
    }

    static async novoProduto(req, res){
        try {
            const { preco, descricao } = req.body;
            const novo_produto = await new Produto(preco, descricao).Insert();
            return res.status(200).json(novo_produto);
        } catch (error) {
            console.log("error controller: " + error)
            return res.status(500).json(error)
        }
    }

    static async alterarProduto(req, res){
        try {
            const { preco, descricao } = req.body;
            const { id } = req.params;
            const alt_produto = await new Produto(preco, descricao , id).Update();
            return res.status(200).json(alt_produto);
        } catch (error) {
            console.log("error controller: " + error)
            return res.status(500).json(error)
        }
    }


    static async deletarProduto( req, res){
        try {
            const { id } = req.params;
            const del_produto = await Produto(id).Delete();
            return res.status(200).json(del_produto);
        } catch (error) {
            console.log('Error controller ProdutoController.js: ' + error)
            return res.status(500).json(error)
        }
    }
}

