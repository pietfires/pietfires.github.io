const greenButton = document.getElementById('green-button');
const redButton = document.getElementById('red-button');
const container = document.querySelector('.container');

greenButton.addEventListener('click', (event) => {
  container.classList.add('green');
    event.stopPropagation();

});

redButton.addEventListener('click', (event) => {
  container.classList.add('red');
    event.stopPropagation();

});

container.addEventListener('click', () => {
  container.classList.remove('green');
  container.classList.remove('red');
});
