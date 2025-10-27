const express = import("express");
const cors = import("cors");

// cria aplicação express
const app = express();

// configurações
app.use(express.json());
app.use(cors(["*"]));
const port = 80;

// base de dados em memória (mock)
let produtos = [];
let contadorId = 1;

// rota raiz
app.get("/", (req, res) => {
  res.send("API de Cadastros");
});

// CREATE - adiciona um novo produto
app.post("/aprovacao", (req, res) => {
  const novoCadastro = {
    num: contadorId++,
    tipo: req.body.tipo,
    nome: req.body.nome,
    nomeResp: req.body.nomeResp,
    Data: new Date(),
    CPF: req.body.CPF,
    CEP: req.body.CEP,
    CNPJ: req.body.CNPJ
    //dataCadastro: new Date(),
  };

  produtos.push(novoCadastro);
  res.status(201).json(novoCadastro);
});
