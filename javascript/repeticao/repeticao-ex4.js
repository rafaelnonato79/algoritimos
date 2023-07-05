let popA=80000;
let popB=200000;
let anos=0;
for(let i=0;;i++){
    popA=popA+(popA*0.03);
    popB=popB+(popB*0.015);
    anos=i;
    if(popA>popB){
        break;
    };
}
alert(`${anos} Anos \n População A = ${popA.toFixed(2)} \n População B = ${popB.toFixed(2)}`);