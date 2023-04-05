const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

let initialValue = 0;

window.addEventListener('DOMContentLoaded', function () {
  showPerson(initialValue);
});

function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

nextBtn.addEventListener('click', function () {
  initialValue++;
  if (initialValue > reviews.length - 1) {
    initialValue = 0;
  }
  showPerson(initialValue);
});

prevBtn.addEventListener('click', function () {
  initialValue--;
  if (initialValue < 0) {
    initialValue = reviews.length - 1;
  }
  showPerson(initialValue);
});
randomBtn.addEventListener('click', function () {
  initialValue = Math.floor(Math.random() * reviews.length);
  showPerson(initialValue);
});
