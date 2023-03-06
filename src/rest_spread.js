// Manipulação de coleções

// Rest
function somar() {
    let soma = 0;
    for (let i = 0; i < arguments.length; i++) {
        soma += arguments[i];
    }
    return soma;
}
console.log(somar(10, 20, 10));

function somarComRest(...numeros) {
    const soma = numeros.reduce((total, numeroAtual) => {
        return total += numeroAtual;
    }, 0);
    return soma;
}
console.log(somarComRest(10, 20, 20));

// Spread
const numeros = [1, 2, 3, 4];
console.log(...numeros);

const timesDeFutebolDeSp = ["Santos", "Palmeiras", "Bragantino", "São Paulo"];
const timesDeFutebolDoRio = ["Vasco", "Botafogo", "Flamengo", "fluminense"];

// const timesDeFutebol = timesDeFutebolDeSp.concat(timesDeFutebolDoRio);
// console.log(timesDeFutebol);

const timesDeFutebol = [...timesDeFutebolDeSp, ...timesDeFutebolDoRio];
console.log(timesDeFutebol);

const carroDaJulia = {
    modelo: "Gol",
    marca: "VW",
    motor: 1.6
}
const carroDaAna = {
    ...carroDaJulia,
    motor: 1.8
}

console.log(carroDaJulia);
console.log(carroDaAna);


// Desestruturação

// const motorDoCarroDaAna = carroDaAna.motor;
const { motor: motorDoCarroDaAna} = carroDaAna;
const { motor: motorDoCarroDaJulia } = carroDaJulia;
console.log(motorDoCarroDaAna);
console.log(motorDoCarroDaJulia);

const [item1, item2, item3, ...outrosTimes] = timesDeFutebol;
console.log(item1);
console.log(item2);
console.log(item3);
console.log(outrosTimes);