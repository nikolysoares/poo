var entrada=require("readline-sync");
var nome = entrada.question(" digite seu nome:");
var salario= parseFloat(entrada.question("digite seu salario atul:"));
var trabalho=parseFloat(entrada.question("digite seus nos de trabalho:"));
if(trabalho<= 3 ){
    var soma2= salario* 1.03;
    console.log("seu novo salario e:"+ soma2);
}
if(trabalho>3 && trabalho<10){
    var soma= salario * 1.125;
    console.log("seu salario e:" + soma);
}
if(trabalho>10){
    var soma=salario * 1.2;
    console.log("seu novo salario e : "+ soma);
}