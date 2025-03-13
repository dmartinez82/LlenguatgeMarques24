const dom = {
    busqueda: document.querySelector('#busqueda'),
    buscar: document.querySelector('#buscar'),
    resultado: document.querySelector('#resultado')
}

const URL_API = "https://pixabay.com/api/?key=48957586-d2ea5ebe706ce2a2d6e911c01";

dom.buscar.onclick = () => {
    const textoParaBuscar = dom.busqueda.value;
    if (textoParaBuscar) {
        buscarImagenes(textoParaBuscar);
    }
}

function buscarImagenes(textoParaBuscar) {
    fetch(`${URL_API}&q=${textoParaBuscar}`)
        .then(respuesta => respuesta.json())
        .then(data => {
            mostrarImagenes(data.hits);
        });
}

function mostrarImagenes(imagenes) {
    dom.resultado.innerHTML = '';
    imagenes.forEach(imagen => {
        const { previewURL, likes, views, largeImageURL } = imagen;

        dom.resultado.innerHTML += `
            <div class="imagen">
                <img src="${previewURL}" />
                <div class="informacion">
                    <p>${likes} Me gusta</p>
                    <p>${views} Vistas</p>
                    <a href="${largeImageURL}" target="_blank">Ver imagen</a>
                </div>
            </div>
        `;
    });
}