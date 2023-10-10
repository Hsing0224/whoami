const maskImg = document.getElementById('maskImg');
const showImg = document.getElementById('showImg');
const question = document.getElementById('question');
const whoami = document.getElementById('whoami');
const answer = document.getElementById('answer');
const button = document.getElementById('button');

function loadShow() {
  question.classList.add('before:scale-x-0');
  setTimeout(() => {
    whoami.classList.remove('opacity-0');
  }, 500);
}

function showWho() {
  maskImg.classList.add('opacity-0');
  showImg.classList.remove('opacity-0');

  whoami.classList.add('opacity-0');
  answer.classList.remove('opacity-0');
}

window.addEventListener('load', () => {
  loadShow();
});

button.addEventListener('click', () => {
  showWho();
  button.remove();
});