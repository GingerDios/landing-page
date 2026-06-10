var fotos =["imagenes/carrusel/OIP (1).webp", "imagenes/carrusel/OIP (2).webp", "imagenes/carrusel/OIP (3).webp"];
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