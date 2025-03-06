import { Component } from '../core/Component';

export class ListItem extends Component {
  setup(props) {

    //18
this.state =  {
id : Date.now(),
date : new Date(),
amount : props.amount

}
//18
    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'donate-item';
    this.$rootElement.textContent = this.state.id, this.state.date

    //тут мне как-то надо положить дату создания и сумму в элементы дома
    const $elementB = document.createElement('b')
    $elementB.textContent = this.state.amount


    this.$rootElement.appendChild($dataText)
    this.$rootElement.appendChild($amountText)

  }




}
