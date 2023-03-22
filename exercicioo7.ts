var entrada= require("readline-sync");
var h1 = parseFloat(entrada.question(" digite sua idade:"));
var h2 = parseFloat(entrada.question("digite sua idade"));
var m1 = parseFloat(entrada.question("digite sua idade")); 
var m2 = parseFloat(entrada.question("digite sua idade"));

if(h1 > h2 && m1 >m2 ){
    var idadem = h1 && m2;
    var idadex = h2 * m1;
    console.log("a soma e :"+ idadem +" e a multiplicaçao e:" +idadex);
} 
if(h1> h2 && m2 > m1){ 
    var idadem = h1 + m1;
    var idadex= h2 * m2;
    console.log(" a soma e :"+ idadem +" e a multiplicaçao e :" + idadex);

}
if(h2> h1 && m1> m2){
    var idadem= h2+ m2;
    var idadex=h1 * m1;
    console.log("a soma e : "+ idadem + " e a multiplicaçaom e :"+ idadex);

}
if(h2>h1 && m2 >m1){
    var idadem = h2+m1;
    var idadex=h1*m2;
    console.log("a soma e : " + idadem+"e a multiplicaçao e :"+ idadex);
}