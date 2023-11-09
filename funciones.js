//variables globales
const d = document;
// creamos arreglo de objetos y cada posicion tiene un objeto
let imgN1 = [
  { nombre: "pistacho", url: "imagenes/pistacho.jpg" },
  { nombre: "almendra", url: "imagenes/almendra.jpg" },
  { nombre: "cacao", url: "imagenes/cacao.jpg" },
  { nombre: "cebolla", url: "imagenes/cebolla.jpg" },
  { nombre: "tomate", url: "imagenes/tomate.jpg" },
  { nombre: "cafe", url: "imagenes/cafe.jpg" },
  { nombre: "pistacho", url: "imagenes/pistacho.jpg" },
  { nombre: "almendra", url: "imagenes/almendra.jpg" },
  { nombre: "cacao", url: "imagenes/cacao.jpg" },
  { nombre: "cebolla", url: "imagenes/cebolla.jpg" },
  { nombre: "tomate", url: "imagenes/tomate.jpg" },
  { nombre: "cafe", url: "imagenes/cafe.jpg" },
];
let tablero = d.querySelector(".tablero");
let nombreImg = [];
//para guardar el nombre
let imagenID = [];
//para guardar la posicion.

agregarImagenes();
//funcion para agregar imagenes al tablero, la funcion no recibe nada.//setAttribute("clase", "col-3") a continuacion dice le profe puros nodos.
//se hace un forEach para las imagenes
//a forEach le pasoun parametro, puedo pasar un segundo parametro que meindique la posicion.
function agregarImagenes() {
    // Recorrer con forEach las imágenes del array.
  imgN1.forEach((imagen, i) => {
    let div = d.createElement("div");
    //crear eti div.
    div.className = "col-3";
    //agregar clase col-3 al div.
    let img = d.createElement("img");
    //crear la etiqueta img
    img.className = "img-fluid altura-img";
    //agregar clase img-fluid a img.
    img.id = i;
    //enumerar img  medio de un id.Le agregamos la posicion.
    img.src = "imagenes/ocultar.jpg";
    //agregar la ubicacion de la imagen.
    img.addEventListener("click", mostrarImg);
    //agregar evento click a la img.
    div.appendChild(img); // el div le pasa laimagen al tablero
    tablero.appendChild(div);
    //agregar los divaltablero.
  });
}

//funcion para mostrar las imagenes al darle click, la fun mostrarImg destape laqueesta oculta.
function mostrarImg() {
  //obtener posicion de la imagen.
  let imgID = this.getAttribute("id");

  //alert("di clik" + imgID);

  this.src = imgN1[imgID].url;
  //con esta variable modifica la ruta (url) de la proxima imagen.

  nombreImg.push(imgN1[imgID].nombre);
  //guarda los nombres de la imagen

  imagenID.push(imgID);
  //guarda la posicion de la imagen.

  //detectar si semostraron 2 imagenes
  if (nombreImg.length == 2) {
    //luegode borranombreyIDdeimagenes
    //si esunminutoson 1000(8.12pm).
    setTimeout(compararImg, 100);
  }
}
  //funcion para comparar las imagenes mostradas
  function compararImg() {
    //se convierte en arrays pq le colocamos querySelectorAll
    let imagenesTablero = d.querySelectorAll(".tablero div img");

    if(nombreImg[0] == nombreImg[1]) {
        if(imagenID[0]!=imagenID[1]){
            alert("👌👌Adivinaste una imagen👌👌");
            imagenesTablero[imagenID[0]].src ="imagenes/ok.jpg";
            imagenesTablero[imagenID[1]].src ="imagenes/ok.jpg";
            //bloqueamos el evento a la imagen click y dispara la funcion mostrarImg 
            imagenesTablero[imagenID[0]].removeEventListener("click", mostrarImg);
            imagenesTablero[imagenID[1]].removeEventListener("click", mostrarImg);
        }else{
            alert("😜😜Debes seleccionar otra imagen.😜😜");
            imagenesTablero[imagen[0]].src = "imagenes/ocultar.jpg";
        }
    } else {
      alert("😢😢Fallaste las imagenes son diferentes😢😢");
      imagenesTablero[imagenID[0]].src ="imagenes/ocultar.jpg";
      imagenesTablero[imagenID[1]].src ="imagenes/ocultar.jpg";

    }
  
  //borranombreyIDdeimagenes
  nombreImg = [];
  imagenID = [];  
}