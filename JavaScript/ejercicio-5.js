var cont = 15;
var color;

function crear() {
  var creardiv = document.createElement("div");
  cont++;
  creardiv.innerHTML = cont;
  document.getElementById("texto").appendChild(creardiv);
}

function cambiarColor(texto) {
  color = document.getElementById(texto);
  if (color.style.color = "#1e9b1e") {
  }
}