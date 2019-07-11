const $hideButtons = document.getElementsByClassName('hide-modal');
const $modal = document.getElementById('modal');
const $overlay = document.getElementById('overlay');

const hideModal = () => {
  $modal.style.animation = 'modalOut .8s forwards';
};

const hideOverlay = () => {
  $overlay.classList.remove('is-active');
};

for (let el of $hideButtons) {
  el.addEventListener('click', e => {
    e.preventDefault();
    hideModal();
    hideOverlay();
  });
}

$overlay.addEventListener('click', e => {
  e.preventDefault();
  hideModal();
  hideOverlay();
});
