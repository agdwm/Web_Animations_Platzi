const $like = document.getElementById('like')

$like.addEventListener('click', (e) => {
  e.preventDefault();
  console.log(e);
  $like.classList.toggle('is-active');
})
