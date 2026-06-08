// IMPORTACIÓN DE MÓDULOS
// (ninguna)

// DECLARACIÓN DE VARIABLES (DOM)
const formtexto = document.getElementById("formtexto");  // Formulario
const inputTexto = document.getElementById("texto");  // Campo de texto
const resultado = document.getElementById("resultado");  // Zona del resultado

// DECLARACIÓN DE FUNCIONES (INDEPENDIENTES / BIBLIOTECA)
const normalizarTexto = (valor) => String(valor ?? "").trim();  // Limpia el valor

const validarTextoObligatorio = (texto) => {  // Valida texto obligatorio
    const limpio = normalizarTexto(texto);  // Texto preparado
    const respuesta = { ok: true, mensaje: "" };  // Respuesta inicial

    if (limpio.length === 0) {  // Texto vacío
        respuesta.ok= false  // Hay error
        respuesta.mensaje="Escribe un texto."  // Aviso al usuario
    }  
    return respuesta;  // Resultado validación
};

const contarCaracteres = (texto) => normalizarTexto(texto).length;  // Total de caracteres

const procesarTexto = (texto) => {  // Lógica del ejercicio
    const validacion = validarTextoObligatorio(texto);  // Comprueba el texto
    const respuesta = { ok: true, mensaje: "" };  // Respuesta inicial

    if (!validacion.ok) {  // Validación fallida
        respuesta.ok= false  // Hay error
        respuesta.mensaje= validacion.mensaje  // Mensaje de error
    } else {  // Texto correcto
        respuesta.mensaje= `Caracteres: ${contarCaracteres(texto)}`  // Muestra el total
    }  
    return respuesta;  // Mensaje final
};

const vincularFormulario = ({ form, input, output, procesar }) => {  // Enlaza DOM y lógica
    form.addEventListener("submit", (event) => {  // Escucha el submit
      event.preventDefault();  // Evita recarga
      output.textContent = procesar(input.value).mensaje;  // Pinta resultado
    });
};

vincularFormulario({  // Inicia el programa
    form: formtexto,  // Formulario
    input: inputTexto,  // Input
    output: resultado,  // Salida
    procesar: procesarTexto,  // Función lógica
});
