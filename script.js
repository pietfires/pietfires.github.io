const greenButton = document.getElementById('green-button');
const redButton = document.getElementById('red-button');
const container = document.querySelector('.container');

greenButton.addEventListener('click', () => {
  container.classList.add('green');
});

redButton.addEventListener('click', () => {
  container.classList.add('red');
});

container.addEventListener('click', () => {
  container.classList.remove('green');
  container.classList.remove('red');
});
