// DECLARACIÓN DE VARIABLES
const formulario = document.getElementById("formContar");            // enlace HTML: formulario
const inputTexto = document.getElementById("texto");                 // enlace HTML: texto largo
const inputPalabra = document.getElementById("palabra");             // enlace HTML: palabra a buscar
const resultado = document.getElementById("resultado");              // enlace HTML: zona de salida

// DECLARACIÓN DE FUNCIONES

// — BIBLIOTECA: independientes (solo parámetros y return) —
// Prueba: miFuncion("hola mundo adios mundo", "mundo") → 2

const miFuncion = (texto, palabra) => {                              // entrada: texto (string), palabra (string) | salida: number
    const palabras = texto.trim().split(/\s+/);                      // separa el texto en palabras por espacios
    return palabras.filter((p) => p === palabra).length;             // cuenta las que son iguales a palabra
};

const leerTexto = (input) => {                                       // entrada: input (elemento HTML) | salida: string
    return input.value.trim();                                       // lee lo que escribió el usuario
};

const mostrarTexto = (elemento, texto) => {                          // entrada: elemento + texto (string) | salida: ninguna
    elemento.textContent = texto;                                    // escribe en pantalla (sin return)
};

// — MAIN: coordina esta página (función principal) —

const funcionMain = (evento, inputTexto, inputPalabra, elementoResultado) => {  // entrada: evento submit, 2 inputs, div | salida: ninguna
    evento.preventDefault();                                         // evita recargar la página al enviar el formulario

    const texto = leerTexto(inputTexto);                             // 1. Lee el texto largo del primer campo
    const palabra = leerTexto(inputPalabra);                         // 2. Lee la palabra del segundo campo

    if (texto === "" || palabra === "") {                              // 3. Validación: campos vacíos
        mostrarTexto(elementoResultado, "Rellena los dos campos");    // aviso al usuario
        return;                                                        // sale sin contar
    }

    const veces = miFuncion(texto, palabra);                           // 4. Llama la función del enunciado → number
    mostrarTexto(elementoResultado, `"${palabra}" aparece ${veces} vez/veces`);  // 5. Muestra el resultado en pantalla
};

// EJECUCIÓN DE CÓDIGO
formulario.addEventListener("submit", (evento) => {                  // entrada: evento submit | salida: ninguna (dispara funcionMain)
    funcionMain(evento, inputTexto, inputPalabra, resultado);        // pasa evento + elementos de ESTA página
});