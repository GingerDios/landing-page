function actualizarContador() {
  const ahora = new Date();
  const navidad = new Date(ahora.getFullYear(), 11, 25);

  if (ahora > navidad) {
    navidad.setFullYear(navidad.getFullYear() + 1);
  }

  const diff = navidad - ahora;

  const dias     = Math.floor(diff / (1000 * 60 * 60 * 24));
  const horas    = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutos  = Math.floor((diff / (1000 * 60)) % 60);
  const segundos = Math.floor((diff / 1000) % 60);

  document.getElementById("dias").textContent     = String(dias).padStart(2, "0");
  document.getElementById("horas").textContent    = String(horas).padStart(2, "0");
  document.getElementById("minutos").textContent  = String(minutos).padStart(2, "0");
  document.getElementById("segundos").textContent = String(segundos).padStart(2, "0");
}

actualizarContador();
setInterval(actualizarContador, 1000);

