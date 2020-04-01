const cipher = {
    encode: function (mensagem, deslocamento) {
        let alfabeto = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
        let cripto = []
        let mensagemCriptografada = []
        console.log(alfabeto.length)
        for (let m = 0; m < mensagem.length; m++) {
            
            for (let a = 0; a < alfabeto.length; a++) {
                if(alfabeto[a].toUpperCase() == mensagem[m].toUpperCase()) {
                    cripto.push(a)
                }
            }
        }

        for (let c = 0; c < cripto.length; c++) {
            let valor = 0
            valor = Number(cripto[c]) + Number(deslocamento)
            if(valor < alfabeto.length){
                mensagemCriptografada.push(alfabeto[valor+1])
            }
            else{
                console.log(" entrei")
                let l = true
                while (l === true) {
                    if(valor >= alfabeto.length) {
                        valor = valor - alfabeto.length
                    }
                    else {
                        l = false 
                    }
                }
                console.log(valor)
                mensagemCriptografada.push(alfabeto[valor-1])
            }
        }
            let resultadoMensagem = document.querySelector("#resultado-mensagem")
            resultadoMensagem.textContent = mensagemCriptografada
    },
}
export default cipher; //Exportando a função cipher
