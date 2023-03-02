// Erança
function Pessoa(nome) {
    this.nome = nome;
    this.dizOi = function() {
        console.log(this.nome + " diz olá");
    }
}

function Funcionario(nome, cargo, salario) {
    this.cargo = cargo;
    let _salario = salario;

    this.getSalario = function() {
        return _salario;
    }
    this.setSalario = function(valor) {
        if (typeof valor !== "number") {
            throw new ReferenceError("O valor de salário tem que ser (Númerico)");
        }
        _salario = valor;
    }
    
    Pessoa.call(this, nome);
}

const funcionario1 = new Funcionario("Maria1", "Dev front-end", 5000);
console.log(funcionario1.getSalario());
try {
    funcionario1.setSalario("6500");
} catch (error) {
    console.log(
        error.name + " - " + error.message + "\n" + 
        error.stack);
}
console.log(funcionario1.getSalario());

