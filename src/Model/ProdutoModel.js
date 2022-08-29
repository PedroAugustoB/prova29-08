import { CreatePoolSqlServer } from "../../pool.js";
const conexao = await CreatePoolSqlServer();

export class Produto{
    constructor(preco, descricao, id){
        this._preco = preco,
        this._descricao = descricao,
        this._id = id
    }

    static async SelectAll(){
        try {
            const { recordset } = await conexao.query('select * from Produtos')
            return recordset
        } catch (error) {
            console.log("error script ProdutoModel.js " + error)
            return false
        }
    }

    async Insert(){
       try {
            const { rowsAffected } = await conexao.query(`insert into Produtos values(${ this._preco },'${this._descricao }')`)
            return rowsAffected
        } catch (error) {
            console.log("error model: " + error)
            return false
        }
    }

    async Update(){
        try {
            const { rowsAffected } = await conexao.query(`update Produtos set preco = ${this._preco} , descricao = '${this._descricao}'  where id = ${this._id}`)
            return rowsAffected
        } catch (error) {
            console.log("error model: " + error)
            return false
        }
    }

    async Delete(){
        try {
            const { rowsAffected } = await conexao.query(`DELETE FROM Produtos where id = ${this._id}`)
            return rowsAffected
        } catch (error) {
            console.log("error model: " + error)
            return false
        }
    }
}