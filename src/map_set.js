// Map
let meuMap = new Map();
meuMap.set("nome", "Erick");
meuMap.set("stack", "html, css, js");
console.log(meuMap);

// Retorna o valor da chave 
const nome = meuMap.get("nome");
console.log(nome);

// Retorno a tamanho do map
const tamanhoDoMap = meuMap.size;
console.log(tamanhoDoMap);

// Retorna true/false para a chave 
const nomeExiste = meuMap.has("nome");
console.log(nomeExiste);

// Função para limpar o map (remove todos os dados);
// meuMap.clear();
// console.log(meuMap);


// Processo para poder pegar os dados de chave ou valor
for (let item of meuMap.keys()) {
    console.log(item);
}
for (let item of meuMap.values()) {
    console.log(item);
}
for (let item of meuMap.entries()) {
    console.log(item);
}
for (let [chave, valor] of meuMap.entries()) {
    console.log(`${chave} => ${valor}`);
}

// Removendo item de dentro do Map
meuMap.delete("nome");
console.log(meuMap);


/** Set */
const cpfs = new Set();
cpfs.add("49675782099");
cpfs.add("54955240046");
cpfs.add("71923822055");
console.log(cpfs);
console.log(cpfs.keys());
console.log(cpfs.values());

cpfs.forEach(function(item) {
    console.log(item);
});

// Removendo duplicidade com Set, (ele não aceira itens duplicados)
const array = ["erick", "maria", "astrofou", "maria", "astrofou"];
const arrayComoSet = new Set([...array]);

// Transformando um Set em um Array, como distinguir um Set de un Array
// Set utilizar {}, Arrya []
const converteSetEmArray = [...arrayComoSet];
console.log(arrayComoSet);
console.log(converteSetEmArray);

