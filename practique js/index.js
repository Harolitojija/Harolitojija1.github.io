

// Obtener referencia al botón y al párrafo donde se mostrará el resultado
var sumButton = document.getElementById("sumButton");
var resultParagraph = document.getElementById("result0");

// Variable para almacenar el valor actual
var sum1 = 0;

// Agregar un event listener al botón
sumButton.addEventListener("click", function() {
  // Aumentar el valor en 5 cada vez que se presione el botón
  sum1 += 5;
  
  // Actualizar el texto en el párrafo de resultado
  resultParagraph.textContent = sum1;
});





