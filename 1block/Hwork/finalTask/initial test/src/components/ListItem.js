import { Component } from '../core/Component';

export class ListItem extends Component {
  setup(props) {

    //18
this.state =  {
id : Date.now(),
date : new Date().toLocaleString(),
amount : this.props

}
//18
    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'donate-item';
    this.$rootElement.textContent =  `${this.state.date}`;

    //тут мне как-то надо положить дату создания и сумму в элементы дома
    const $amountText = document.createElement('b')
    $amountText.textContent = `  - $${this.state.amount}`;
console.log(this.state);


    this.$rootElement.appendChild($amountText)

  }




}
