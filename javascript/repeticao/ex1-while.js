//Criar um algoritimo que verifique a senha diitada e bloquei o acesso na quarta tentativa. Senha 12345

const senha=`12345`
let feedback=`Bloqueado`

for(let tentativa=0; tentativa<4; tentativa++){
    senhaDigitada = prompt(`Digite a sua senha`);
    if(senhaDigitada == senha){
        break;
        feedback=`Autorizado`;
    }
    alert(`Senha inválida! Tentativa ${tentativa +1} de 4`)
}

alert(feedback);