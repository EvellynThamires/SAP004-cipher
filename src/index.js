import cipher from './cipher.js'; //Importando o cipher.

//Cifrar
let botaoCifrar = document.querySelector("#cifrar");

botaoCifrar.addEventListener("click", function(){
    let divCifra = document.querySelector(".cifra");
    divCifra.classList.remove("hide");
})

let resultado = document.querySelector("#resultado");

resultado.addEventListener("click", function(event){
    event.preventDefault();
    let form = document.querySelector("#form-cifra");
    let mensagem = form.mensagem.value.replace(" ", "|").split("")
    let deslocamento = form.deslocamento.value
    cipher.encode(mensagem, deslocamento)
})

    









