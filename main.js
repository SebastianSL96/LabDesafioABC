
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

