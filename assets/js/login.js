const email = "admin@email.com";
const senha = "1234";

function verificarCredenciais() {
    const emailinformado = document.getElementById("email").value;
    const senhainformada = document.getElementById("senha").value;

    if (emailinformado == email) {
        alert("Email informado corretamente!");
        if (senhainformada == senha) {
            alert("Senha informada corretamente!");
            window.location = "home.html";
        } else
            alert("Senha informada incorretamente!");
    } else{
        alert("Email informado incorretamente!");
    }
}