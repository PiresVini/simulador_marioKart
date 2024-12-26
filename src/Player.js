class Player {
    constructor(nome, velocidade, manobra, poder, pontos) {
        this.nome = nome;
        this.velocidade = velocidade;
        this.manobra = manobra;
        this.poder = poder;
        this.pontos = pontos;
    }

    setPlayer(nome, velocidade, manobra, poder, pontos) {
        this.nome = nome;
        this.velocidade = velocidade;
        this.manobra = manobra;
        this.poder = poder;
        this.pontos = pontos;
    }
    getPlayer() {
        return `Nome: ${this.nome}\nVelocidade: ${this.velocidade}\nManobrabilidade: ${this.manobra}\nPoder: ${this.poder}\nPontos: ${this.pontos}`;
    }

}
export default Player;