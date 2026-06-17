const tarjeta = document.querySelectorAll('.tarjeta');

tarjeta.forEach(contenido => {
    contenido.addEventListener('click', () => {

        const tarjetacontenido = contenido.querySelector('.tarjetacontenido');
        

            tarjetacontenido.classList.toggle('abierto');
            const cardspan = tarjetacontenido.querySelector('span');
        }
    )});
