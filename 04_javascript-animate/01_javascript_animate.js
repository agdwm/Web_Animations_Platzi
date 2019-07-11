const $pelota = document.getElementById('pelota');

// element.animate(keyframes = [], option = {})
const animation = $pelota.animate([
  // from
  {
    transform: 'translateX(0)'
  },
  // to
  {
    transform: 'translateX(500px)' // 250
  }
],{
  duration: 1000,
  delay: 1000,
  direction: 'normal',
  easing: 'linear',
  iterations: Infinity, //=> iteration count: 'infinity'
  fill: 'forwards',
  iterationStart: .5, // = 50%
  // endDelay: 5000,
})
