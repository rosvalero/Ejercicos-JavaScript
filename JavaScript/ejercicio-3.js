let nombre = prompt("Ingrese su nombre");
alert("¡Bienvenido a Pizza By The Ocean " + nombre + "!");
alert(
  "Indicación: Por favor respetar las mayúsculas, espacios y carácteres especiales de las opciones."
);

let tamaño = prompt("¿Qué pizza desea ordenar: Pizza Personal, Pizza Mediana o Pizza Familiar? (Pizza Personal / Pizza Mediana / Pizza Familiar)");

switch (tamaño) {
  case "Pizza Personal":
    break;

  case "Pizza Mediana":
    break;

  case "Pizza Familiar":
    break;

  case "no":
    alert("Su pedido ha sido cancelado. ¡Vuelva pronto!");
    break;

  default:
    break;
}

if (tamaño === "Pizza Personal") {
  var sabor = prompt(
  "¿Desea su pizza de Pollo & Champiñones, Hawaiana o Carnes? (Pollo & Champiñones / Hawaiana / Carnes)"
);
} else if (tamaño === "Pizza Mediana") {
  var sabor2 = prompt("¿Desea su pizza de Mexicana o Criolla? (Mexicana / Criolla)");
} else if (tamaño === "Pizza Familiar") {
  var sabor3 = prompt("¿Desea su pizza Vegetariana o Carne y Pollo (Vegetariana / Carne y Pollo");
}


if (tamaño === "Pizza Personal" && sabor === "Pollo & Champiñones") {
  var ingpc = prompt("¿Desea Con Queso o Sin Queso? (Con Queso / Sin Queso)");
} else if (tamaño === "Pizza Personal" && sabor === "Hawaiana") {
  var ingh = prompt("¿Desea Sin Piña o Sin Jamón? (Sin Piña / Sin Jamón)");
} else if (tamaño === "Pizza Personal" && sabor === "Carnes") {
  var ingc = prompt("¿Desea Sin Salami o Con Queso? (Sin Salami / Con Queso)");
}

if (tamaño === "Pizza Personal" && sabor === "Pollo & Champiñones" && ingpc === "Con Queso"
) {
  alert(
    "Su pedido es una Pizza Personal de Pollo & Champiñones con Queso. ¡Gracias por su compra, vuelva pronto!"
  );
} else if (tamaño === "Pizza Personal" && sabor === "Pollo & Champiñones" &&
  ingpc === "Sin Queso"
) {
  var acomppc = prompt("¿Desea Con Salsa o Con Borde de Bocadillo? (Con Salsa / Con Borde de Bocadillo)");
}

if (tamaño === "Pizza Personal" && sabor === "Pollo & Champiñones" && ingpc === "Sin Queso" && acomppc === "Con Salsa") {
  alert(
    "Su pedido es una Pizza Personal de Pollo & Champiñones sin Queso y con Salsa. ¡Gracias por su compra, vuelva pronto!"
  );
} else if (tamaño === "Pizza Personal" && sabor === "Pollo & Champiñones" && ingpc === "Sin Queso" && acomppc === "Con Borde de Bocadillo") {
  alert(
    "Su pedido es una Pizza Personal de Pollo & Champiñones sin Queso y con Borde de Bocadillo. ¡Gracias por su compra, vuelva pronto!"
  );
} else if (tamaño === "Pizza Personal" && sabor === "no" || ingpc === "no" || acomppc === "no") {
  alert("Su pedido ha sido cancelado. ¡Vuelva pronto!");
}

if (tamaño === "Pizza Personal" && sabor === "Hawaiana" &&
  ingh === "Sin Piña"
) {
  alert(
    "Su pedido es una Pizza Personal Hawaiana sin Piña. ¡Gracias por su compra, vuelva pronto!"
  );
} else if (tamaño === "Pizza Personal" &&
  sabor === "Hawaiana" &&
  ingh === "Sin Jamón"
) {
  var acomph = prompt("¿Desea Sin Salami? (Sin Salami / no)");
}

if (tamaño === "Pizza Personal" &&
sabor === "Hawaiana" && ingh === "Sin Jamón" && acomph === "Sin Salami") {
  alert(
    "Su pedido es una Pizza Personal Hawaiana sin Jamón y sin Salami. ¡Gracias por su compra, vuelva pronto!"
  );
} else if (tamaño === "Pizza Personal" &&
  sabor === "no" ||
  ingh === "no" ||
  acomph === "no"
) {
  alert("Su pedido ha sido cancelado. ¡Vuelva pronto!");
}

if (
  tamaño === "Pizza Personal" &&
  sabor === "Carnes" &&
  ingc === "Sin Salami"
) {
  var acompc = prompt("¿Desea Con Cabano? (Con Cabano / no)");
}else if (
  tamaño === "Pizza Personal" &&
  sabor === "Carnes" &&
  ingc === "Con Queso"
) {
  alert(
    "Su pedido es una Pizza Personal de Carnes con Queso. ¡Gracias por su compra, vuelva pronto!"
  );
}

if (
  tamaño === "Pizza Personal" &&
  sabor === "Carnes" &&
  ingc === "Sin Salami" &&
  acompc === "Con Cabano"
) {
  alert(
    "Su pedido es una Pizza Personal de Carnes sin Salami y con Cabano. ¡Gracias por su compra, vuelva pronto!"
  );
} else if (
  tamaño === "Pizza Personal" && sabor === "no" ||
  ingc === "no" ||
  acompc === "no"
) {
  alert("Su pedido ha sido cancelado. ¡Vuelva pronto!");
}

if (tamaño === "Pizza Mediana" && sabor2 === "Mexicana") {
  var ingm = prompt("¿Desea Con Nachos o Sin Nachos? (Con Nachos / Sin Nachos)");
} else if (tamaño === "Pizza Mediana" && sabor2 === "Criolla") {
  var ingcr = prompt("¿Desea Con Maíz o Sin Maíz? (Con Maíz / Sin Maíz)");
}

if (tamaño === "Pizza Mediana" && sabor2 === "Mexicana" &&
  ingm === "Con Nachos"
) {
  alert(
    "Su pedido es una Pizza Mediana Mexicana con Nachos. ¡Gracias por su compra, vuelva pronto!"
  );
} else if (tamaño === "Pizza Mediana" && sabor2 === "Mexicana" &&
  ingm === "Sin Nachos"
) {
  var acompm = prompt("¿Desea con Extra Guacamole? (Extra Guacamole / no");
}

if (tamaño === "Pizza Mediana" && sabor2 === "Mexicana" &&
ingm === "Sin Nachos" &&
  acompm === "Extra Guacamole"
) {
  alert(
    "Su pedido es una Pizza Mediana Mexicana sin Nachos con Extra Guacamole. ¡Gracias por su compra, vuelva pronto!"
  );
} else if (tamaño === "Pizza Mediana" &&
  sabor2 === "no" ||
  ingm === "no" ||
  acompm === "no"
) {
  alert("Su pedido ha sido cancelado. ¡Vuelva pronto!");
}

if (tamaño === "Pizza Mediana" && sabor2 === "Criolla" && ingcr === "Con Maíz") {
  alert(
    "Su pedido es una Pizza Mediana Criolla con Maíz. ¡Gracias por su compra, vuelva pronto!"
  );
} else if (tamaño === "Pizza Mediana" && sabor2 === "Criolla" &&
  ingcr === "Sin Maíz"
) {
  var acompc2 = prompt("¿Desea Con Extra Carne Molida o Con Queso? (Extra Carne Molida / Con Queso)");
}

if (tamaño === "Pizza Mediana" && sabor2 === "Criolla" &&
ingcr === "Sin Maíz" &&
  acompc2 === "Extra Carne Molida"
) {
  alert(
    "Su pedido es una Pizza Mediana Criolla Sin Maíz con Extra Carne Molida. ¡Gracias por su compra, vuelva pronto!"
  );
} else if (tamaño === "Pizza Mediana" && sabor2 === "Criolla" &&
ingcr === "Sin Maíz" &&
  acompc2 === "Con Queso"
) {
  alert(
    "Su pedido es una Pizza Mediana Criolla Sin Maíz con Queso. ¡Gracias por su compra, vuelva pronto!"
  );
} else if (tamaño === "Pizza Mediana" &&
sabor2 === "no" ||
ingcr === "no" ||
acompc2 === "no"
) {
alert("Su pedido ha sido cancelado. ¡Vuelva pronto!");
}

if (tamaño === "Pizza Familiar" && sabor3 === "Vegetariana") {
  var ingv = prompt("¿Desea Con Queso o Sin Queso? (Con Queso / Sin Queso)");
} else if (tamaño === "Pizza Familiar" && sabor3 === "Carne y Pollo") {
  var ingcp = prompt("¿Desea Adición de Salchicha o Adición de Champiñones? (Adición de Salchicha / Adición de Champiñones)");
}

if (tamaño === "Pizza Familiar" && sabor3 === "Vegetariana" && ingv === "Con Queso") {
  alert("Su pedido es una Pizza Familizar Vegetariana con Queso. ¡Gracias por su compra, vuelva pronto!");
} else if (tamaño === "Pizza Familiar" && sabor3 === "Vegetariana" && ingv === "Sin Queso") {
  alert("Su pedido es una Pizza Familizar Vegetariana sin Queso. ¡Gracias por su compra, vuelva pronto!");
}

if (tamaño === "Pizza Familiar" && sabor3 === "Carne y Pollo" && ingcp === "Adición de Salchicha") {
  alert("Su pedido es una Pizza Familizar de Carne y Pollo con adición de Salchicha. ¡Gracias por su compra, vuelva pronto!");
} else if (tamaño === "Pizza Familiar" && sabor3 === "Carne y Pollo" && ingcp === "Adición de Champiñones") {
  alert("Su pedido es una Pizza Familizar de Carne y Pollo con adición de Champiñones. ¡Gracias por su compra, vuelva pronto!");
} else if (tamaño === "Pizza Familiar" && sabor3 === "no" || ingv === "no" || ingcp === "no") {
  alert("Su pedido ha sido cancelado. ¡Vuelva pronto!");
}
