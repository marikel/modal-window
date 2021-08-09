'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const BtnCloseModal = document.querySelector('.close-modal');
const BtnsOpenModal = document.querySelectorAll('.show-modal');

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
const OpenModel = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < BtnsOpenModal.length; i++)
  BtnsOpenModal[i].addEventListener('click', OpenModel);

BtnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
