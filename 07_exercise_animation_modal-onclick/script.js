const $hideButtons = document.getElementsByClassName('hide-modal');
const $modal = document.getElementById('modal');
const $overlay = document.getElementById('overlay');
const $showButton = document.getElementById('show-modal');

const hideModal = () => {
  $modal.style.animation = 'modalOut .8s forwards';
};

const showModal = () => {
  $modal.style.animation = 'modalIn .8s forwards';
};

const hideOverlay = () => {
  $overlay.classList.remove('is-active');
};

$showButton.addEventListener('click', e => {
  e.preventDefault();
  showModal();
});

for (let el of $hideButtons) {
  el.addEventListener('click', e => {
    e.preventDefault();
    // hideModal();
    hideOverlay();
  });
}

$overlay.addEventListener('click', e => {
  e.preventDefault();
  // hideModal();
  hideOverlay();
});
