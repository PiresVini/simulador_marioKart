import Player from "./Player.js";

const player1 = new Player();
player1.setPlayer("Mario", 4, 3, 3, 0);

const player2 = new Player();
player2.setPlayer("Luigi", 3, 4, 4, 0);

const player3 = new Player();
player3.setPlayer("Yoshi", 2, 4, 3, 0);

const player4 = new Player();
player4.setPlayer("Bowser", 5, 2, 5, 0);

const player5 = new Player();
player5.setPlayer("Peache", 3, 4, 2, 0);

const player6 = new Player();
player6.setPlayer("Donkey Kong", 2, 2, 5, 0);


// gerando aleatoriamente um valor de 1a 6
async function rollDice() {  
    return Math.floor(Math.random() * 6) +1;
}

// sorteando bloco para a rodada
async function getRandomBlock() {
    let random = Math.random();
    let result;
    switch (true) {
        case random < 0.33:
            result = "RETA";
            break;
        case random < 0.66:
            result = "CURVA";
            break;
        default:
            result = "CONFRONTO";
            break;
    }
    return result;
}

// função que escreve o nome do vencedor
async function declareWinner(char1, char2) {
    console.log(`Resultado Final:`);
    console.log(`${char1.nome} acumulou um total de ${char1.pontos} pontos.`);
    console.log(`${char2.nome} acumulou um total de ${char2.pontos} pontos.`);
    if (char1.pontos > char2.pontos) {
        console.log(`🏆 O vencedor é ${char1.nome} 🏆`);
    } else if(char2.pontos > char1.pontos) {
        console.log(`🏆 O vencedor é ${char2.nome} 🏆`);
    } else {
        console.log(`😵 A corrida terminou em empate 😵`)
    }
}

// simulando um sleep para pausa entre rodadas
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


// Chama a corrida soteando rodadas e incrementando a pontuação
async function playRaceEngine(character1, character2) {
    for (let i = 1; i <= 5; i++) {
        console.log(`🏁 Rodada ${i}`);
        console.log("🎲🎲🎲");
        
        // pause entre rodadas
        await sleep(2000);
        
        // gerando o bloco
        let block = await getRandomBlock();
        console.log(`Bloco: ${block}`);

        // Rolando os dados
        let dice1 = rollDice();
        let dice2 = rollDice();
        
        if (block === "RETA") {
            let ressult1 = character1.velocidade + dice1;
            let ressult2 = character2.velocidade + dice2;
            if (ressult1 > ressult2) {
                character1.pontos += 1;
                console.log(`${character1.nome} VENCEU a rodada`);
                console.log(`Pontuação:\n${character1.nome}: ${character1.pontos}\n${character2.nome}: ${character2.pontos}\n`);
            } else {
                character2.pontos += 1;
                console.log(`${character2.nome} VENCEU a rodada`);
                console.log(`Pontuação:\n${character1.nome}: ${character1.pontos}\n${character2.nome}: ${character2.pontos}\n`);
            }
        } else if(block === "CURVA") {
            let ressult1 = character1.manobra + dice1;
            let ressult2 = character2.manobra + dice2;
            if (ressult1 > ressult2) {
                character1.pontos += 1;
                console.log(`${character1.nome} VENCEU a rodada`);
                console.log(`Pontuação:\n${character1.nome}: ${character1.pontos}\n${character2.nome}: ${character2.pontos}\n`);
            } else {
                character2.pontos += 1;
                console.log(`${character2.nome} VENCEU a rodada`);
                console.log(`Pontuação:\n${character1.nome}: ${character1.pontos}\n${character2.nome}: ${character2.pontos}\n`);
            }
        } else if(block === "CONFRONTO") {
            let ressult1 = character1.poder + dice1;
            let ressult2 = character2.poder + dice2;
            if (ressult1 > ressult2) {
                if (character2.pontos > 0) {
                    character2.pontos -= 1;
                }
                console.log(`${character1.nome} VENCEU o confronto,${character2.nome} perdeu 1 ponto`);
                console.log(`Pontuação:\n${character1.nome}: ${character1.pontos}\n${character2.nome}: ${character2.pontos}\n`);
            } else {
                if (character1.pontos >0) {
                    character1.pontos -= 1;
                }
                console.log(`${character2.nome} VENCEU o confronto,${character1.nome} perdeu 1 ponto`);
                console.log(`Pontuação:\n${character1.nome}: ${character1.pontos}\n${character2.nome}: ${character2.pontos}\n`);
            }
        }
    }
    await declareWinner(character1,character2);
}

// Função principal auto recursiva
(async function main() {
    console.log(`🏁 Corrida entre ${player1.nome} e ${player2.nome} começando 🏁\n`)
    // console.log(player1.getPlayer() + `\n`);
    // console.log(player2.getPlayer() + "\n");
    await playRaceEngine(player1, player2);
})();
