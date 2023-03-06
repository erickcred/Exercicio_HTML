const redesSociais = ["Facebook", "Intagram", "Twitter"];

for (let i = 0; i < redesSociais.length; i++) {
    console.log(`Eu tenho perfil na rede social: ${redesSociais[i]}`);
}

redesSociais.forEach(function(item, index) {
    console.log(`#${index} Eu tenho perfil no ${item}`);
});


// Map -> conseguimos retorno o item, podendo manipular e o retorno é um novo array
const alunos = ["Gustavo", "Julia", "Paula", "Wagner"]
const alunos2 = alunos.map(function(itemAtual) {
    itemAtual = {
        nome: itemAtual,
        curso: "Frontend"
    }
    return itemAtual;
});
console.log(alunos2);

const numeros = [1, 2, 3, 4, 5];
const dobroDosNumeros = numeros.map(function(numeroAtual) {
    numeroAtual = numeroAtual * 2;
    return numeroAtual;
});

console.log(dobroDosNumeros);

// find -> conseguimos encontrar um item dentro de um array
const paula = alunos2.find(function(item) {
    return item.nome == "Paula";
});
const gustavo = alunos2.find(x => x.nome == "Gustavo");

console.log(paula);
console.log(gustavo);

// findIndex - conseguimos encontraro o idice de algum item dentro do array
const paulaIndex = alunos2.findIndex(function(item) {
    return item.nome == "Paulas";
});
const gustavoIndex = alunos2.findIndex(x => x.nome == "Gustavo");
console.log(gustavoIndex);
console.log(paulaIndex);



// every -> retorna se todos os itens dentro do array satisfazem a condição
alunos2.push({
    nome: "Lucio",
    curso: "Backend"
});
const todosAlunosSaoDeFrontend = alunos2.every(function(item) {
    return item.curso === "Frontend";
});
console.log(todosAlunosSaoDeFrontend);

// some -> retora se pelo menos um dos items atendo ao predicado(condição)
const temAlunoDeBackend = alunos2.some(function(item) {
    return item.curso === "Backend";
});
console.log(temAlunoDeBackend);

// filter -> retorna o item de um array 
const alunosDeBackend = alunos2.filter(function(item) {
    return item.curso === "Backend";
});
console.log(alunosDeBackend);

// reduce -> para fazer calculos
const nums = [10, 20, 30, 10];
const soma = nums.reduce(function(acumulador, itemAtual) {
    return acumulador += itemAtual;
}, 0);
console.log(soma);

let somaComFor = 0;
for (let i = 0; i < nums.length; i++) {
    somaComFor += nums[i];
}
console.log(somaComFor);

const nomesDosAlunos = alunos2.reduce(function(acumulador, itemAtual) {
    return acumulador += itemAtual.nome + ", ";
}, "");
console.log(nomesDosAlunos);