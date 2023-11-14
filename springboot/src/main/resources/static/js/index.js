const currentPlayer = document.querySelector(".currentPlayer");

let selected;
let player = "X";
let pontuacaoX = 0;
let pontuacaoO = 0;

//variavel para armazenar todas as possibilidade de vitoria.
let positions = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];


function init() {
  //serve para armazenar os itens selecionados
  selected = [];
  let pontuacaoX = 0;
  let pontuacaoO = 0;

  //serve para armazenar e mostrar no html qual é o jogador da vez 
  currentPlayer.innerHTML = `JOGADOR DA VEZ: ${player}`;

  //serve para iniciar os botoes vazios e adicionando um event para a função newMove
  document.querySelectorAll(".game button").forEach((item) => {
    item.innerHTML = "";
    item.addEventListener("click", newMove);
  });
}

//executa de inicialmente a função resetando os botões 
init();

//funçao para add um movimento no jogo
function newMove(e) {
  //variavel pega o atributo do botão do html
  const index = e.target.getAttribute("data-i");
  //adicionando o player que fez a ação no botão
  e.target.innerHTML = player;
  //remove a ação do botão para ele não ser mais selecionado 
  e.target.removeEventListener("click", newMove);
  selected[index] = player;

  setTimeout(() => {
    check();
  }, [100]);

  //efetua a troca do player
  player = player === "X" ? "O" : "X";
  //troca jogador da vez no html
  currentPlayer.innerHTML = `JOGADOR DA VEZ: ${player}`;
}


function check() {
  let playerLastMove = player === "X" ? "O" : "X";

  //serve para mapear os itens selecionados 
  const items = selected
    .map((item, i) => [item, i])
    .filter((item) => item[0] === playerLastMove)
    .map((item) => item[1]);

    //percorre o for para verificar na "positions" e no array do game se bate alguma sequencia de vencedor
  for (pos of positions) {
    //se ja tiver um ganhador eles diz qual é 
    if (pos.every((item) => items.includes(item))) {
      alert("O JOGADOR '" + playerLastMove + "' GANHOU!");
      incrementarPontuacao(playerLastMove);
      attPlacar()
      init();
      return;
    }
  }
  //caso de empate ele cai nesse if
  if (selected.filter((item) => item).length === 9) {
    alert("DEU EMPATE!");
    init();
    return;
  }
}
//e se não tiver nenhuma das opções o jogo continua até cair em algum dos IFs, que irá reniciar o jogo.

//incrementa o ponto ao time
function incrementarPontuacao(time) {
    if (time === 'X') {
        pontuacaoX++;
    } else if (time === 'O') {
        pontuacaoO++;
    }
}

//Atualiza o ponto no HTML
function attPlacar() {
    const timeX = document.getElementById('X');
    const timeO = document.getElementById('O');

    timeX.textContent = `Time X : ${pontuacaoX}`;
    timeO.textContent = `Time O : ${pontuacaoO}`;
}