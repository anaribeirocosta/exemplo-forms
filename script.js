let nome = document.querySelector('.nome')
let sobrenome = document.querySelector('.sobrenome')
let email = document.querySelector('.email') 
let botao = document.querySelector('button');

botao.onclick = validateForm;

function validateForm() {
    if (nome.value == "") {
        alert("Nome precisa ser preenchido");   
    } 
    else if (sobrenome.value == "") {
        alert("Sobrenome precisa ser preenchido");
    }
    else if (email.value == "") {
        alert("Email precisa ser preenchido");
    } else {
        alert(email.value + "\n" + sobrenome.value + "\n"+ nome.value)
    }
} 
