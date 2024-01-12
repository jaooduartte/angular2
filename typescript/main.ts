var minhaVar = 'minha variavel';

function minhaFunc (x, y){
    return x + y;
}

//ES 6 ou ES 2015
let num1 = 4;
const num2 = 7; 

var numeros = [1, 2, 3];
numeros.map(function(valor){
    return valor * 2;
});

numeros.map(valor => valor * 2); //ES 2015