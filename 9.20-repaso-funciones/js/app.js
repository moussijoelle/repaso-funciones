// DECLARACIÓN DE VARIABLES

const formulario = document.getElementById("formArray");       // enlace con el formulario
const inputArray = document.getElementById("arrayTexto");      // enlace con el campo de texto
const zonaResultado = document.getElementById("resultado");    // enlace con la zona del mensaje


// DECLARACIÓN DE FUNCIONES

const textoAValor = (texto) => {                               // entrada: string | salida: any
    return JSON.parse(texto.trim());                             // convierte el JSON escrito a valor
};

const esArray = (valor) => {                                   // entrada: any | salida: boolean
    return Array.isArray(valor);                               // true si es un arreglo
};

const entradaValida = (texto) => {                             // entrada: string | salida: boolean
    let valido = false;                                          // empieza en false por si falla el JSON
    try {
        const valor = textoAValor(texto);                        // intenta leer el JSON
        valido = esArray(valor);                                 // true solo si es array
    } catch {
        valido = false;                                          // JSON mal escrito
    }
    return valido;                                               // un solo return al final
};

const yaEstaEnLista = (elemento, lista) => {                   // entrada: any + array | salida: boolean
    return lista.includes(elemento);                             // true si ese valor ya está
};

const miFuncion = (array) => {                                 // entrada: array | salida: array
    const sinDuplicados = [];                                    // lista vacía para el resultado
    for (const elemento of array) {                              // recorre cada posición
        if (!yaEstaEnLista(elemento, sinDuplicados)) {           // si es la primera vez…
            sinDuplicados.push(elemento);                        // …lo guarda
        }
    }
    return sinDuplicados;                                        // array sin repetidos
};

const arrayATexto = (array) => {                               // entrada: array | salida: string
    return JSON.stringify(array);                              // lo vuelve texto para mostrar
};

const mensajeResultado = (esValido, resultado) => {            // entrada: boolean + array | salida: string
    const error = 'Escribe un arreglo JSON válido. Ej: ["x", 10, true]'; // texto si falla
    const ok = arrayATexto(resultado);                           // texto si todo va bien
    return esValido ? ok : error;                                // elige un mensaje u otro
};

// FUNCIÓN PRINCIPAL (única que toca el DOM)

const funcionPrincipal = (evento) => {                         // entrada: event | salida: ninguna
    evento.preventDefault();                                     // evita recargar la página

    const textoEscrito = inputArray.value;                       // lee lo que escribió la usuaria
    const esValido = entradaValida(textoEscrito);                // comprueba el formato
    const valores = esValido ? textoAValor(textoEscrito) : [];   // obtiene el array si es válido
    const resultado = esValido ? miFuncion(valores) : [];        // quita duplicados con return
    const mensaje = mensajeResultado(esValido, resultado);       // prepara el texto a mostrar
    zonaResultado.textContent = mensaje;                         // pinta en pantalla
};


// EJECUCIÓN DE CÓDIGO

formulario.addEventListener("submit", funcionPrincipal);       // al enviar, ejecuta la principal
