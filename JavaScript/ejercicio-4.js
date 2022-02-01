window.onload = function () {
    var imagen = document.getElementById("imagen");
    imagen.addEventListener("mouseover", cambiarImagen);
    imagen.addEventListener("mouseout", imagenInicial);
  
    function cambiarImagen() {
      this.setAttribute(
        "src",
        "https://laverdadnoticias.com/__export/1636991832260/sites/laverdad/img/2021/11/15/attack_on_titan_temporada_4_parte_2_eren_jaeger.jpeg_924034112.jpeg"
      );
    }
  
    function imagenInicial() {
      this.setAttribute(
        "src",
        "https://i.pinimg.com/originals/c4/cb/57/c4cb5734c7c94d3413efdaa3bca09a6d.jpg"
      );
    }
  };