var entrada= require("readline-sync");
var n1= parseFloat(entrada.question("digite um numero:"));
var n2=parseFloat(entrada.question("digite outro numero:"));
var n3= parseFloat(entrada.question("digite mais um numero:"));
if(n1+n2 && n1>n3 && n2>n3){
    console.log("a ordem crescente e :"+ n1,+n2,+n3);

} 
if(n2>n1 && n1> n3 && n3>n2){
    console.log("a ordem crescente e:" + n1, +n3, +n2);

} 
if(n2> n1 && n2>n3 && n1>n3){ 
    console.log("a ordem crescente e: "+ n2, +n1, +n3);

} 
if(n2>n1 && n2>n3 && n3>n1){
    console.log(" a ordem crescente e : "+n2, +n3,+n1);
}
if(n3>n2 && n3 > n1 && n2> n1){
    console.log(" a ordem crescente e :"+ n3, +n2, +n1);

}
if( n3> n2 && n3> n1 && n1> n2){
    console.log(" a ordem crescente e :" + n3, +n1, +n2);
}