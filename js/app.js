import * as UI from './interfaz.js';
import API from './api.js';

UI.formularioBuscar.addEventListener('submit', buscarCancion);

//Funciones
function buscarCancion(e) {
    e.preventDefault();
    
    const artista = document.querySelector('#artista').value,
          cancion = document.querySelector('#cancion').value;

    if(artista === '' || cancion === '') {
        UI.formularioBuscar.reset();
        UI.divMensajes.classList.add('error');
        UI.divMensajes.textContent = 'Error ... Todos los campos son obligatorios';
        setTimeout(() => {
            UI.divMensajes.textContent = '';
            UI.divMensajes.classList.remove('error');
        }, 3000);
        return;
    } else {
        const busqueda = new API(artista, cancion);
        busqueda.consultarAPI();
    }
}

export function mostrarSpinner() {
    
    const spinner = document.querySelector('.spinner');
    spinner.innerHTML = `
        <div class="rect1"></div>
        <div class="rect2"></div>
        <div class="rect3"></div>
        <div class="rect4"></div>
        <div class="rect5"></div>
    `;
    
    setTimeout(() => {
        spinner.innerHTML = '';
        UI.formularioBuscar.reset();
    }, 4000);
}