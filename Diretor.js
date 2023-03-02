const Funcionario = require("./Funcionario");

function Diretor(nome) {
    Funcionario.call(this, nome, "Diretor", 25000);

    let temMaisDeQuatroAnosDeCasa = false;
    this.bonificacao = () => {
        let bonus = 0;
        if (temMaisDeQuatroAnosDeCasa) {
            bonus = 100;
        }
        let calculo =  this.getSalario() + bonus;
        this.setSalario(calculo);
    }
}

module.exports = Diretor;
