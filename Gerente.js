const Funcionario = require("./Funcionario");

function Gerente(nome) {
    Funcionario.call(this, nome, "Gerente", 5000);
    
    this.bonificacao = () => {
        let calculo =  this.getSalario() + 100;
        this.setSalario(calculo);
    }
}

module.exports = Gerente;