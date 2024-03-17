let colorPorTecla;
document.addEventListener('keydown', function (event) {
    
    document.getElementById("key").style.backgroundColor = colorPorTecla;

    if (event.key === 'a') {
        colorPorTecla = 'pink';
    } else if (event.key === 's') {
        colorPorTecla = 'orange';
    } else if (event.key === 'd'){
        colorPorTecla = 'cyan';
    } else if (event.key === 'q') {
        crearDiv('purple');
    } else if (event.key === 'w'){
        crearDiv('gray');
    } else if (event.key === 'e' ){
        crearDiv('sienna');
    }
   
});

function crearDiv(color){

    let nuevoDiv = document.createElement('div');
    nuevoDiv.style.width = '200px';
    nuevoDiv.style.height = '200px';
    nuevoDiv.style.border = '4px solid black';
    nuevoDiv.style.backgroundColor = color;

    document.body.appendChild(nuevoDiv);
}
