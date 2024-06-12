class Pessoa {
    nome: string;
    renda?: number;

    constructor(nome: string, renda?: number) {
        this.nome = nome;
        this.renda = renda
    }

    dizOla(): string {
        return `${this.nome} disse oi`;
    }
}

class ContaBancaria {
    // private saldo: number = 0;
    protected saldo: number = 0;
    public numeroConta: number;

    constructor(numeroConta: number) {
        this.numeroConta = numeroConta;
    }

    static retornaNumeroDoBanco() {
        return 125;
    }

    private getSaldo() {
        return this.saldo;
    }
    depositar(valor: number): void {
        this.saldo += valor;
    }

    getNumeroConta() {
        return this.numeroConta;
    }
}

class ContaBancariaPessoaFisica extends ContaBancaria {
    depositar(valor: number): void {
        this.saldo += valor * 2;
    }
}

const contaDoPedro = new ContaBancariaPessoaFisica(1234);
contaDoPedro.depositar(100);
console.log(`Numero banco: ${ContaBancaria.retornaNumeroDoBanco()}`)
// console.log(contaDoPedro.getSaldo());