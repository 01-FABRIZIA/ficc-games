const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;

// Serve arquivos estáticos (HTML, CSS, imagens)
app.use(express.static(__dirname));

// Rota da API
app.get("/api/jogo/:id", (req, res) => {
  const jogoId = req.params.id;

  fs.readFile("dados-jogo.json", "utf8", (err, data) => {
    if (err)
      return res
        .status(500)
        .json({ erro: true, mensagem: "Erro ao ler dados" });

    const jogos = JSON.parse(data);
    const jogo = jogos[jogoId];

    if (jogo) {
      res.json(jogo);
    } else {
      res.status(404).json({ erro: true, mensagem: "Jogo não encontrado" });
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
