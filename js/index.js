console.log("Hola Mundo");

var a = 0;
console.log(a++); // 0
console.log(a + 1); // 2
console.log(a); // 1
console.log(1 + a + "1");

a = 5;

var mensaje = (a <= 4) ? "no " : "";
console.log(`a ${mensaje}es mayor que 4 (vale: ${a})`);

if (typeof a == "number")
    console.log("es un número");
else if (typeof a == "string")
    console.log("es un string");
else
    console.log(`es de tipo: ${typeof a}`);

var b = [3, 6, "Dani", ["Pep", 7]];

var c = b.push("pollastre", 7, 8, true, "Marc Blanco");
var d = b.pop();

console.log(c);
console.log(b);
console.log(d);

var acumulador = 0  ;
for(var i = 0; i<b.length; i++){
    const element = b[i];
    if (typeof element == "number"){
        acumulador += element;
    }
}

console.log(acumulador);


function suma(a, b){
    a = 1;
    return a + b ;
}

a = 5;
// console.log(suma(a, suma(a, 7)));

console.log(suma(a, 3));

console.log(a);

var lista = [1, 2, 3];
console.log(acumula(lista));
console.log(lista);

function acumula(array){
    var acumulador =0;
    for(var i = 0; i<array.length; i++){
        const element = array[i];
        array[i] = 2*element;
        if (typeof element == "number"){
            acumulador += element;
        }
    }

    return acumulador;
}

