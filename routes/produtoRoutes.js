const express = require("express");

const router = express.Router();

// ========================================
// DADOS
// ========================================

let produtos = [
{
id: 1,
nome: "Notebook",
descricao: "Notebook para uso profissional",
preco: 3500.00,
estoque: 10,
categoria: "Informática"
},
{
id: 2,
nome: "Mouse",
descricao: "Mouse sem fio",
preco: 89.90,
estoque: 25,
categoria: "Informática"
},
{
id: 3,
nome: "Teclado",
descricao: "Teclado mecânico",
preco: 250.00,
estoque: 15,
categoria: "Periféricos"
}
];

// ========================================
// LISTAR PRODUTOS
// ========================================

router.get("/", (req, res) => {

res.render("produto/index", {
    produtos: produtos
});


});

// ========================================
// ABRIR CADASTRO
// ========================================

router.get("/cadastro", (req, res) => {

res.render("produto/form-produto");


});

// ========================================
// CADASTRAR PRODUTO
// ========================================

router.post("/", (req, res) => {

const {
    nome,
    descricao,
    preco,
    estoque,
    categoria
} = req.body;

const novoProduto = {

    id: produtos.length + 1,
    nome: nome,
    descricao: descricao,
    preco: preco,
    estoque: estoque,
    categoria: categoria

};

produtos.push(novoProduto);

res.redirect("/produto");


});

router.get("/excluir/:id", (req, res) => {
  let id = parseInt(req.params.id);
  produtos = produtos.filter(c => c.id !== id);
  res.redirect("/produto");
});

//editar - form - get
router.get("/editar/:id", (req, res) => {
  let id = parseInt(req.params.id);
  let produto = produtos.find(c => c.id === id);
  if (!produto) {
    return res.redirect("/produto");
  }

  res.render("produto/editar", {produto});
});

module.exports = router;