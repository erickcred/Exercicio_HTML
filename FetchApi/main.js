$(document).ready(function() {
    $("#cep").mask('00000-000', { placeholder: "80000-100"});

    $("#btn-buscar-cep").on("click", function() {
        const cep = $("#cep").val();
        const endpoint = `http://viacep.com.br/ws/${cep}/json`;
        const botaoSearch = $(this);

        $(botaoSearch).find("i").addClass("d-none");
        $(botaoSearch).find("span").removeClass("d-none");

        // Fetch API
        fetch(endpoint)
        .then(function(resposta) {
                return resposta.json();
        })
        .then(function(json) {
            const logradouro = json.logradouro;
            const bairro = json.bairro;
            const cidade = json.localidade;
            const estado = json.uf;
            const endereco = `${logradouro}, ${bairro} - ${cidade} - ${estado}`;

            $("#endereco").val(endereco);
        })
        .catch(function(erro) {
            alert("Não foi possível buscar o CEP no momento! Tente mais tarde.");
        })
        .finally(function() {
            setTimeout(function() {
                $(botaoSearch).find("i").removeClass("d-none");
                $(botaoSearch).find("span").addClass("d-none");
            }, 500);
        });
    });

    $("#formulario-pedido").on("submit", function(evento) {
        evento.preventDefault();
        if ($("#nome").val().length < 5) {
            throw new Error("Digite o nome");
        }
        if ($("#sobrenome").val().length == 0) {
            throw new Error("Digite o sobrenome");
        }

    })


});