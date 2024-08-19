const options = document.querySelector('.options');

options.addEventListener('click', (e) => {
  if (e.target.matches('input[type="radio"]')) {
    options.classList.add('selected');
  }
});
