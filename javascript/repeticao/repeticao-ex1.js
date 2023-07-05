let nota = parseInt(prompt(`Digite um número entre 0 e 10`));
while(nota<0 ||  nota>10){
    alert(`Valor Inválido \n Tente novamente`)
    nota = parseInt(prompt(`Digite um número entre 0 e 10`));
}
alert(`Nota valida`)