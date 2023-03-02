function Funcionario(nome, cargo, salario) {
    let _nome = nome;
    let _cargo = cargo;
    let _salario = salario;

    this.getNome = () => {
        return _nome;
    }
    this.setNome = (valor) => {
        _nome = valor;
    }

    this.getCargo = () => {
        return _cargo;
    }
    this.setCargo = (valor) => {
        _cargo = valor;
    }

    this.getSalario = () => {
        return _salario;
    }
    this.setSalario = (valor) => {
        this.validaValoresSalario(valor, "O Valor de Salario tem que ser (Númerico)!");
        _salario = valor;
    }

    this.aumento = (valor) => {
        this.validaValoresSalario(valor, "O Valor para aumento de Salario tem que ser (Númerico)!")
        const calculo = _salario + (_salario * (valor / 100));
        this.setSalario(calculo);
        this.bonificacao();
    }

    this.bonificacao = () => {
        this.setSalario(_salario * 1.01);
    }

    this.validaValoresSalario = (valor, mensagem) => {
        if (typeof valor !== "number") {
            throw new ReferenceError(mensagem);
        }
    }

    this.imprime = function() {
        return  "Dados: " + this.getNome() + " - " + this.getCargo() + " - R$ " + this.getSalario().toFixed(2).replace(".", ",");
    }
}

module.exports = Funcionario;