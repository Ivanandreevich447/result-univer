import './index.css';
import jsImage from './assets/jsimage.jpg'


const body = document.querySelector('body')

const jsImgHtml = document.createElement('img')
jsImgHtml.src = jsImage

body.append(jsImgHtml)
