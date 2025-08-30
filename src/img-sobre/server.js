const repoName = "repositorio";

fetch(`/${repoName}/src/img-sobre/dadosjogos.json`)
  .then((response) => response.json())
  .then((jogos) => {
    const catalogo = document.getElementById("catalogo");

    jogos.forEach((jogo) => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <img src="${jogo.imagem}" alt="${jogo.nome}">
        <h2>${jogo.nome}</h2>
        <p>${jogo.descricao}</p>
        <a href="#" id="btn-${jogo.id}">
          <button>Acessar</button>
        </a>
      `;

      catalogo.appendChild(card);
    });
  })
  .catch((error) => console.error("Erro ao carregar JSON:", error));
