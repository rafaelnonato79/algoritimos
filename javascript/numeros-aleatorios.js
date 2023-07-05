function somar(numero1, numero2) {
    return numero1 + numero2;
}

function gerarAleatorios() {
    return Math.floor(Math.random() * 100);
}

function calcular() {
    let numero1 = gerarAleatorios();
    let numero2 = gerarAleatorios();
    let soma = somar(numero1, numero2);

    document.getElementById('numero1').value = numero1;
    document.getElementById('numero2').value = numero2;
    document.getElementById('soma').value = soma;
}