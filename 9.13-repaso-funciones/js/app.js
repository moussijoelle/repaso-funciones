// — IMPORTACIÓN DE MÓDULOS —                                     // aquí irían los import, si usáramos módulos
// (vacío — no hace falta en este ejercicio)                        // trabajamos con un solo archivo

// — DECLARACIÓN DE VARIABLES —                                     // enlaces con el HTML (DOM)
const formContar = document.getElementById("formContar");          // entrada: form submit
const inputTexto = document.getElementById("texto");               // entrada: texto escrito por el usuario
const zonaResultado = document.getElementById("resultado");        // salida: donde mostramos el resultado

// — DECLARACIÓN DE FUNCIONES —                                     // biblioteca + función principal
const esVocal = (letra) => {                                       // entrada: 1 letra | salida: boolean
    const minuscula = letra.toLowerCase();                         // normaliza mayúsculas/minúsculas
    return "aeiou".includes(minuscula);                            // true si está en a,e,i,o,u
};                                                                 // fin esVocal

const esLetra = (caracter) => {                                    // entrada: 1 carácter | salida: boolean
    return /^[a-záéíóúüñ]$/i.test(caracter);                       // acepta solo letras (no espacio, no símbolos)
};                                                                 // fin esLetra

const contarVocales = (cadena) => {                                // entrada: string | salida: número de vocales
    let total = 0;                                                 // contador de vocales
    for (const caracter of cadena) {                               // recorre el texto carácter a carácter
        if (esLetra(caracter) && esVocal(caracter)) total++;       // suma si es letra y vocal
    }                                                              // fin del recorrido
    return total;                                                  // devuelve el total
};                                                                 // fin contarVocales

const contarConsonantes = (cadena) => {                            // entrada: string | salida: número de consonantes
    let total = 0;                                                 // contador de consonantes
    for (const caracter of cadena) {                               // recorre el texto carácter a carácter
        if (esLetra(caracter) && !esVocal(caracter)) total++;      // suma si es letra y NO vocal
    }                                                              // fin del recorrido
    return total;                                                  // devuelve el total
};                                                                 // fin contarConsonantes

const formatearResultado = (vocales, consonantes) => {             // entrada: 2 números | salida: string
    return `Vocales: ${vocales}, Consonantes: ${consonantes}`;     // construye el mensaje final
};                                                                 // fin formatearResultado


const funcionMain = (event) => {                                   // FUNCIÓN PRINCIPAL (única que toca el DOM)
    event.preventDefault();                                        // evita recargar al enviar el form

    const cadena = inputTexto.value.trim();                        // lee el texto del input
    const vocales = contarVocales(cadena);                         // calcula vocales (biblioteca)
    const consonantes = contarConsonantes(cadena);                 // calcula consonantes (biblioteca)
    const mensaje = formatearResultado(vocales, consonantes);      // prepara el texto de salida

    zonaResultado.textContent = mensaje;                           // escribe el resultado en pantalla
};                                                                 // fin funcionMain
// — EJECUCIÓN DE CÓDIGO —                                          // donde arrancamos la interacción

formContar.addEventListener("submit", funcionMain);                // evento submit → llama a la función principal






























