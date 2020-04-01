const cipher = {
    encode: function (mensagem, deslocamento) {
        let alfabeto = ["A","B","C","D","E","F","G","H","I","J","K","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
        let cripto = []
        let mensagemCriptografada = []


        for (let m = 0; m < mensagem.length; m++) {
            
            for (let a = 0; a < alfabeto.length; a++) {
                if(alfabeto[a].toUpperCase() == mensagem[m].toUpperCase()) {
                    cripto.push(a)
                }
            }
        }

        for (let c = 0; c < cripto.length; c++) {
            let valor = Number(cripto[c]) + Number(deslocamento)
            mensagemCriptografada.push(alfabeto[valor])
            }
        
            let resultadoMensagem = document.querySelector("#resultado-mensagem")
            resultadoMensagem.textContent = mensagemCriptografada
        }
        
        
        
        

       
    }
export default cipher; //Exportando a função cipher
