// function Pokemon(nome, tipo) {
//     this.nome = nome;
//     this.tipo = tipo;
// }
// const pikachu = new Pokemon("Pikachu", "elétrico");


class Pokemon {
    #hp = 100;

    constructor(nome, tipo) {
        this.nome = nome;
        this.tipo = tipo;
    }

    atacar(nomeDoAtaque) {
        console.log(`${this.nome} ${nomeDoAtaque}`);
    }

    getHp() {
        return this.#hp;
    }

    recebeuAtaque() {
        this.#hp -= 10;
    }
}

class Pikachu extends Pokemon {
    constructor() {
        super("Pikachu", "elétrico");
    }

    atacar() {
        console.log(`${this.nome} atacou com Choque do Trovão`);
    }
}

class Charizard extends Pokemon {

}

const pikachu = new Pokemon("Picachu", "elétrico");
const pikachuDoAsh = new Pikachu();
pikachuDoAsh.recebeuAtaque();
console.log(`HP: ${pikachuDoAsh.getHp()}`);
pikachuDoAsh.atacar();

pikachu.atacar("Choque do trovão");

const charizard = new Charizard();
charizard.nome = "Charizard";
charizard.tipo = "fogo";

console.log(pikachu);
console.log(charizard);
console.log(pikachu instanceof Pokemon);
console.log(pikachuDoAsh instanceof Pikachu);
