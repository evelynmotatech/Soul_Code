var express = require("express");
const router = express.Router();

//
const estoqueController = require("../controllers/estoque-controller");

//Rota para página de produtos
router.get("/", estoqueController.listar_produto);

//Rota para cadastrar produto no estoque
router.get("/cadastrarProduto", estoqueController.cadastrar_produto_get);

router.post("/cadastrarProduto", estoqueController.cadastrar_produto_post);

//Rota para deletar produto do estoque
router.get("/deletarProduto/:cod_estoque", estoqueController.deletar_produto);


//Rota para editar produtno do estoque
router.get("/editarProduto/:cod_estoque", estoqueController.editar_produto_get);

router.post("/editarProduto", estoqueController.editar_produto_post);

//Exportar como module
module.exports = router;