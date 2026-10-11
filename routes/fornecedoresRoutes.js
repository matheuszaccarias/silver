const express = require("express");

const router = express.Router();

// ========================================
// DADOS
// ========================================

let fornecedores = [
    {
        id: 1,
        rasaoSocial: "Nike",
        cnpj: "Produtos e serviços de informática",
        email: "Produtos e serviços de informática",
        telephone: "Produtos e serviços de informática",
        cidade: "Produtos e serviços de informática"
    },
    {
        id: 2,
        rasaoSocial: "Eletrônicos",
        cnpj: "Produtos eletrônicos",
        email: "Produtos eletrônicos",
        telephone: "Produtos eletrônicos",
        cidade: "Produtos eletrônicos"
    },
    {
        id: 3,
        rasaoSocial: "Roupas",
        cnpj: "Roupas e acessórios",
        email: "Roupas e acessórios",
        telephone: "Roupas e acessórios",
        cidade: "Roupas e acessórios"
    }
];

router.get("/", (req, res) => {
    res.render("fornecedores/index", {

        fornecedores: fornecedores

    });
});

router.get("/cadastro", (req, res) =>{

    res.render("fornecedores/form-fornecedores");

});

router.post("/", (req, res) => {

    const { rasaoSocial, cnpj, email, telephone, cidade } = req.body;

    const novoFornecedor = {
        id: fornecedores.length + 1,
        rasaoSocial: rasaoSocial,
        cnpj: cnpj,
        email: email,
        telephone: telephone,
        cidade: cidade,
    };

    fornecedores.push(novoFornecedor);

    res.redirect("/fornecedores");
});


router.get("/excluir/:id", (req, res) => {
  let id = parseInt(req.params.id);
  fornecedores = fornecedores.filter(c => c.id !== id);
  res.redirect("/fornecedores");
});

//editar - form - get
router.get("/editar/:id", (req, res) => {
  let id = parseInt(req.params.id);
  let fornecedor = fornecedores.find(c => c.id === id);
  if (!fornecedor) {
    return res.redirect("/fornecedores");
  }

  res.render("fornecedores/editar", {fornecedor});
});

module.exports = router;