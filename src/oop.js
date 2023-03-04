// function Pokemon(nome, tipo) {
//     this.nome = nome;
//     this.tipo = tipo;
// }
// const pikachu = new Pokemon("Pikachu", "elétrico");


class Pokemon {
    constructor(nome, tipo) {
        this.nome = nome;
        this.tipo = tipo;
    }

    atacar(nomeDoAtaque) {
        console.log(`${this.nome} ${nomeDoAtaque}`);
    }
}

const pikachu = new Pokemon("Pikachu", "elétrico");
pikachu.atacar("Choque do trovão");

const charizard = new Pokemon();
charizard.nome = "Charizard";
charizard.tipo = "fogo";

console.log(pikachu);
console.log(charizard);