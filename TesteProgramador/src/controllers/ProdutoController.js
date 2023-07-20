const ProdutoService = require("../services/ProdutoService");

module.exports = {
  listarTodos: async (req, res) => {
    let json = { error: "", result: [] };

    let produtos = await ProdutoService.listarTodos();

    for (let i in produtos) {
      json.result.push({
        codigo: produtos[i].pcodigo,
        descricao: produtos[i].pdescricao,
        preco: produtos[i].ppreco,
      });
    }
    res.json(json);
  },
};
