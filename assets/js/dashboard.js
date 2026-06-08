// IMPORTACIÓN DE MÓDULOS
// historial.js (script en index.html)

// DECLARACIÓN DE VARIABLES
const CLAVE = "repaso-funciones-historial";                          // nombre con el que se guarda en localStorage
const TOTAL = 21;                                                    // ejercicios totales del contador

const ids = [                                                        // lista de ids para los cuadraditos del historial
  "9.1", "9.2", "9.3", "9.4", "9.5", "9.6", "9.7", "9.8", "9.9", "9.10",
  "9.11", "9.12", "9.13", "9.14", "9.15", "9.16", "9.17", "9.18", "9.19", "9.20", "9.21",
];

const listaEjercicios = document.getElementById("lista-ejercicios"); // enlace HTML: contenedor con ejercicios 9.1–9.21
const grid = document.getElementById("history-grid");                // enlace HTML: cuadrícula del historial
const contador = document.getElementById("history-count");           // enlace HTML: texto "Visitado: X / 21"
const btnReiniciar = document.getElementById("reset-history");       // enlace HTML: botón reiniciar

// DECLARACIÓN DE FUNCIONES

// — MAIN (función principal de ESTA página; como funcionMain en 9.5) —
// Lee historial → llama biblioteca → escribe en HTML

const refrescar = () => {                                            // FUNCIÓN PRINCIPAL | solo pinta la página
  const visitados = leerHistorial(CLAVE);                            // lee qué ejercicios ya se visitaron
  const enlaces = listaEjercicios.getElementsByClassName("exercise-link"); // coge todos los enlaces de ejercicios

  for (let i = 0; i < enlaces.length; i++) {                         // recorre cada enlace
    const enlace = enlaces[i];                                       // enlace actual del bucle
    enlace.className = clasesEnlace(enlace.dataset.id, visitados);   // pone verde o cyan según historial
  }

  grid.innerHTML = htmlCuadritos(ids, visitados);                    // dibuja los 21 cuadraditos
  contador.textContent = textoContador(visitados, TOTAL);            // actualiza "Visitado: X / 21"
};

const marcarVisita = (enlace) => {                                   // solo guarda la visita en localStorage
  alClicEjercicio(CLAVE, enlace.dataset.id);
};

const reiniciarHistorial = () => {                                   // solo vacía localStorage
  alReiniciar(CLAVE);
};

// EJECUCIÓN DE CÓDIGO

const enlaces = listaEjercicios.getElementsByClassName("exercise-link");

for (let i = 0; i < enlaces.length; i++) {
  const enlace = enlaces[i];
  enlace.addEventListener("click", () => {
    marcarVisita(enlace);
    refrescar();
  });
}

btnReiniciar.addEventListener("click", () => {
  reiniciarHistorial();
  refrescar();
});

refrescar();                                                         // arranque: la main pinta la página al cargar
