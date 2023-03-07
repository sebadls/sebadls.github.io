//Menu lateral
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu() {
  if (menu_visible == false) {
    //si esta oculto
    menu.style.display = "block";
    menu_visible = true;
  } else {
    menu.style.display = "none";
    menu_visible = false;
  }
}
//oculto el menu una vez que selecciono una opción
let links = document.querySelectorAll("nav a");
for (var x = 0; x < links.length; x++) {
  links[x].onclick = function () {
    menu.style.display = "none";
    menu_visible = false;
  };
}

//Creo las barritas de una barra particular identificada por su id
function crearBarra(id_barra) {
  for (i = 0; i <= 16; i++) {
    let div = document.createElement("div");
    div.className = "e";
    id_barra.appendChild(div);
  }
}

//selecciono todas las barras generales para luego manipularlas
let html = document.getElementById("html");
crearBarra(html);
let light = document.getElementById("light");
crearBarra(light);
let python = document.getElementById("python");
crearBarra(python);
let photoshop = document.getElementById("photoshop");
crearBarra(photoshop);
let sony = document.getElementById("sony");
crearBarra(sony);

//Ahora voy a guardar la cantidad de barritas que se van a ir pintando por cada barar
//para eso utilizo un arreglo, cada posiciòn pertenece a un elemento
//comienzan en -1 porque no tiene ninguna pintada al iniciarse
let contadores = [-1, -1, -1, -1, -1, -1];
//esta variable la voy a utilizar de bandera para saber si ya ejecuto la animación
let entro = false;

//función que aplica las animaciones de la habilidades
function efectoHabilidades() {
  var habilidades = document.getElementById("habilidades");
  var distancia_skills =
    window.innerHeight - habilidades.getBoundingClientRect().top;
  if (distancia_skills >= 300 && entro == false) {
    entro = true;
    const intervalHtml = setInterval(function () {
      pintarBarra(html, 10, 0, intervalHtml);
    }, 100);
    const intervallight = setInterval(function () {
      pintarBarra(light, 11, 1, intervallight);
    }, 100);
    const intervalPython = setInterval(function () {
      pintarBarra(python, 7, 2, intervalPython);
    }, 100);
    const intervalPhotoshop = setInterval(function () {
      pintarBarra(photoshop, 14, 3, intervalPhotoshop);
    }, 100);
    const intervalSony = setInterval(function () {
      pintarBarra(sony, 14, 4, intervalSony);
    }, 100);
  }
}

//lleno una barra particular con la cantidad indicada
function pintarBarra(id_barra, cantidad, indice, interval) {
  contadores[indice]++;
  x = contadores[indice];
  if (x < cantidad) {
    let elementos = id_barra.getElementsByClassName("e");
    elementos[x].style.backgroundColor = "#ff1c1c";
  } else {
    clearInterval(interval);
  }
}

//detecto el scrolling del mouse para aplicar la animación de la barra
window.onscroll = function () {
  efectoHabilidades();
};
