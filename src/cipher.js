const cipher = {
    encode: function(mensagem, deslocamento){
        let cript = ""
        for (let i = 0; i < mensagem.length; i++) {
            let letra = mensagem[i].toUpperCase().charCodeAt(0)
            let letraASC = (( letra - 65 + Number(deslocamento)) % 26) + 65
            cript += String.fromCharCode(letraASC)
        }
        return cript;
    },
    decode: function(mensagem, deslocamento){
        let decript = ""
        for (let i = 0; i < mensagem.length; i++) {
            let letra = mensagem[i].charCodeAt(0)
            let letraASC = (( letra + 65 - Number(deslocamento)) % 26) + 65
            decript += String.fromCharCode(letraASC)
        }
        return decript
    }   


}  
export default cipher; //Exportando a função cipher
