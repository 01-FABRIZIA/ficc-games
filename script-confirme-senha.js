function acessar(){
    event.preventDefault();
    
    if (document.getElementById("password").value === "") {
        alert("Preencha o campo nova senha.");
        return false;
    }
    else if (document.getElementById("confirmar_password").value === "") {
        alert("Preencha o campo confirmar senha.");
        return false;
    }
    else if (document.getElementById("confirmar_password").value !== document.getElementById("password").value){
        alert("As senhas não são iguais.");
        document.getElementById("password").value = "";
        document.getElementById("confirmar_password").value = "";
        return false;
    }
    else if (document.getElementById("password").value.length < 8) {
        alert("A senha deve conter no mínimo 8 caracteres.");
        return false;
    }
    else{
        alert("Senha redefinida com sucesso!");
        document.getElementById("password").value = "";
        document.getElementById("confirmar_password").value = "";
        return true;
    }
}