/*RODADAS E PONTUAÇÃO
Implementar um sistema de rodadas, onde a cada vez que o resultado for exibido o usuário 
poderá jogar novamente até que ele ganhe 2 rodadas no total ou o oponente ganhe 2 rodadas
 no total. Quando o primeiro jogador chegar ao número de 2 rodadas o jogo finaliza e é 
 apresentado quem é o vencedor geral da Partida!*/

/*NORMALIZAÇÃO DE INFORMAÇÕES ERRADAS
Após essa implementação, o ideal seria resolver o nossos primeiros Bugs, que seriam normalizar oque o usuário digitar como jogada, atualmente temos um cenário onde eu posso escrever qualquer coisa no campo digitavel que é gerado com a nossa função prompt(). Posso escrever uma frase, fornecer um número que não exista na nossa validação que consiste em "1, 2 ou 3" e etc. Tendo isso em mente, toda vez que o usuário digitar algo que não seja uma opção válida, você terá que perguntar novamente qual é a jogada dele (pedra, papel ou tesoura) até que ele informe um valor válido.
Nessa parte não existe um caminho a ser seguido a risca, voce pode apresentar um alert() dizendo que ele escolheu uma opção inválida e exibir um prompt() que pergunta qual é a jogada dele logo após ele fechar esse alert(), ou você pode simplemente ficar repetindo o prompt() até o usuário fornecer uma opção válida.
*/
/*NÍVEL DE DIFICULDADE
Esse aqui é um desafio bonus bem legal, a ideia é que voce crie níveis de dificuldades para o game, como "fácil, médio e difícil" ou somente "normal e difícil" se preferirem. E é exatamente ai que mora o desafio, vocês precisam deixar o jogo mais difícil dependendo do nível! Como isso vai ser realizado? Ai eu ja não sei, vai de cada pessoal desenvolvedora chegar nessa resposta por sí só :aPES_LulExplode:, é exatamente por isso que esse está como o último desafio
*/


const PEDRA = 0;
const PAPEL = 1;
const TESOURA = 2;

let jogadorRodadas = 0;
let computadorRodadas = 0;

function obterJogada() {
    const jogadaRadios = document.getElementsByName("grupo");
    for (let i = 0; i < jogadaRadios.length; i++) {
        if (jogadaRadios[i].checked) {
            return i;
        }
    }
    return -1; // Nenhuma jogada selecionada
}

function verificarVencedor(jogador, computador) {
    if (jogador === computador) {
        return "Empate";
    } else if (
        (jogador === PEDRA && computador === TESOURA) ||
        (jogador === PAPEL && computador === PEDRA) ||
        (jogador === TESOURA && computador === PAPEL)
    ) {
        jogadorRodadas++;
        return "Jogador Venceu";
    } else {
        computadorRodadas++;
        return "Computador Venceu";
    }
}
function exibirVencedor(vencedor) {
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `<strong>${vencedor} Venceu a Partida!</strong>`;

    const jogarBtn = document.getElementById("jogarBtn");
    const resetBtn = document.getElementById("resetBtn");
    jogarBtn.disabled = true;
    resetBtn.disabled = true;
}

function jogar() {
    const jogada = obterJogada();

    if (jogada === -1) {
        alert("Selecione uma opção");
        return;
    }

    const sorteio = Math.floor(Math.random() * 3);
    const jogadaComputador = sorteio;

    const jogadaLabels = ["Pedra", "Papel", "Tesoura"];
    document.getElementById("pc").src = jogadaLabels[jogadaComputador].toLowerCase() + ".png";

    const resultado = verificarVencedor(jogada, jogadaComputador);
    document.getElementById("placar").innerHTML = resultado;

	if (jogadorRodadas === 2 || computadorRodadas === 2) {
        const vencedor = jogadorRodadas === 2 ? "Jogador" : "Computador";
        exibirVencedor(vencedor);
    }
}

function resetar() {
    document.getElementById("computador").src = "pc.png";
    document.getElementById("placar").innerHTML = "";
	document.getElementById("resultado").innerHTML = "";
    jogadorRodadas = 0;
    computadorRodadas = 0;

	const jogarBtn = document.getElementById("jogarBtn");
    const resetBtn = document.getElementById("resetBtn");
	jogar
}
