// BIBLIOTECA — solo datos, reutilizable en otro dashboard
// Aquí no hay función principal; todas son independientes (como esPrimo en 9.1)

const leerHistorial = (clave) => {                                   // entrada: clave (string) | salida: array
  try {                                                              // intenta leer sin romper la app
    return JSON.parse(localStorage.getItem(clave) || "[]");          // convierte JSON guardado en array; si no hay nada → []
  } catch {                                                          // si el JSON está corrupto
    return [];                                                       // devuelve lista vacía
  }
};

const guardarHistorial = (clave, lista) => {                         // entrada: clave + lista | salida: lista
  localStorage.setItem(clave, JSON.stringify(lista));                // guarda el array como texto en el navegador
  return lista;                                                      // devuelve la misma lista por si la necesitas
};

const agregarVisita = (lista, id) => {                               // entrada: lista + id ejercicio | salida: lista
  if (lista.includes(id)) return lista;                              // si ya visitó ese ejercicio, no duplica
  return [...lista, id];                                             // añade el id al final y devuelve lista nueva
};

const vaciarHistorial = () => [];                                    // entrada: ninguna | salida: array vacío

const alClicEjercicio = (clave, id) =>                               // entrada: clave + id | salida: lista guardada
  guardarHistorial(clave, agregarVisita(leerHistorial(clave), id)); // lee → añade visita → guarda

const alReiniciar = (clave) =>                                       // entrada: clave | salida: []
  guardarHistorial(clave, vaciarHistorial());                        // borra historial y lo guarda vacío

const textoContador = (lista, total) =>                              // entrada: lista + total | salida: string
  `Visitado: ${lista.length} / ${total}`;                            // ej. "Visitado: 3 / 21"

const clasesEnlace = (id, lista) =>                                  // entrada: id + lista | salida: clases CSS
  lista.includes(id)                                                 // ¿está visitado?
    ? "exercise-link text-[#39ff14] font-semibold hover:underline"  // sí → verde y negrita
    : "exercise-link text-cyan-300 hover:underline";                 // no → cyan normal

const htmlCuadrito = (id, lista) => {                                // entrada: id + lista | salida: HTML de 1 cuadrado
  const hecho = lista.includes(id);                                  // true si ese ejercicio ya se visitó
  const base = "flex aspect-square items-center justify-center rounded text-[0.5rem] font-bold"; // clases comunes
  const verde = "bg-[#39ff14] text-black";                           // estilo cuadrado visitado
  const gris = "border border-white/15 bg-white/10 text-white/40";   // estilo cuadrado pendiente

  return `<div class="${base} ${hecho ? verde : gris}">${id}</div>`; // monta el HTML del cuadradito
};

const htmlCuadritos = (ids, lista) =>                                // entrada: todos los ids + lista | salida: HTML
  ids.map((id) => htmlCuadrito(id, lista)).join("");                 // genera cada cuadrado y los junta en un string
