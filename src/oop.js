"use strict";
class Pessoa {
    constructor(nome, renda) {
        this.nome = nome;
        this.renda = renda;
    }
    dizOla() {
        return `${this.nome} disse oi`;
    }
}
class ContaBancaria {
    constructor(numeroConta) {
        // private saldo: number = 0;
        this.saldo = 0;
        this.numeroConta = numeroConta;
    }
    static retornaNumeroDoBanco() {
        return 125;
    }
    getSaldo() {
        return this.saldo;
    }
    depositar(valor) {
        this.saldo += valor;
    }
    getNumeroConta() {
        return this.numeroConta;
    }
}
class ContaBancariaPessoaFisica extends ContaBancaria {
    depositar(valor) {
        this.saldo += valor * 2;
    }
}
const contaDoPedro = new ContaBancariaPessoaFisica(1234);
contaDoPedro.depositar(100);
console.log(`Numero banco: ${ContaBancaria.retornaNumeroDoBanco()}`);
// console.log(contaDoPedro.getSaldo());
