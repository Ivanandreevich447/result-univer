import { Component } from '../core/Component';
import { Form } from './Form';
import { List } from './List';
import { ListItem } from './ListItem';

export class App extends Component {
  setup(props) {
    this.state = {
    total : 0,
      donates : [],
    }


    // console.log(typeof(this.state.total));
    // console.log(typeof(amount));

    this.donateList = null; 
    // this.donateList = new List(this);

    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'app';

    const $title = document.createElement('h1')
    $title.classList.add ('total-amount')
    $title.textContent = 'Итого: $'

    this.$total = document.createElement('span')
    this.$total.textContent = this.state.total


    this.$rootElement.appendChild($title)
    $title.append(this.$total)

    // const donateForm = new Form({ onSubmit: this.onItemCreate.bind(this) });
    // this.$rootElement.appendChild(donateForm.$rootElement);
    // const donateList = new List({ onSubmit: this.onItemCreate.bind(this) });
    // this.$rootElement.appendChild(donateList.$rootElement);


    this.donateList = new List();
    this.$rootElement.appendChild(this.donateList.$rootElement);
  
    // Создаю форму и передаю обработчик onItemCreate
    const donateForm = new Form({ onSubmit: this.onItemCreate.bind(this) });
    this.$rootElement.appendChild(donateForm.$rootElement);
  }
  


  onItemCreate(amount) {
const numberAmount = Number(amount)

    //17
  const item = new ListItem(numberAmount)
  this.state.donates.push(item)

  //22
  this.state.total += numberAmount;

  this.$total.textContent = this.state.total;

  console.log(this.state.donates);

//21
console.log("Добавляем item:", item);
console.log("this.donateList:", this.donateList);
console.log("Обновлённый total:", this.state.total);

  if (this.donateList) {
    this.donateList.addItem(item);
  } else {
    console.error("Ошибка: this.donateList не определён!");
  }
  }

  
}
// const app = new App();



