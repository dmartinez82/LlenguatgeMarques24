const boton1 = document.querySelector("#btnClick1");
const boton2 = document.querySelector("#btnClick2");
const input = document.querySelector("#nombre");
const btnCanviEstil = document.querySelector("#btnCanviEstil");
const tablaHistorial = document.querySelector("#tablaHistorial");

var historial = [];

boton1.addEventListener("click", ()=>saluda("hola"));
boton2.addEventListener("click", ()=>forget());
btnCanviEstil.onclick = cambiaestilo;

function saluda(mensaje){
    let nombre = "";
    if (!localStorage.getItem("nombre")) {
         nombre = prompt("¿Cómo te llamas?");
         nombre = nombre || "SIN \"NOMBRE\" ";
         localStorage.setItem("nombre", nombre);
    } else{
        nombre = localStorage.getItem("nombre");
    }
    input.value = `${mensaje} ${nombre}`;
}

function forget(){
    localStorage.removeItem("nombre");
}

function send(){
    document.querySelector("h1").textContent = "Pues Adios!";
    setTimeout(()=>{
        location.href="index.html";
    }, 2000);
}

function cambiaestilo(){
    // document.querySelector("body").setAttribute("style", "background-color: green")
    document.querySelector("body").classList.add("fondoVerde");
}

const resultado = document.querySelector("#resultado");
const operaciones = document.querySelector("#operaciones");
const btnCalcula = document.querySelector("#calcula");

btnCalcula.onclick = calcula;

function calcula(){
    let operacion = operaciones.value;

    let primero = parseInt(document.querySelector("#primero").value);
    let segundo = parseInt(document.querySelector("#segundo").value);

    let result;
    if (operacion == "+") result = suma(primero, segundo);
    else if (operacion == "-") result = diff(primero, segundo);
    else if (operacion == "*") result = mult(primero, segundo);
    else if (operacion == "/") result = div(primero, segundo);
    else if (operacion == "rand") result = random();

    resultado.value = result;

    let lineaHistorial = {
        primer: primero,
        segon: segundo,
        operacion: operacion,
        resultado: result,
        momento: {
            dia: new Date().getDate(),
            mes: new Date().getMonth(),
            any: new Date().getFullYear(),
            hora: new Date().getHours(),
            minuts: new Date().getMinutes(),
            segons: new Date().getSeconds()
        }
    };

    console.log(lineaHistorial);
    const objetoJSON = JSON.stringify(lineaHistorial);
    console.log(objetoJSON);

    console.log(JSON.parse(objetoJSON));

    historial.push(lineaHistorial);

    pintaHistorial();
}

function pintaHistorial(){

    let resultado = "";
    tablaHistorial.innerHTML = "";
    historial.forEach(function(element){
        resultado += `<tr>
                        <td>${element.momento.any}</td>
                        <td>${element.primer}</td>
                        <td>${element.operacion}</td>
                        <td>${element.segon}</td>
                        <td>${element.resultado}</td>
                    </tr>`;
    });

    tablaHistorial.innerHTML = resultado;
}

function suma(a, b){
    return a+b;
}

function diff(a, b){
    return Math.abs(a-b);
}

function mult(a, b){
    return a*b;
}

function div(a, b){
    if (b==0){
        if (a==0) alert("Error: No posible");
        else alert("No es posible dividir entre 0");
        return "";
    } else{
        return (a/b).toPrecision(3);
    }
}

function random(){
    return Math.round(Math.random()*100);
}

let r;
let contador = 0;
do{
    r = random();
    contador++;
} while(r!=100);

// alert("Lo he econtrado en la iteración " + contador);




const fecha = document.querySelector("#fecha");

fecha.onblur = function(){

    let dataNaix = new Date(this.value);
    let dataAvui = new Date();
    dataNaix.setFullYear(dataNaix.getFullYear()+18);

    if (dataNaix < dataAvui){
        alert("ÉS MAJOR D'EDAT");
    } else{
        alert("NO ÉS MAJOR D'EDAT");
    }
}


const a = {nombre: "Daniel"};
a.nombre = "Dani";
console.log(a);