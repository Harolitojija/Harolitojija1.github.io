
// Obtener referencia al botón y al párrafo donde se mostrará el resultado
var sumButton1= document.getElementById("sumButton1");
var result10Paragraph = document.getElementById("result10");

// Variable para almacenar el valor actual y el estado de la suma
var sum = 0;
var isSumming = false;

// Función para realizar la suma
function performSum() {
  sum += 5;
 result10Paragraph.textContent = sum;
}

// Función para alternar entre la suma y la detención
function toggleSum() {
  if (isSumming) {
    isSumming = false;
    sumButton1.textContent = "Presiona para sumar";
  } else {
    isSumming = true;
    sumButton1.textContent = "Presiona para detener";
    performSum();
    startSumLoop();
  }
}
// Función recursiva para realizar la suma repetidamente mientras isSumming sea verdadero
function startSumLoop() {
  if (isSumming) {
    performSum();
    setTimeout(startSumLoop, 0); // Llamada a la función después de un retraso mínimo
  }
}
// Agregar un event listener al botón para alternar entre la suma y la detención
sumButton1.addEventListener("click", toggleSum);




