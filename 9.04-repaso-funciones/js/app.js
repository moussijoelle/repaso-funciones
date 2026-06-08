// DECLARACIÓN DE VARIABLES
const formulario = document.getElementById('formRepetir');           // enlace HTML: formulario (no es función)
const inputTexto = document.getElementById('texto');                 // enlace HTML: campo del texto
const inputVeces = document.getElementById('veces');                 // enlace HTML: campo del número
const resultado = document.getElementById('resultado');             // enlace HTML: zona donde se muestra el resultado

// DECLARACIÓN DE FUNCIONES

const miFuncion = (texto, veces) => {                                // entrada: texto (string frase), veces (number repeticiones) | salida: string repetido con espacios
    return Array(veces).fill(texto).join(' ');                       // salida devuelta: ej. "Hola Mundo Hola Mundo Hola Mundo"
};

const leerTexto = (input) => {                                       // entrada: input (elemento <input> de texto) | salida: string (lo escrito por el usuario)
    return input.value;
};

const leerNumero = (input) => {                                      // entrada: input (elemento <input type="number">) | salida: number (valor numérico, no texto)
    return Number(input.value);
};

const mostrarTexto = (elemento, texto) => {                          // entrada: elemento (div/párrafo), texto (string a mostrar) | salida: ninguna (escribe en pantalla)
    elemento.textContent = texto;
};

const funcionMain = (evento, inputTexto, inputVeces, elementoResultado) => {  // entrada: evento submit, 2 inputs, div resultado | salida: ninguna (coordina todo)
    evento.preventDefault();                                         // evita recargar la página al enviar el formulario
    const texto = leerTexto(inputTexto);                             // string leído del primer campo
    const veces = leerNumero(inputVeces);                            // number leído del segundo campo
    const repetido = miFuncion(texto, veces);                        // string ya repetido X veces
    mostrarTexto(elementoResultado, repetido);                       // muestra el string en el div resultado
};

// EJECUCIÓN DE CÓDIGO
formulario.addEventListener('submit', (evento) => {                  // entrada: evento (usuario envía formulario) | salida: ninguna (llama funcionMain)
    funcionMain(evento, inputTexto, inputVeces, resultado);          // pasa a funcionMain: evento + los 3 elementos de esta página
});