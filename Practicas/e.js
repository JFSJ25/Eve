// Obtener los elementos del DOM
const pantalla = document.querySelector(".pantalla");
const botones = document.querySelector(".botones");

// Declarar las variables para almacenar los valores
let primerOperando = "";
let segundoOperando = "";
let operadorActual = "";
let resultado = "";
let calculadoraEnCurso = false;

// Agregar el evento click al div con la clase botones
botones.addEventListener("click", function(evento) {
  // Obtener el botón que se presionó
  const boton = evento.target;
  // Obtener el atributo data-action del botón
  const accion = boton.dataset.action;
  // Obtener el contenido del botón
  const numero = boton.textContent;
  // Ejecutar una función según el atributo data-action
  switch (accion) {
    case "sumar":
    case "restar":
    case "multiplicar":
    case "dividir":
      seleccionarOperador(accion);
      break;
    case "decimal":
      agregarDecimal();
      break;
    case "borrar":
      borrar();
      break;
    case "calcular":
      calcular();
      break;
    default:
      agregarNumero(numero);
      break;
  }
});

// Función para realizar la operación matemática y mostrar el resultado
function calcular() {
  // Convertir los operandos a números
  primerOperando = parseFloat(primerOperando);
  segundoOperando = parseFloat(segundoOperando);
  // Verificar si hay algún operando inválido
  if (isNaN(primerOperando) || isNaN(segundoOperando)) {
    return;
  }
  // Realizar la operación según el operador actual
  switch (operadorActual) {
    case "sumar":
      resultado = primerOperando + segundoOperando;
      break;
    case "restar":
      resultado = primerOperando - segundoOperando;
      break;
    case "multiplicar":
      resultado = primerOperando * segundoOperando;
      break;
    case "dividir":
      resultado = primerOperando / segundoOperando;
      break;
    default:
      return;
  }
  // Mostrar el resultado en la pantalla
  pantalla.textContent = resultado;
  // Reiniciar los valores de las variables
  primerOperando = resultado;
  segundoOperando = "";
  operadorActual = "";
  calculadoraEnCurso = false;
}

// Función para limpiar la pantalla y las variables
function borrar() {
  // Mostrar un cero en la pantalla
  pantalla.textContent = "0";
  // Reiniciar los valores de las variables
  primerOperando = "";
  segundoOperando = "";
  operadorActual = "";
  resultado = "";
  calculadoraEnCurso = false;
}

// Función para agregar un número al operando actual y mostrarlo en la pantalla
function agregarNumero(numero) {
  // Verificar si la calculadora está en curso
  if (calculadoraEnCurso) {
    // Asignar el número al segundo operando
    segundoOperando += numero;
    // Mostrar el segundo operando en la pantalla
    pantalla.textContent = segundoOperando;
  } else {
    // Asignar el número al primer operando
    primerOperando += numero;
    // Mostrar el primer operando en la pantalla
    pantalla.textContent = primerOperando;
  }
}

// Función para agregar un punto decimal al operando actual y mostrarlo en la pantalla
function agregarDecimal() {
  // Verificar si la calculadora está en curso
  if (calculadoraEnCurso) {
    // Verificar si el segundo operando ya tiene un punto decimal
    if (!segundoOperando.includes(".")) {
      // Añadir el punto decimal al segundo operando
      segundoOperando += ".";
      // Mostrar el segundo operando en la pantalla
      pantalla.textContent = segundoOperando;
    }
  } else {
    // Verificar si el primer operando ya tiene un punto decimal
    if (!primerOperando.includes(".")) {
      // Añadir el punto decimal al primer operando
      primerOperando += ".";
      // Mostrar el primer operando en la pantalla
      pantalla.textContent = primerOperando;
    }
  }
}

// Función para seleccionar el operador y preparar la calculadora para el segundo operando
function seleccionarOperador(operador) {
    // Verificar si la calculadora está en curso
    if (calculadoraEnCurso) {
      // Calcular el resultado parcial
      calcular();
    }
    // Asignar el operador al operador actual
    operadorActual = operador;
    // Cambiar el estado de la calculadora a en curso
    calculadoraEnCurso = true;
  }