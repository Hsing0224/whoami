const backgroundMusic = document.getElementById('backgroundMusic');
const maskImg = document.getElementById('maskImg');
const showImg = document.getElementById('showImg');
const title = document.getElementById('title');
const question = document.getElementById('question');
const answer = document.getElementById('answer');
const whoami = document.getElementById('whoami');
const button = document.getElementById('button');

function loadShow() {
  // backgroundMusic.play();
  setTimeout(() => {
    title.classList.add('before:scale-x-0');
  }, 3000);
  setTimeout(() => {
    whoami.classList.remove('opacity-0');
    button.classList.remove('opacity-0');
  }, 3500);
}

function showWho() {
  maskImg.classList.add('opacity-0');
  showImg.classList.remove('opacity-0');

  question.classList.add('opacity-0');
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