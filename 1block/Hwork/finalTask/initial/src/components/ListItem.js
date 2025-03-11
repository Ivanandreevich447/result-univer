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

    const $amountText = document.createElement('b')
    $amountText.textContent = `  - $${this.state.amount}`;

    this.$rootElement.appendChild($amountText)

  }




}
