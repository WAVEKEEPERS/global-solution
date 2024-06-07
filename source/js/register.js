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
