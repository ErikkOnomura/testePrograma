const express = require("express");
const router = express.Router();

const ProdutoController = require("./controllers/ProdutoController");

router.get("/produtos", ProdutoController.listarTodos);

module.exports = router;
