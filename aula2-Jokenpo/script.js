var pontosUser=0;
var pontoScript=0;
var vitoriasConsecutivas = 0;

function capturajogadaUserConvertida(){
  let jogadaUser = prompt('Qual jogada deseja realizar? 1 = pedra, 2 = papel, 3 = tesoura')
  let jogadaUserConvertida = Number(jogadaUser)
  return jogadaUserConvertida; 
}


/*Gera um número aleatório*/
function capturajogadaScript(){
  let jogadaScript = Math.floor(Math.random() * 3) + 1
 return jogadaScript;
}

function jogar() {
  let jogadaUserConvertida = capturajogadaUserConvertida();
  let jogadaScript = capturajogadaScript();

console.log('Jogada usuario: ' + jogadaUserConvertida)
console.log('Jogada computador:' + jogadaScript)


switch(jogadaUserConvertida) {
  case jogadaScript:
      alert("Empate!");
      break;

  case 1: // Pedra
  if(jogadaScript == 2) {
      alert("Você perdeu!");
      pontoScript++;
      vitoriasConsecutivas = 0; 
  } else {
      alert("Você ganhou!");
      pontosUser++;
      vitoriasConsecutivas++; 
  }  break;

  case 2: // Papel
  if(jogadaScript == 3) {
      alert("Você perdeu!");
      pontoScript++;
      vitoriasConsecutivas = 0; 
  } else {
      alert("Você ganhou!");
      pontosUser++;
      vitoriasConsecutivas++; 
  }  break;
  case 3: // Tesoura
  if(jogadaScript == 1) {
      alert("Você perdeu!");
      pontoScript++;
      vitoriasConsecutivas = 0; 
  } else {    
      alert("Você ganhou!");
      pontosUser++;
      vitoriasConsecutivas++; 
  }

}
console.log("Pontos do usuário: " + pontosUser);
console.log("Pontos do computador: " + pontoScript);

ganhador();
}

    function ganhador() {
        if(pontosUser == 2) {
            alert("Você ganhou!");
            resetarPontuacao();
    vitoriasConsecutivas = 0; // Resetar as vitórias consecutivas
        } else if(pontoScript == 2) {
            alert("Você perdeu!");
            resetarPontuacao();
    vitoriasConsecutivas = 0; // Resetar as vitórias consecutivas
        }
        else if (vitoriasConsecutivas == 2) {
          alert("O computador está mais difícil agora!");
          aumentarDificuldadeComputador();
          vitoriasConsecutivas = 0; // Resetar as vitórias consecutivas
        }
    }

    function aumentarDificuldadeComputador() {
      if (ultimaJogadaJogador == 1) {
        /*Se o jogador escolheu Pedra (1) na última jogada, o computador tem mais chances de escolher
        Papel (2) desta vez, pois Papel vence Pedra.*/
        jogadaScript = Math.random() < 0.7 ? 2 : Math.floor(Math.random() * 3) + 1;
      } else if (ultimaJogadaJogador == 2) {
        /*Se o jogador escolheu Papel (2) na última jogada, o computador tem mais chances de escolher
        Tesoura (3) desta vez, pois Tesoura vence Papel.*/
        jogadaScript = Math.random() < 0.7 ? 3 : Math.floor(Math.random() * 3) + 1;
      } else {
        /* Se o jogador escolheu Tesoura (3) na última jogada, o computador tem mais chances de escolher
        Pedra (1) desta vez, pois Pedra vence Tesoura.*/
        jogadaScript = Math.random() < 0.7 ? 1 : Math.floor(Math.random() * 3) + 1;
      }
    
      return jogadaScript;
    }

function resetarvitoriasConsecutivas(){
    vitoriasConsecutivas = 0;
    alert("Jogo resetado!");
}
