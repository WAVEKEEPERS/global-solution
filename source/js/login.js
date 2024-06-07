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

function validar(inputEmail, inputSenha) {

    let msgStatus = document.querySelector(".valida");
  
    for (let x = 0; x < logins.length; x++) {
  
        if ((inputEmail.value == logins[x].emailUsuario) && (inputSenha.value == logins[x].senhaUsuario)) {
  
            msgStatus.setAttribute("class", "alert icon-alert");
            msgStatus.innerText = "Login realizado com sucesso!";
  
            localStorage.setItem("usuario-logado", JSON.stringify(logins[x]));
  
            setTimeout(function() {
                msgStatus.setAttribute("class", "valida");
                msgStatus.innerText = "";
                window.location.href = "../../pages/quiz.html";
            }, 3000);
            return false;
        }
    }
    msgStatus.setAttribute("class", "alert icon-alert");
    msgStatus.innerText = "Login ou senha invalidos!";
    setTimeout(function() {
        msgStatus.setAttribute("class", "valida");
        msgStatus.innerText = "";
    }, 3000);
    return false;
  }