import questionAudioSrc from './pokemon.mp3';
import answerSrc from './answer.mp3';

function loadHandler() {
  const welcome = document.getElementById('welcome');
  const welcomeButton = document.getElementById('welcomeButton');
  // const maskImg = document.getElementById('maskImg');
  // const showImg = document.getElementById('showImg');
  const img = document.getElementById('img');
  const title = document.getElementById('title');
  const question = document.getElementById('question');
  const answer = document.getElementById('answer');
  const whoami = document.getElementById('whoami');
  const button = document.getElementById('button');
  const questionAudio = document.createElement('audio');
  questionAudio.id = 'welcomeBackgroundMusic';
  questionAudio.src = questionAudioSrc;
  document.body.appendChild(questionAudio);
  const answerAudio = document.createElement('audio');
  answerAudio.id = 'answerBackgroundMusic';
  answerAudio.src = answerSrc;
  document.body.appendChild(answerAudio);
  const welcomeBackgroundMusic = document.getElementById('welcomeBackgroundMusic');
  const answerBackgroundMusic = document.getElementById('answerBackgroundMusic');

  function questionShow() {
    setTimeout(() => {
      title.classList.add('before:scale-x-0');
    }, 3000);
    setTimeout(() => {
      whoami.classList.remove('opacity-0');
      button.classList.remove('opacity-0');
    }, 3500);
  }

  function showWho() {
    img.classList.remove('brightness-0');

    whoami.classList.add('opacity-0');
    setTimeout(() => {
      question.classList.add('opacity-0');
      answer.classList.remove('opacity-0');
    }, 3000)
  }

  welcomeButton.addEventListener('click', () => {
    welcome.classList.add('opacity-0', 'pointer-events-none');
    welcomeBackgroundMusic.play();
    questionShow();
  });

  button.addEventListener('click', () => {
    showWho();
    button.remove();
    answerBackgroundMusic.play();
  });
}

window.addEventListener('load', loadHandler);