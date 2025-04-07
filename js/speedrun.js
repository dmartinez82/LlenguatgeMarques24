const inputNombre = document.querySelector("#nombre");
const inputEdad = document.querySelector("#edad");
const taulaResultats = document.querySelector("#taulaResultats");
const boton = document.querySelector("button");

let usuarios = [];

boton.onclick = function () {
    const nombre = inputNombre.value.trim();
    const edadNum = parseInt(inputEdad.value);
    /*
    const siono = (edadNum >= 18) ? (edadNum>65)?"QUESITO, ":"Sí" : "No";
    if (nombre) alert(`Hola ${nombre.toUpperCase()=="DANIEL"?"GUAPO":nombre}, ${siono} eres legal`);
    else alert("Por favor, ingresa tu nombre");
    */

    if (!nombre) {  
        alert("Por favor, ingresa tu nombre");
        return;
    }

    if(edadNum < 18){
        alert("No eres mayor de edad");
        return;
    }

    usuarios.push({
        nom: nombre,
        edad: edadNum,
        mayorDeEdad: (edadNum >= 18) ? true : false
    });

    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    inputNombre.value = "";
    inputEdad.value = "";
    inputNombre.focus();

    mostrarUsuarios();

}

function mostrarUsuarios() {
    let datos = "";
    usuarios.forEach((usuario, index) => {
        datos += "<tr>";
        datos += `<td>${usuario.nom}</td><td>${usuario.edad}</td><td>${usuario.mayorDeEdad ? "Sí" : "No"}</td>`;
        datos += `<td><button class="borrar" data-index="${index}">Borrar</button></td>`;
        datos += "</tr>";
    });
    taulaResultats.innerHTML = datos;
    
    const botonesBorrar = document.querySelectorAll(".borrar");
    botonesBorrar.forEach(function(boton) {
        boton.onclick = eliminarElemento;
    });
}

function eliminarElemento(event) {
    const index = event.target.getAttribute("data-index");
    usuarios.splice(index, 1);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    mostrarUsuarios();
}

// Recuperar usuarios del localStorage
const usuariosGuardados = localStorage.getItem("usuarios");
if (usuariosGuardados) {
    usuarios = JSON.parse(usuariosGuardados);
    mostrarUsuarios();
}