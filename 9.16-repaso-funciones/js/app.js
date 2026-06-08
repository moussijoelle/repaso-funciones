// DECLARACIÓN DE VARIABLES

const formulario = document.getElementById("formNumeros");      // enlace con el formulario
const inputNumeros = document.getElementById("numeros");        // enlace con el campo de texto
const zonaResultado = document.getElementById("resultado");     // enlace con la zona del mensaje


// DECLARACIÓN DE FUNCIONES

const elevarAlCuadrado = (numero) => {                         // entrada: number | salida: number
    return numero * numero;                                    // multiplica el número por sí mismo
};

const miFuncion = (array) => {                                 // entrada: array | salida: array
    const cuadrados = array.map(elevarAlCuadrado);             // aplica elevarAlCuadrado a cada elemento
    return cuadrados;                                          // devuelve el nuevo array al cuadrado
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

const formatearArray = (valores) => {                          // entrada: array | salida: string
    return `[${valores.join(", ")}]`;                          // texto legible para pantalla
};

const mensajeResultado = (esValido, cuadrados) => {            // entrada: boolean + array | salida: string
    const mensajeError = "Usa comas entre enteros, no puntos (ej: 1, 4, 5)."; // texto si falla
    const mensajeOk = formatearArray(cuadrados);               // texto si todo va bien
    return esValido ? mensajeOk : mensajeError;                // elige un mensaje u otro
};

// FUNCIÓN PRINCIPAL (única que toca el DOM)

const funcionPrincipal = (evento) => {                         // entrada: event | salida: ninguna
    evento.preventDefault();                                     // evita recargar la página

    const textoEscrito = inputNumeros.value;                   // lee el texto del input
    const valores = textoAArray(textoEscrito);                 // convierte texto → array
    const esValido = arrayValido(valores);                     // valida el array
    const cuadrados = esValido ? miFuncion(valores) : [];       // calcula cuadrados si es válido
    const mensaje = mensajeResultado(esValido, cuadrados);     // prepara el mensaje
    zonaResultado.textContent = mensaje;                       // muestra en pantalla
};


// EJECUCIÓN DE CÓDIGO

formulario.addEventListener("submit", funcionPrincipal);       // al enviar, ejecuta la principal
