const $hideButtons = document.getElementsByClassName('hide-modal');
const $modal = document.getElementById('modal');
const $overlay = document.getElementById('overlay');
const $showButton = document.getElementById('trigger-modal');


const disableButton = (btn) => {
  console.log(btn)
  btn.classList.add('is-hidden')
}

const showModal = (modal) => {
  modal.style.animation = 'modalIn .8s forwards';
  modal.classList.add('is-visible');
};

const hideModal = (modal) => {
  modal.style.animation = 'modalOut .8s forwards';
};

const hideOverlay = () => {
  $overlay.classList.remove('is-active');
};

$showButton.addEventListener('click', e => {
  e.preventDefault();
  disableButton($showButton);
  showModal($modal);
});

for (let el of $hideButtons) {
  el.addEventListener('click', e => {
    e.preventDefault();
    hideModal($modal);
    hideOverlay();
  });
}

$overlay.addEventListener('click', e => {
  e.preventDefault();
  hideModal($modal);
  hideOverlay();
});
