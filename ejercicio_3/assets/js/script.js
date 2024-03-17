function pintar(element, tipoDeColor) {
     console.log(tipoDeColor);
     element.style.backgroundColor = tipoDeColor;
 }

let colorAzul = document.getElementById("Azul");
let colorRojo = document.getElementById("Rojo");
let colorVerde = document.getElementById("Verde");
let colorAmarillo = document.getElementById("Amarillo");


colorAzul.addEventListener("click", function(){
    pintar(colorAzul, 'black');
})

colorRojo.addEventListener("click", function(){
    pintar(colorRojo, 'black');
})

colorVerde.addEventListener("click", function(){
    pintar(colorVerde, 'black');
})

colorAmarillo.addEventListener("click", function(){
    pintar(colorAmarillo, 'black');
})

