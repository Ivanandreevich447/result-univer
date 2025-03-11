import { Component } from '../core/Component';

export class List extends Component {
  setup() {
    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'donates-container';

    const $heading = document.createElement('h1');
    $heading.classList.add('donates-container__title')
    $heading.textContent = 'Список донатов'

    // тут новые донаты будут храниться
    this.$listContainer = document.createElement('div') 
    this.$listContainer.classList.add('donates-container__donates')

    this.$rootElement.appendChild($heading)
    this.$rootElement.append(this.$listContainer)

  }

  //19
  addItem(item) {
    
    this.$listContainer.appendChild(item.$rootElement)
    console.log("Добавляем элемент:", item);
  }
}
