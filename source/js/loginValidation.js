let usuario = JSON.parse(localStorage.getItem("usuario-logado"));

if(usuario) {

const userName = document.querySelector(".username");
const userEmail = document.querySelector(".email");

userName.innerText = usuario.nomeCompleto;
userEmail.innerText = usuario.emailUsuario;

const logoutUser = document.querySelector(".icon-logout");
logoutUser.addEventListener("click",()=>{
    localStorage.removeItem("usuario-logado");
    window.location.href = "../../index.html";
});
}else{
    window.location.href = "../../index.html";
}