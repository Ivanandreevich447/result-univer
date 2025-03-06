import jsImage from './assets/jsImage.jpg'

console.log('Hello World!');

const body = document.querySelector('body')

const elementH = document.createElement('h1') 
elementH.textContent = 'I love JavaScript'

const jsImg = document.createElement('img')
jsImg.src = jsImage

body.append(elementH, jsImg)

console.log(jsImage);