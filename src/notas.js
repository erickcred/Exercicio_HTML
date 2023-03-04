let alunos = [
    {
        "nome": "Artur", 
        "nota": 4.4
    },
    {
        "nome": "Fausto", 
        "nota": 6
    },
    {
        "nome": "Mitoin", 
        "nota": 6.1
    },
    {
        "nome": "Miro", 
        "nota": 2
    },
    {
        "nome": "Kirito", 
        "nota": 10
    },
    {
        "nome": "Lufi", 
        "nota": 6
    },
    {
        "nome": "Asuna", 
        "nota": 9
    },
    {
        "nome": "Yui", 
        "nota": 7
    },
    {
        "nome": "Mestre dos Magos",
        "nota": 10
    },
    {
        "nome": "Leffa", 
        "nota": 8
    },
    {
        "nome": "Asuna", 
        "nota": 5.4
    },
    {
        "nome": "Hero Tempest",
        "nota": 7.4
    },
    {
        "nome": "Frodo", 
        "nota": 2.4
    },
    {
        "nome": "Diamate", 
        "nota": 7.4
    },
    {
        "nome": "Fin", 
        "nota": 3
    },
    {
        "nome": "Hana", 
        "nota": 4
    },
    {
        "nome": "Tenshi", 
        "nota": 7
    },
    {
        "nome": "Pedro", 
        "nota": 7.5
    },
    {
        "nome": "Ronaldo", 
        "nota": 6
    },
];

function retornaAprovados(aluno) {
    if (aluno.nota >= 5) {
        return aluno;
    }

}

const aprovados = alunos.filter(retornaAprovados);

console.log(aprovados);