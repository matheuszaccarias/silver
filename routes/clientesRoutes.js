const express = require("express");
const router = express.Router();

// ========================================
// DADOS
// ========================================

let clientes = [
  {
    id: 1,
    nome: "Matheus",
    telefone: "(11) 1234-5678",
    email: "sonic123@gmail.com",
    cidade: "itu"
  },
  {
    id: 2,
    nome: "Miguel",
    telefone: "(11) 1234-5678",
    email: "bluelock@gmail.com",
    cidade: "itu"
  },
  {
    id: 3,
    nome: "Nicolas",
    telefone: "(11) 1234-5678",
    email: "seilámen123@gmail.com",
    cidade: "itu"
  } // Corrigido aqui
]; // Corrigido aqui

router.get("/", (req, res) => {
   res.render("clientes/index", {
     clientes: clientes
   });
});

router.get("/cadastro", (req, res) => {
  res.render("clientes/form-clientes");
});

router.post("/", (req, res) => {
    const { nome, telefone, email, cidade } = req.body;
    const novoCliente = {
        id: clientes.length + 1,
        nome: nome,
        telefone: telefone,
        email: email,
        cidade: cidade
    };

    clientes.push(novoCliente);
    res.redirect("/clientes");
});

router.get("/excluir/:id", (req, res) => {
  let id = parseInt(req.params.id);
  clientes = clientes.filter(c => c.id !== id);
  res.redirect("/clientes");
});

//editar - form - get
router.get("/editar/:id", (req, res) => {
  let id = parseInt(req.params.id);
  let cliente = clientes.find(c => c.id === id);
  if (!cliente) {
    return res.redirect("/clientes");
  }

  res.render("clientes/editar", {cliente});
});

module.exports = router;
