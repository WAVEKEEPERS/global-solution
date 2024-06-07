let listaUsuario = [{
    nomeCompleto: "Pedro Antonieti",
    emailUsuario: "rm556253@fiap.com.br",
    cpfUsuario: "12345678910",
    senhaUsuario: "556253",
  }, {
    nomeCompleto: "Letícia Passos",
    emailUsuario: "rm555241@fiap.com.br",
    cpfUsuario: "12345678910",
    senhaUsuario: "555241",
  }, {
    nomeCompleto: "André Altobelli",
    emailUsuario: "rm554764@fiap.com.br",
    cpfUsuario: "12345678910",
    senhaUsuario: "554764",
  }, ];

let logins = JSON.parse(localStorage.getItem("logins"));

if (logins == null) {
localStorage.setItem("logins", JSON.stringify(listaUsuario))
}

let usuario = JSON.parse(localStorage.getItem("usuario-logado"));

if (usuario) {
window.location.href = "../../pages/quiz.html";
}

function cadastrar(nome, cpf, email, senha) {

    let msgStatus = document.querySelector(".valida");
  
    let logins = JSON.parse(localStorage.getItem("logins"));
  
    for (let x = 0; x < logins.length; x++) {
  
        if ((email.value == logins[x].emailUsuario)) {
            msgStatus.setAttribute("class", "alert icon-alert");
            msgStatus.innerText = "E-mail já cadastrado!";
            setTimeout(function() {
                msgStatus.setAttribute("class", "valida");
                msgStatus.innerText = "";
            }, 3000);
            return false;
  
        }
    }
  
    logins.unshift({
        nomeCompleto: nome.value,
        emailUsuario: email.value,
        cpfUsuario: cpf.value,
        senhaUsuario: senha.value
    }, );
  
    msgStatus.setAttribute("class", "alert icon-alert");
    msgStatus.innerText = "Cadastro realizado com sucesso!";
  
    localStorage.setItem("logins", JSON.stringify(logins));
  
    setTimeout(function() {
        msgStatus.setAttribute("class", "valida");
        msgStatus.innerText = "";
        window.location.href = "../index.html";
    }, 3000);
    return false;
}
