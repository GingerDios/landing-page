var fotos =["imagenes/carrusel/banner1.png","imagenes/carrusel/banner2.png","imagenes/carrusel/banner3.png","imagenes/carrusel/banner4.png","imagenes/carrusel/banner5.png"];
var posicion = 0;

function siguiente() {
    posicion++;

    if (posicion > 4) {
        posicion = 0;
    }

    document.getElementById("foto").src = fotos[posicion];
}

function anterior() {
    posicion--;

    if (posicion < 0) {
        posicion = 4;
    }

    document.getElementById("foto").src = fotos[posicion];
}