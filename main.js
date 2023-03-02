const Gerente = require("./Gerente");
const Diretor = require("./Diretor");


try {
    const gerente = new Gerente("Astoufo");
    console.log(gerente.imprime());
    gerente.aumento(10);
    console.log(gerente.imprime());

    console.log("\n");
    
    const diretor = new Diretor("Artunes");
    console.log(diretor.imprime());
    diretor.aumento(10);
    console.log(diretor.imprime());
} catch(erro) {
    console.log(erro.name + ": " + erro.message);
}