const entrada10 = require("readline-sync");
let salario1: number = parseFloat(entrada10.question("digite seu salario por hora:")); 
let m1: number= parseFloat(entrada10.question("digite as horas trabalhadas na semana :"));

if( m1>160){
    let sx: number = (m1 - 160)
    console.log("seu salario atual e :" ,(160 + sx*1.5)*salario1,"(com hora extra)");

}
else if( m1 <= 160){
    console.log("seu salario total e:" ,m1*salario1);

}
else{
    console.log("digite o valor em numeros.");
}