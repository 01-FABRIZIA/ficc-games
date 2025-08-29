const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware para interpretar dados de formulários (POST)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Servir arquivos estáticos (CSS, JS, imagens)
app.use(express.static(path.join(__dirname, "public")));

// Rota principal (catálogo)
app.get("/", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "views", "index.html"));
});

// Rota da página sobre jogo
app.get("/sobreJogo", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "views", "sobreJogo.html"));
});

// Rota API que retorna dados em JSON (usada no fetch do sobreJogo.html)
app.get("/api/jogo/:id", (req, res) => {
  const jogos = {
    12: {
      titulo: "HON",
      imagem: "/img/HON.jpg",
      descricao: [
        "Jogo competitivo de estratégia.",
        "Popular nos anos 2000.",
        "Multiplayer online."
      ]
    },
    13: {
      titulo: "DOTA 2",
      imagem: "/img/dota.jpg",
      descricao: [
        "Um dos MOBAs mais jogados.",
        "Gratuito na Steam.",
        "Atualizações frequentes."
      ]
    },
    14: {
      titulo: "Paragon",
      imagem: "/img/PARGON.jpg",
      descricao: [
        "MOBA da Epic Games.",
        "Gráficos realistas.",
        "Servidores foram desligados."
      ]
    }
  };

  const jogo = jogos[req.params.id];
  if (jogo) {
    res.status(200).json(jogo);
  } else {
    res.status(404).json({ erro: "Jogo não encontrado" });
  }
});

// Rota para processar busca (GET exemplo)
app.get("/buscar", (req, res) => {
  const termo = req.query.q; // pega valor de ?q=...
  if (termo) {
    res.status(200).send(Você buscou por: ${termo});
  } else {
    res.status(400).send("Parâmetro de busca não informado");
  }
});

// Rota para simular login (POST exemplo)
app.post("/login", (req, res) => {
  const { usuario, senha } = req.body;
  if (usuario === "teste" && senha === "123") {
    res.status(200).send("Login bem-sucedido");
  } else {
    res.status(401).send("Usuário ou senha inválidos");
  }
});

// Middleware para rotas inexistentes (404)
app.use((req, res) => {
  res.status(404).send("Página não encontrada");
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(Servidor rodando em http://localhost:${PORT});
});