var fotos = ["foto1.jpg", "foto2.jpg", "foto3.jpg"];
var posicion = 0;

function siguiente() {
    posicion++;

    if (posicion > 2) {
        posicion = 0;
    }

    document.getElementById("foto").src = fotos[posicion];
}

function anterior() {
    posicion--;

    if (posicion < 0) {
        posicion = 2;
    }

    document.getElementById("foto").src = fotos[posicion];
}