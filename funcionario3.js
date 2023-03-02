// Polimorfismo
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

    this.aumento = function() {
        const novoSalario = _salario * 1.1;
        _salario = novoSalario;
    }
    
    Pessoa.call(this, nome);
}

function Estagiario(nome) {
    Funcionario.call(this, nome, "Estagiario", 2000);
    
    this.aumento = function() {
        const novoSalario = this.getSalario() * 1.07;
        this.setSalario(novoSalario);
    }
}

function Gerente(nome) {
    Funcionario.call(this, nome, "Gerente", 10000);
    
    this.aumento = function() {
        const novoSalario = this.getSalario() * 1.15;
        this.setSalario(novoSalario);
    }
}



const funcionario = new Funcionario("Maria1", "Dev front-end", 5000);
const funcionario1 = new Estagiario("Jose");
const funcionario2 = new Gerente("Paula");
console.log(funcionario.getSalario());
console.log(funcionario1.getSalario());
console.log(funcionario2.getSalario());
try {
    funcionario.aumento();
    funcionario1.aumento();
    funcionario2.aumento();
} catch (error) {
    console.log(
        error.name + " - " + error.message + "\n" + 
        error.stack);
}
console.log(funcionario.getSalario());
console.log(funcionario1.getSalario());
console.log(funcionario2.getSalario());

