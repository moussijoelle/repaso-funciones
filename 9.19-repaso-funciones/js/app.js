// DECLARACIÓN DE VARIABLES

const formulario = document.getElementById("formNumeros");      // enlace con el formulario
const inputNumeros = document.getElementById("numeros");        // enlace con el campo de texto
const zonaResultado = document.getElementById("resultado");     // enlace con la zona del mensaje


// DECLARACIÓN DE FUNCIONES

const copiarArray = (array) => {                               // entrada: array | salida: array
    return [...array];                                           // copia sin modificar el original
};

const ordenAscendente = (array) => {                           // entrada: array | salida: array
    const copia = copiarArray(array);                            // trabaja sobre una copia
    return copia.sort((a, b) => a - b);                          // de menor a mayor
};

const ordenDescendente = (array) => {                            // entrada: array | salida: array
    const copia = copiarArray(array);                            // trabaja sobre una copia
    return copia.sort((a, b) => b - a);                          // de mayor a menor
};

const miFuncion = (array) => {                                 // entrada: array | salida: object
    const asc = ordenAscendente(array);                          // lista ascendente
    const desc = ordenDescendente(array);                        // lista descendente
    return { asc, desc };                                        // { asc: [...], desc: [...] }
};

const separarPorComas = (texto) => {                           // entrada: string | salida: array
    return texto.split(",");                                   // parte el texto por comas
};

const limpiarParte = (parte) => {                              // entrada: string | salida: string
    return parte.trim();                                       // quita espacios al borde
};

const parteANumero = (parte) => {                              // entrada: string | salida: number
    return Number(parte);                                      // convierte el trozo a número
};

const textoAArray = (texto) => {                               // entrada: string | salida: array
    const partes = separarPorComas(texto).map(limpiarParte);   // separa y limpia cada trozo
    const numeros = partes.filter((p) => p.length > 0).map(parteANumero); // quita vacíos y convierte
    return numeros;                                            // devuelve array de números
};

const esEntero = (numero) => {                                 // entrada: number | salida: boolean
    return Number.isInteger(numero);                           // true si no tiene decimales
};

const arrayValido = (valores) => {                             // entrada: array | salida: boolean
    const tieneElementos = valores.length > 0;                 // comprueba que no esté vacío
    const todosSonNumeros = valores.every((n) => !Number.isNaN(n)); // comprueba que no haya NaN
    const todosSonEnteros = valores.every(esEntero);           // rechaza 1.4 (punto decimal)
    return tieneElementos && todosSonNumeros && todosSonEnteros; // true si el array es usable
};

const formatearAscDesc = (objeto) => {                         // entrada: object | salida: string
    const textoAsc = `[${objeto.asc.join(", ")}]`;               // convierte asc a texto legible
    const textoDesc = `[${objeto.desc.join(", ")}]`;             // convierte desc a texto legible
    return `Asc: ${textoAsc} | Desc: ${textoDesc}`;              // une todo para pantalla
};

const mensajeResultado = (esValido, resultado) => {            // entrada: boolean + object | salida: string
    const mensajeError = "Usa comas entre enteros, no puntos (ej: 7, 5, 8)."; // texto si falla
    const mensajeOk = formatearAscDesc(resultado);             // texto si todo va bien
    return esValido ? mensajeOk : mensajeError;                // elige un mensaje u otro
};

// FUNCIÓN PRINCIPAL (única que toca el DOM)

const funcionPrincipal = (evento) => {                         // entrada: event | salida: ninguna
    evento.preventDefault();                                   // evita recargar la página

    const textoEscrito = inputNumeros.value;                     // lee el texto del input
    const valores = textoAArray(textoEscrito);                 // convierte texto → array
    const esValido = arrayValido(valores);                     // valida el array
    const resultado = esValido ? miFuncion(valores) : { asc: [], desc: [] }; // calcula si es válido
    const mensaje = mensajeResultado(esValido, resultado);     // prepara el mensaje
    zonaResultado.textContent = mensaje;                       // muestra en pantalla
};


// EJECUCIÓN DE CÓDIGO

formulario.addEventListener("submit", funcionPrincipal);       // al enviar, ejecuta la principal
