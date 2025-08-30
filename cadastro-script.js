const form = document.getElementById('form');
const nome = document.getElementById('nome');
const data_nasc = document.getElementById('data_nasc');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener("submit", (event) => {
    event.preventDefault();
    checkForm();
})

nome.addEventListener("blur", () =>{
    checkInputnome();
})

data_nasc.addEventListener("blur", () =>{
    checkInputdata_nasc();
})

email.addEventListener("blur", () =>{
    checkInputemail();
})

password.addEventListener("blur", () =>{
    checkInputpassword();
})

function checkInputnome() {
    const nomeValue = nome.value;

    if (nomeValue === ""){
        errorInput(nome, "O nome é obrigatório");
    }
    else{
        const formItem = nome.parentElement;
        formItem.className = "form-content"
    }
}

function checkInputdata_nasc() {
    const data_nascValue = data_nasc.value;

    if (data_nascValue === ""){
        errorInput(data_nasc, "A data de nascimento é obrigatória");
    }
    else{
        const formItem = data_nasc.parentElement;
        formItem.className = "form-content"
    }
}

function checkInputemail() {
    const emailValue = email.value;

    if (emailValue === ""){
        errorInput(email, "O e-mail é obrigatório");
    }
    else{
        const formItem = email.parentElement;
        formItem.className = "form-content"
    }
}

function checkInputpassword() {
    const passwordValue = password.value;

    if (passwordValue === ""){
        errorInput(password, "A senha é obrigatória");
    }else if (passwordValue.length < 8){
        errorInput(password, "A senha precisa ter no mínimo 8 caracteres");
    }
    else{
        const formItem = password.parentElement;
        formItem.classList = "form-content"
    }
}

function checkForm(){
    checkInputemail();
    checkInputnome();
    checkInputdata_nasc();
    checkInputpassword();

    const formItem = form.querySelectorAll('.form-content');

    const isValid = [...formItem].every((item) => {
        return item.className === "form-content"
    });
    console.log(isValid);

    if (isValid) {
        alert("Formulário cadastrado com sucesso!")
        form.reset();
    }
}

function errorInput(input, message) {
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector('a');
    textMessage.textContent = message;
    formItem.className = "form-content error";
}
