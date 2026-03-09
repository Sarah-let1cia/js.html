// ex1
{
let nome = 'sarah'
let idade = '16 anos'
let curso = 'infonet'
console.log('me chamo ' + nome +',tenho '+ idade + ' faço o curso '+ curso);
  }
// ex2
{  
let num = 6;
let num2 = 7;
let soma = num + num2;
console.log (' 6+7 é = a:', soma );
 }
// ex3

let num1 = 2;
let num3 = 7;
console.log(2 + 7);
console.log(2 - 7);
console.log(2 * 7);
console.log(2 / 7);

//ex4

let num4 = '30'
num4 = Number (30);
console.log(Number + 20);

// ex5

let a = 10;
let b = "10";

console.log(a == b); 
console.log(a === b);

// ex 6

let idade = 16;

if( 
    idade>=18
){
console.log("voce é maior de idade ");
}
else{
        console.log("voce é menor de idade");
}
    
// ex7
{ 
let num = -16;

if( 
    num>0 ) {
console.log("o numero e possitivo ");
}
else if (
    num<0
) {
    console.log("numero negativo")
}

else{
        console.log("o numero e zero");
}
 }
//ex8** pedir ajuda

let num = 4;

if( 
    num>=7 ) {
console.log(" aprovado");
}
else if (
    num>=5 && num<7
) {
    console.log("recuperaçao")
}

else{
        console.log("retido");
}

//ex9
{
    for (
let i = 1;
i<= 10;
i++ 
    ){ 
console.log(i);
 }

}
//ex10

{
    let soma=0
    for (
let i = 1;
i<= 100;
i++ 
    )
    soma = soma+i ;
    { 
console.log(soma);
 }

}

//ex11
{
//nao lembro disso
}
// ex12
function soma(a, b) {
 return a + b;
}
console.log(soma(3, 4));

//ex13

function verificar(num) {
    if (num % 2 == 0) {
        return "par";
    } else {
        return "ímpar";
    }
}

console.log(verificar(7));