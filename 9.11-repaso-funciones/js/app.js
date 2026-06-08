// IMPORTACIÓN DE MÓDULOS
// Este ejercicio no usa import; todo el código está en este archivo

// DECLARACIÓN DE VARIABLES
const formConversion = document.getElementById("formConversion"); // guarda el formulario del HTML
const inputValor = document.getElementById("valor");               // guarda el input del número
const selectBase = document.getElementById("base");                 // guarda el desplegable de conversión
const divResultado = document.getElementById("resultado");         // guarda el div donde se muestra el resultado

// DECLARACIÓN DE FUNCIONES — BIBLIOTECA

const esBinarioValido = (texto) => { // comprueba si el texto es binario válido
  return /^[01]+$/.test(String(texto).trim()); // pasa a texto, quita espacios y comprueba solo 0 y 1
};

const esDecimalValido = (texto) => { // comprueba si el texto es un decimal válido
  const numero = Number(String(texto).trim()); // convierte el texto limpio a número
  return Number.isInteger(numero) && numero >= 0; // true si es entero y no negativo
};

const binarioADecimal = (texto) => { // convierte binario a decimal
  return parseInt(String(texto).trim(), 2); // lee el texto en base 2 y devuelve número base 10
};

const decimalABinario = (texto) => { // convierte decimal a binario
  return Number(String(texto).trim()).toString(2); // pasa a número y lo escribe en base 2
};

const miFuncion = (valor, base) => { // función del ejercicio: convierte según la base elegida
  const texto = String(valor).trim(); // unifica el valor a texto sin espacios extra

  if (base === 2) { // si la entrada es binaria...
    if (!esBinarioValido(texto)) return null; // ...y no es válida, devuelve null
    return binarioADecimal(texto); // ...si es válida, devuelve el decimal
  }

  if (base === 10) { // si la entrada es decimal...
    if (!esDecimalValido(texto)) return null; // ...y no es válida, devuelve null
    return decimalABinario(texto); // ...si es válida, devuelve el binario en texto
  }

  return null; // si la base no es 2 ni 10, no convierte
};

const mensajeResultado = (resultado, baseEntrada) => { // prepara el texto que verá el usuario
  if (resultado === null) return "Entrada no válida para esta conversión."; // mensaje si falló la conversión

  if (baseEntrada === 2) { // si partió de binario...
    return `${resultado} (base 10)`; // ...muestra el resultado en decimal
  }

  return `${resultado} (binario)`; // si partió de decimal, muestra el binario
};

// FUNCIÓN PRINCIPAL (la única que lee y escribe en el HTML)

const funcionMain = (evento) => { // se ejecuta cuando envían el formulario
  evento.preventDefault(); // evita que la página se recargue

  const valor = inputValor.value; // lee lo escrito en el input
  const base = Number(selectBase.value); // lee 2 o 10 del desplegable como número

  const convertido = miFuncion(valor, base); // llama a la biblioteca para convertir
  divResultado.textContent = mensajeResultado(convertido, base); // escribe el mensaje en pantalla
};

// EJECUCIÓN DE CÓDIGO — ESCUCHADORES

formConversion.addEventListener("submit", funcionMain); // al pulsar Convertir, ejecuta funcionMain