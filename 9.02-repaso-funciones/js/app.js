// IMPORTACIÓN DE MÓDULOS
// (sin módulos; si hubiera funciones.js iría aquí con import)

// DECLARACIÓN DE VARIABLES
// Enlaces con el HTML por id

const formtexto = document.getElementById("formtexto");   // formulario
const texto = document.getElementById("texto");           // input frase
const cantidad = document.getElementById("cantidad");     // input número
const resultado = document.getElementById("resultado");     // zona de salida

// DECLARACIÓN DE FUNCIONES
// Biblioteca: reutilizable en otra app sin modificar (solo parámetros → return)

const recortarTexto = (frase, numero) => frase.slice(0, numero); // recorta la frase

const validarFrase = (frase) => {                        // valida la frase
  if (frase === "") {
    return "Introduce una frase.";
  }
  return "";                                             // "" = sin error
};

const validarCantidad = (numero) => {                    // valida el número
  if (Number.isNaN(numero) || numero < 0) {
    return "Introduce un número válido (0 o más).";
  }
  return "";
};

// Función main: conecta esta página con la biblioteca (cambia en cada ejercicio)

const funcionMain = (evento) => {
  evento.preventDefault();                               // no recarga la página

  const frase = texto.value.trim();                      // 1. Lee frase
  const numero = Number(cantidad.value);                 // 1. Lee cantidad

  const errorFrase = validarFrase(frase);                  // 2. Valida frase
  if (errorFrase !== "") {
    resultado.textContent = errorFrase;                  // 5. Escribe error
    return;
  }

  const errorCantidad = validarCantidad(numero);         // 2. Valida número
  if (errorCantidad !== "") {
    resultado.textContent = errorCantidad;
    return;
  }

  const textoRecortado = recortarTexto(frase, numero);   // 3. Llama biblioteca
  resultado.textContent = textoRecortado;                // 4-5. Recibe y escribe
};

// EJECUCIÓN DE CÓDIGO
// Escuchador: al enviar el formulario ejecuta funcionMain

formtexto.addEventListener("submit", funcionMain);