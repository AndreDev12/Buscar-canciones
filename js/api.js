import * as UI from './interfaz.js';
import {mostrarSpinner} from './app.js';

class API {
    constructor(artista, cancion) {
        this.artista = artista;
        this.cancion = cancion;
    }

    consultarAPI() {
        const url = `https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`;

        //Agregar el spinner
        mostrarSpinner();

        fetch(url)
            .then( respuesta => respuesta.json() )
            .then( resultado => {
                const {lyrics} = resultado;
                UI.divResultado.textContent = lyrics;
                UI.headingResultado.textContent = `Letra de la canción: ${this.cancion} de ${this.artista}`;
            })
    }
}

export default API;