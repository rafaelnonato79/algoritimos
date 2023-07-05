let nome = prompt(`Digite o seu nome`).toLowerCase();
while(nome.length<3){
    alert(`Nome inválido, por favor digite mais de 3 letras.`);
    nome=prompt(`Digite o seu nome`).toLowerCase();
}

let idade = parseInt(prompt(`Digite sua idade:`));

while(idade<0 || idade>150){
    alert(`Idade inválida, por favor digite novamente.`);
    idade = parseInt(prompt(`Digite sua idade:`));
}
let salario = parseFloat(prompt(`Qual o seu salário`));
while(salario<0){
    alert(`Salário inválido, informe novamente.`);
    salario = parseFloat(prompt(`Qual o seu salário`));
}
let sexo = prompt(`Informe seu sexo: \n F - feminino \n M - Masculino`).toLowerCase().trim();
while(sexo != `f` && sexo != `m`){
    alert(`Sexo inválido, informe novamente.`);
    sexo = prompt(`Informe seu sexo: \n F - feminino \n M - Masculino`).toLowerCase().trim();
}
let estCiv = prompt(`Digite seu estado civil: \n S - Solteiro \n C - Casado \n V - Viuvo \n D - Divorciado`).toLowerCase().trim();
while(estCiv != `s` && estCiv != `c` && estCiv != `v` && estCiv != `d`){
    alert(`Estado civil inválido, por favor responda corretamente.`);
    estCiv = prompt(`Digite seu estado civil: \n S - Solteiro \n C - Casado \n V - Viuvo \n D - Divorciado`).toLowerCase().trim();
}