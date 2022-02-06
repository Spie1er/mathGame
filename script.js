'use strict';

// Declaring Variables from DOM
const first = document.querySelector('.element-text--1');
const second = document.querySelector('.element-text--2');
const third = document.querySelector('.element-text--3');
const fourth = document.querySelector('.element-text--4');
const guess = document.querySelector('.guess');
const answerBox = document.getElementById('answer-box');
const btnCheck = document.querySelector('.btn-check');
const btnNew = document.querySelector('.btn-new');
const emojiPic = document.querySelector('.emoji-pic');
const message = document.querySelector('.hint-text');
const answers = document.querySelector('.answers-value');

// Declaring variables before initialization
let a = 0;
let b = 0;
let c = 0;
let d = 0;
let score = 0;

// Initial State values
const initState = function () {
  // Getting Random and Calculate Answer
  a = Math.trunc(Math.random() * 5) + 1;
  b = Math.trunc(Math.random() * 5) + 1;
  c = Math.trunc(Math.random() * 11);
  d = a * b + c;
  first.textContent = a;
  second.textContent = b;
  third.textContent = c;

  // Initializing after correct answer
  message.textContent = 'ჩაწერე პასუხი და შეამოწმე ღილაკით';
  answerBox.classList.remove('correct');
  answerBox.classList.remove('wrong');
  btnCheck.classList.remove('hidden');
  emojiPic.src = 'emoji-2.png';
  guess.value = '';
  fourth.textContent = '';
  guess.classList.remove('cleard');
};

// Initialization of state
initState();

btnCheck.addEventListener('click', function () {
  if (Number(guess.value) === d) {
    // When the answer is Correct
    message.textContent = 'ყოჩააააღ!!!';
    answerBox.classList.remove('wrong');
    answerBox.classList.add('correct');
    btnCheck.classList.add('hidden');
    emojiPic.src = 'emoji-1.png';
    fourth.textContent = guess.value;
    guess.classList.add('cleard');
    score++;
    answers.textContent = score;
  } else if (Number(guess.value) > d) {
    // When the answer is more than correct one
    message.textContent = 'ძალიან მაღალია, კიდევ სცადე';
    emojiPic.src = 'emoji-0.png';
    answerBox.classList.add('wrong');
  } else if (!Number(guess.value)) {
    // When the answer field is empty
    message.textContent = 'პასუხი ცარიელია';
    emojiPic.src = 'emoji-0.png';
    answerBox.classList.add('wrong');
  } else if (Number(guess.value) < d) {
    // When the answer is less than correct
    message.textContent = 'ძალიან დაბალია, კიდევ სცადე';
    emojiPic.src = 'emoji-0.png';
    answerBox.classList.add('wrong');
  }
});

btnNew.addEventListener('click', initState);
