import cipher from './cipher.js'; //Importando o cipher.

//Cifrar
let botaoCifrar = document.querySelector("#cifrar");

botaoCifrar.addEventListener("click", function () {
    let divCifra = document.querySelector(".cifra");
    let divDecifra = document.querySelector(".decifra");
    divCifra.classList.remove("hide");
    divDecifra.classList.add("hide");
})

let resultado = document.querySelector("#resultadoEncode");

resultado.addEventListener("click", function (event) {
    event.preventDefault();
    let form = document.querySelector("#form-cifra");

    let mensagem = form.mensagemEncode.value.split("")
    let deslocamento = form.deslocamentoEncode.value

    if(mensagem == "" || deslocamento == ""){
        alert("Preencha o campo!")
        return
    }

    let msgCripto = cipher.encode(deslocamento, mensagem)

    let resultadoMensagem = document.querySelector("#resultadoMensagemCifrada")
    resultadoMensagem.textContent = msgCripto
})

//Decifrar
let botaoDecifrar = document.querySelector("#decifrar");

botaoDecifrar.addEventListener("click", function () {
    let divDecifra = document.querySelector(".decifra");
    let divCifra = document.querySelector(".cifra");
    divDecifra.classList.remove("hide");
    divCifra.classList.add("hide");
})

let resultadoDecifra = document.querySelector("#resultadoDecode");

resultadoDecifra.addEventListener("click", function (event) {
    event.preventDefault();
    let form = document.querySelector("#form-decifra");

    let mensagem = form.mensagemDecifrada.value.split("")
    let deslocamento = form.deslocamentoDecode.value

    if(mensagem == "" || deslocamento == ""){
        alert("Preencha o campo!")
        return
    }

    let msgDecript = cipher.decode(deslocamento, mensagem)

    let resultadoMensagem = document.querySelector("#resultadoMensagemDecode")
    resultadoMensagem.textContent = msgDecript
})

//Resetar

let resetar = document.querySelector("#limpar")

resetar.addEventListener("click", function(){
    document.querySelector("#resultadoMensagemCifrada").innerHTML = ""
})

let reset = document.querySelector("#clean")

reset.addEventListener("click", function(){
    document.querySelector("#resultadoMensagemDecode").innerHTML = ""
})








