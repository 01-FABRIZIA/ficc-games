function entrar(){
    event.preventDefault();
    if (document.getElementById("email").value == "" && document.getElementById("password").value == "") {
        alert("Preencha todos os campos !")
        return false;
    }
    else if (document.getElementById("email").value == "") {
        alert("Preencha o campo e-mail.")
        return false;
    }
    else if (document.getElementById("password").value == "") {
        alert("Preencha o campo senha.")
        return false;
    }
    else if (document.getElementById("password").value.length < 8) {
        alert("A senha deve conter no mínimo 8 caracteres.")
        return false;
    }
    else{
        alert("Login realizado com sucesso!")

        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
        return true;
        
    }
}

