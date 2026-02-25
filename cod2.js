let numero = 1;
let numeroString = String(numero);
let string='80';
let stringNumero = Number(string);

console.log(typeof numero, numero);
console.log(typeof numeroString, numeroString);
console.log(typeof string, string);
console.log(typeof stringNumero, stringNumero);

console.log('6' + 4);

// condição//

let testeNull = null;
let numero2 = 3

if(testeNull == null) {
    console.log("Não é nulo!");
}
else if (numero2 > 4){ 
    console.log ("Numero maior que 4!");
}
else {
    console.log("É nulo");
}

// tipos de variaveis em js//

//let

let teste = 2;
teste = 4;

if (teste == 4) {
    console.log(teste);
}
