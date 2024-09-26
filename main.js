$(document).ready(function() {
    let usuario;

    fetch()
        .then(function(res) {
            return res.json();
        })
        .then(function(data) {
            $(".profile-name").html(data.name);
            $(".profile-avatar").attr("src", data.avatar_url);
            $(".profile-username").html(`@${data.login}`);
            $("#followers").html(data.followers);
            $("#following").html(data.following);
            $("#public_repos").html(data.public_repos);
            $(".profile-link").attr("href", data.html_url);
        })
        .catch(function(erro) {
            alert("Ops! Algo deu errado! Tente novamente mais tarde");
            $(".profile-name").html("Nome");
            $(".profile-avatar").attr("src", "https://via.placeholder.com/180x180");
            $(".profile-username").html(`@usuário`);
            $("#followers").html(10);
            $("#following").html(10);
            $("#public_repos").html(100);
            $(".profile-link").attr("href", "#");
        });


});