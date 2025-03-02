import getRandomColor from '../src/utils';

export default function initApp() {
console.log('Hello World!');

const body = document.querySelector('body')
const btnColor = document.createElement('button')
btnColor.classList.add('button')
btnColor.textContent = 'Изменить текст страницы'

body.append(btnColor)


btnColor.addEventListener('click', () => {

const randomColor = getRandomColor()

body.style.backgroundColor = randomColor


body.style.innerHTML = ''
console.log(randomColor);
} )
}

