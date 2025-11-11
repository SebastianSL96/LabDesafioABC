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