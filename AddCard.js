console.log('Add your Card Please!');

alert('Test Server!');

const inputElement = document.querySelector('.input');
const buttonElement = document.querySelector('.button');
const paraElement = document.querySelector('.paragraft');

buttonElement.addEventListener('click' ,onClick);

function onClick() {
    console.log('Compleate!')
    paraElement.innerHTML = '';
    const result = inputElement.value * 3 / 4;
    if(result) {
        paraElement.innerHTML = result;
    };
    inputElement.value = 0;
};