// IMPORTACIÓN DE MÓDULOS
// (todo en un archivo; no hace falta import)

// DECLARACIÓN DE VARIABLES
const formulario = document.getElementById('formTexto');       // enlace con el formulario
const inputTexto = document.getElementById('texto');           // input de la frase
const zonaResultado = document.getElementById('resultado');    // donde se muestra el resultado

// DECLARACIÓN DE FUNCIONES

// biblioteca: parte el texto y devuelve un array
const dividirTexto = (texto, separador) => {                   // entrada: string, string
    return texto.split(separador);                             // salida: array de strings
};

// main: lee la página, llama la biblioteca y muestra el resultado
const funcionMain = (evento) => {                                // entrada
    evento.preventDefault();                                   // no recarga la página al enviar

    const frase = inputTexto.value;                            // entrada desde HTML: frase

    const partes = dividirTexto(frase, ' ');                   // separador fijo del enunciado (espacio)

    zonaResultado.textContent = partes.join(', ');             // muestra el array en pantalla
};

// EJECUCIÓN DE CÓDIGO
formulario.addEventListener('submit', funcionMain);            // al enviar, ejecuta funcionMain