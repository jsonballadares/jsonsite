let counter = 0;
const counterElement = document.getElementById('counter');
const button = document.getElementById('increment');

button.addEventListener('click', () => {
    counter++;
    counterElement.textContent = counter;
});