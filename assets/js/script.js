$(document).ready(function() {
    // Validaçòes
    $("#form-precadastro").validate({
        rules: {
            nome: {
                required: true,
                minlength: 10,
                maxlength: 100
            },
            email: { required: true, email: true },
            telefone: { required: true }
        },
        messages: {
            nome: {
                required: "Nome é obrigatório!",
                minlength: "Por favor, iforme o seu nome completo!",
                maxlength: "No maximo <strong>100 caracteres</strong>"
            },
            email: {
                required: "E-mail é obrigatório!",
                email: "Esse não parece ser um e-mail valido!"
            },
            telefone: {
                required: "Telefone é obrigatório!"
            },
        },
        submitHandler: (form) => { 
            console.log("enviado com sucesso");
        },
        invalidHandler: (event, validator) => {
            let errors = validator.numberOfInvalids();

            $("label.error").addClass("alert alert-danger");
            $(validator.currentElements).addClass("alert alert-danger");
            console.log(validator)
        }
    })

    // Mascaras
    $("input#telefone").mask("(00) 0 0000-0000", {
        placeholder: "(41) 9  9999-0098"
    });
});