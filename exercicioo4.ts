var entrada13= require("readline-sync") 
var n= parseFloat(entrada13.question("digite um numero:"));
if(n>0){
    console.log(n+"seu numero e ...positivo!");

}
if(n<0){
    console.log(n+"seu numero e ...negativo!");

}
if(n==0){
    console.log(n+"teu numero e zero");
}