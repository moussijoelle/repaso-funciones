// IMPORTACIÓN DE MÓDULOS

import { alEnviarFormulario, mostrarAleatorioEnElemento } from "./biblioteca.js";  // trae funciones desde biblioteca.js


// DECLARACIÓN DE VARIABLES

const formAleatorio = document.getElementById("formAleatorio");   // enlace con el formulario del HTML
const zonaResultado = document.getElementById("resultado");       // enlace con el div donde sale el número


// DECLARACIÓN DE FUNCIONES

const funcionMain = () => {                                       // FUNCIÓN PRINCIPAL de esta página: qué hace al pulsar el botón
    mostrarAleatorioEnElemento(zonaResultado, 501, 600, "Tu número: ");  // aquí personalizamos: elemento, rango 501–600 y texto
};


// EJECUCIÓN DE CÓDIGO

alEnviarFormulario(formAleatorio, funcionMain);                   // al enviar el formulario → ejecuta funcionMain
