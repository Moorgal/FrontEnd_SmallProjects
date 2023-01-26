const btns = document.querySelectorAll('.btn');
const counter = document.getElementById('counter');

let count = 0;

btns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains('increase')) {
      count++;
    } else if (styles.contains('decrease')) {
      count--;
    } else {
      count = 0;
    }

    if (count > 0) {
      counter.style.color = 'green';
    }
    if (count < 0) {
      counter.style.color = 'red';
    }
    if (count === 0) {
      counter.style.color = 'black';
    }
    counter.textContent = count;
  });
});
