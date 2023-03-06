<script setup>
import { normalizeStyle, reactive } from 'vue';

const nome = "Erick Rick";
// document.querySelector("h1").innerHTML = nome;

const meuObjeto = {
  nome: "Erick",
  filmeFavorito: "Avatar"
}

function dizOi() {
  return `${nome} dis oi`;
}
const enderecoDaImagemDoBatman = "https://conteudo.imguol.com.br/c/entretenimento/ab/2019/12/09/batman-1575900915630_v2_3x4.jpg";
const enderecoDaImagemDoSuperMam = "https://cdn.jornaldebrasilia.com.br/wp-content/uploads/2021/05/06105927/Superman.jpg"

const botaoEataDesabilitado = false;

const gostaDoBatman = true;
const gostaDoSuperMan = false;

const estaAutorizado = false;

// let contador = 0;
const estado = reactive({
  contador: 0,
  email: "",
  saldo: 5000,
  transferindo: 0,
  nomes: ["erick", "paulo", "pedro", "ana"],
  nomeAInserir: "",
});

function incrementar() {
  return estado.contador++;
}
function decrementar() {
  if (estado.contador > 0){
    return estado.contador--;
  }
}

function alteraEmail(evento) {
  estado.email = evento.target.value
}

function mostraSaldoFuturo() {
  const { saldo, transferindo } = estado;
  return saldo - transferindo;
}

function temSaldo() {
  const { saldo, transferindo } = estado;
  return transferindo > saldo;
}

function cadastraNome() {
  const { nomes, nomeAInserir } = estado;
  if (nomeAInserir.length >= 3) {
    nomes.push(nomeAInserir);
  } else {
    alert("digite mais caracteres");
  }

}

// --------------



</script>


<template>
  <h1>{{ nome }}</h1>
  <h2>{{  meuObjeto.filmeFavorito }}</h2>
  <h2>{{  dizOi() }}</h2>
  <img v-if="gostaDoBatman" v-bind:src="enderecoDaImagemDoBatman" alt="">
  <img v-else-if="gostaDoSuperMan" :src="enderecoDaImagemDoSuperMam" alt="">
  <h2 v-else>Não curte heróis da DC</h2>

  <!-- <img v-show="gostaDoBatman" :src="enderecoDaImagemDoBatman" alt=""> -->

  <h1 v-if="estaAutorizado">Bem vindo</h1>
  <h1 v-else>Não possui acesso</h1>
  

  <button :disabled="botaoEataDesabilitado">Enviar mensagem</button>

  <br>
  <hr>
  <button @click="decrementar" type="button">-</button>
  <button @click="incrementar" type="button">+</button>
  {{ estado.contador }}

  <br>
  <hr>
  <input type="email" @keyup="alteraEmail">
  {{ estado.email }}
  

  <br>
  <hr>
  Saldo: {{ estado.saldo }} <br>
  Transferindo: {{ estado.transferindo }} <br>
  Saldo depois da transferencia: {{ mostraSaldoFuturo() }}<br>
  <input class="campo" :class="{ invalido: temSaldo()}" @keyup="evento => estado.transferindo = evento.target.value" type="number" placeholder="Quantia para transferir">

  <button v-if="!temSaldo()">Transferir</button>
  <span :class="{ invalido: temSaldo()}" v-else>Valor maior que o saldo disponível</span>


  <br><br>
  <hr>
  <input @keyup="evento => estado.nomeAInserir = evento.target.value" type="text" placeholder="Digite um novo nome">
  <button type="buttom" @click="cadastraNome()">Cadastrar nome</button>
  
  <ul>
    <li v-for="item in estado.nomes" :key="item">{{ item }}</li>
  </ul>
</template>


<style scoped>

img {
  max-width: 200px;
}

.campo {
  border: 2px solid black;
  padding: 0 8px;
}

.invalido {
  background-color: rgba(194, 66, 66, 0.349);
  color: red;
  outline-color: red;
}
</style>
