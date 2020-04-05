import cipher from './cipher.js'; //Importando o cipher.

// //Cifrar
let botaoCifrar = document.querySelector("#cifrar");

botaoCifrar.addEventListener("click", function () {
    let divCifra = document.querySelector(".cifra");
    divCifra.classList.remove("hide");
})

let resultado = document.querySelector("#resultadoEncode");

resultado.addEventListener("click", function (event) {
    event.preventDefault();
    let form = document.querySelector("#form-cifra");

    let mensagem = form.mensagemEncode.value.split("")
    let deslocamento = form.deslocamentoEncode.value

    let msgCripto = cipher.encode(mensagem, deslocamento)

    let resultadoMensagem = document.querySelector("#resultadoMensagemCifrada")
    resultadoMensagem.textContent = msgCripto
})

//Decifrar
let botaoDecifrar = document.querySelector("#decifrar");

botaoDecifrar.addEventListener("click", function () {
    let divDecifra = document.querySelector(".decifra");
    divDecifra.classList.remove("hide");
})

let resultadoDecifra = document.querySelector("#resultadoDecode");

resultadoDecifra.addEventListener("click", function (event) {
    event.preventDefault();
    let form = document.querySelector("#form-decifra");

    let mensagem = form.mensagemEncode.value.split("")
    let deslocamento = form.deslocamentoDecode.value

    let msgDecript = cipher.decode(mensagem, deslocamento)

    let resultadoMensagem = document.querySelector("#resultadoMensagemDecode")
    resultadoMensagem.textContent = msgDecript
})











