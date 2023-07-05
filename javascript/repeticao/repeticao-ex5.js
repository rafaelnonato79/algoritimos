let popA=parseFloat(prompt(`Digite a população do país A`));
let popB=parseFloat(prompt(`Digite a população do país B`));
let taxaCrescimentoA=parseFloat(prompt(`Digite a taxa de crescimento do país A`))/100;
let taxaCrescimentoB=parseFloat(prompt(`Digite a taxa de crescimento do país B`))/100;
let anos=0;
for(let i=0;;i++){
    popA=popA+(popA*taxaCrescimentoA);
    popB=popB+(popB*taxaCrescimentoB);
    anos=i;
    if(popA>popB){
        break;
    };
}
alert(`${anos} Anos \n População A = ${popA.toFixed(2)} \n População B = ${popB.toFixed(2)}`);