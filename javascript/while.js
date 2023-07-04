do{
    var resposta= prompt(`Eu sou bonito?`).toLowerCase().trim();
    if(resposta != `sim` && resposta != `s`){
    alert(`Resposta errada! tente novamente`)
    }
}
while(resposta != `sim` && resposta !=`s`){
    alert(`Resposta errada! tente novamente`)
    resposta=prompt(`Eu sou bonito?`).toLowerCase().trim()
}
alert(`Resposta Correta`)