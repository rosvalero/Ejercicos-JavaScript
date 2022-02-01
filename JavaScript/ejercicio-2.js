let word = prompt(
  " Ingrese alguna de las siguientes palabras para conocer su traducción al inglés: casa, mesa, perro o gato "
);

switch (word) {
  case "casa":
    alert("house");
    break;

  case "mesa":
    alert("table");
    break;

    case "perro":
    alert("dog");
    break;

    case "gato":
    alert("gato");
    break;

  default:
    alert("La palabra que ingresó no se encuentra en el sistema.");
    break;
}
