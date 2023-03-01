const carroJoao = {
    modelo: "Fiesta",
    fabricante: "Ford",
    anoModelo: 2020,
    anoFabricacao: 2019,
    acelerar: function() {
        console.log("vrum");
    }
}

const carroMaria = {
    modelo: "K",
    fabricante: "Ford",
    anoModelo: 2021,
    anoFabricacao: 2020,
    acelerar: function() {
        console.log("vrum");
    }
}

function Carro(modelo, fabricante, anoModelo, anoFabricacao) {
    this.modelo = modelo;
    this.fabricante = fabricante;
    this.anoModelo = anoModelo;
    this.anoFabricacao = anoFabricacao;
    this.acelerar =  function() {
        console.log("acelerar...");
    }

}
const carroErick = new Carro("Fiesta", "Ford", 2020, 2019);
const carroMaria2 = new Carro("Ka", "Ford", 2021, 2020);

console.log(carroErick);
console.log(carroMaria2);

const nome = "Fulano";
const idade = 30;
const ehMaiorDeIdade = true;
const conhecimentos = ["html", "css", "javascript"];

const pessoa = {
    nome: nome,
    idade: idade,
    ehMaiorDeIdade: ehMaiorDeIdade,
    conhecimentos: conhecimentos
}

// console.log(typeof nome);
// console.log(typeof idade);
// console.log(typeof ehMaiorDeIdade);
// console.log(typeof conhecimentos);
// console.log(carroErick instanceof Carro);
// console.log(conhecimentos instanceof Array);

// console.log(typeof new Error())

console.log(pessoa.nome);
console.log(pessoa["nome"]);

pessoa["sobrenome"] = null
if (pessoa["sobrenome"]) {
    console.log("a pessoal tem sobrenome");
}

if ("sobrenome" in pessoa) {
    console.log("o atributo (sobrenome) existe em pessoa");
}

// Comando para poder congelar um Objeto
Object.freeze(pessoa);
pessoa.nome = "Astoufo";
console.log(pessoa["nome"]);

// Comando para transformar chaves de um objeto em array
console.log(Object.keys(pessoa));
// Comando para transformar os valores de um objeto em array
console.log(Object.values(pessoa));

