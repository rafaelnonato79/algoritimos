let nome = prompt(`Digite o seu nome`).toLowerCase();
let senha = prompt(`Digite sua senha`),toLowerCase();
while(senha==nome){
    alert(`Erro, senha não permitida.`)
    senha = prompt(`Digite sua senha`);
}
alert(`Senha Aceita`)