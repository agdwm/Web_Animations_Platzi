//DETECTAR EVENTOS DE ANIMACIONES CSS DESDE JS
const $cuadrado = document.getElementById('cuadrado');
// $cuadrado.addEventListener('nombreEvento', 'que hago cuando en evento ocurra');

// animationend => detectar por js cuando finaliza un evento. No funciona con animation con animation-iteration-count: infinite
// animationstart => detectar por js cuando comienza un evento.
// animationcancel =>
// animationiteration => detectar cuando se produce un cambio en nuestra animación


$cuadrado.addEventListener('animationend', (e) => {
  // console.log(e.animationName);
  if (e.animationName === 'rebote') {
    $cuadrado.style.animationName = 'cuadrado escalera';
    $cuadrado.style.animationDuration = '3s';
  }
});

