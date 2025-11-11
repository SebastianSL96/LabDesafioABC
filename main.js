
const colores = ["green", "blue", "red"];

function colorAleatorio() {
  return colores[Math.floor(Math.random() * colores.length)];
}


function cambiarColores(elemento) {
  let colorFondo = colorAleatorio();
  let colorTexto = colorAleatorio();
  let colorBorde = colorAleatorio();

  elemento.style.backgroundColor = colorFondo;
  elemento.style.color = colorTexto;
  elemento.style.borderColor = colorBorde;
}
s
document.addEventListener("DOMContentLoaded", () => {
  const titulos = document.querySelectorAll("h5");

  titulos.forEach(h5 => {
    h5.addEventListener("click", () => {
      cambiarColores(h5.parentElement);
    });
  });
});


// Cambia fondo y texto a 3 colores aleatorios cuando se hace click
function cambiarColores(elemento) {
  // Genera 3 colores hexadecimales aleatorios
  let color1 = getRandomColor();
  let color2 = getRandomColor();
  let color3 = getRandomColor();
  // Aplica los colores al background, borde y texto del card
  elemento.style.backgroundColor = color1;
  elemento.style.borderColor = color2;
  elemento.style.color = color3;
}
// Función básica para generar color aleatorio
function getRandomColor() {
  
  let color = "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, "0");
  return color;
}
// Cambia fondo y texto a 3 colores aleatorios cuando se hace click
