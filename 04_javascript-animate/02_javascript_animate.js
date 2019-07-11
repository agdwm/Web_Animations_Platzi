// script
const $ovni = document.getElementById('ovni');

const animation = $ovni.animate([
  { /*from*/
    transform: 'translateX(0)'
  },
  {
    transform: 'translateX(100vw)'
  }
],{
  duration: 3000,
  delay: 100,
  easing: 'linear',
  direction: 'normal',
  iterations: Infinity,
  fill: 'forwards',
  iterationStart: .5
});

// botton
const $playButton = document.getElementById('play');
const $pauseButton = document.getElementById('pause');
const $stopButton = document.getElementById('stop');
const $reverseButton = document.getElementById('reverse');
// const $finishButton = document.getElementById('finish');

// event
$playButton.addEventListener('click', function (event) {
  animation.play();
});

$pauseButton.addEventListener('click', function (event) {
  animation.pause();
});

$stopButton.addEventListener('click', function (event) {
  animation.cancel();
});

$reverseButton.addEventListener('click', function (event) {
  animation.reverse();
});

// $finishButton.addEventListener('click', function (event) {
//   animation.finish();
// });
