class Conta {
    numeroDaConta: number;
    saldo: number = 0;

    constructor(numeroDaConta: number){
        this.numeroDaConta = numeroDaConta;
    }
}

class ContaSalario extends Conta {
    depositar(valor: number) {
        this.saldo += valor;
    }
}

interface ITransacional {
    transferir: (valor: number, destinatario: Conta) => boolean;
    taxaTransferencia: number;
}

interface IExemplo2 {
    cnpj: number;
}

interface IExemplo3 extends IExemplo2 {
    telefone: number;
}

class ContaCorrente extends Conta implements ITransacional/**, IExemplo3*/ {
    transferir(valor: number, destinatario: Conta) {
        if (this.saldo >= valor) {
            destinatario.saldo -= valor;
            return true;
        } else {
            return false;
        }
    }
    taxaTransferencia: number = 0;
}
