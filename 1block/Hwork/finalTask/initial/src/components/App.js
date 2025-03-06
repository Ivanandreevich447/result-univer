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

    this.donateList = null; 
    this.donateList = new List(this);
    
    //20
    // this.donateList = this.state.donates
    this.donateList = donateList

    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'app';

    const $title = document.createElement('h1')
    $title.classList.add ('total-amount')
    $title.textContent = 'Итого: $'

    this.$total = document.createElement('span')
    this.$total.textContent = this.state.total
    console.log(this.state.total);

    this.$rootElement.appendChild($title)
    $title.append(this.$total)


    this.$total

    //15 20
    const donateForm = new Form();
    this.$rootElement.appendChild(donateForm.$rootElement);
    const donateList = new List();
    this.$rootElement.appendChild(donateList.$rootElement);


    
    
//16задание
    this.onItemCreate = this.onItemCreate.bind(this)
    this.form = new Form ({ onSubmit : this.onItemCreate })


//15 20
    // const donateForm = new Form({ onSubmit: this.onItemCreate.bind(this) });
    // this.$rootElement.appendChild(donateForm.$rootElement);
    // const donateList = new List({ onRemove: this.onItemRemove.bind(this) });
    // this.$rootElement.appendChild(donateList.$rootElement);
  }
  
  onItemCreate(amount) {
    //17
  const item = new ListItem({amount})
  // const item = { amount };

  this.state.donates.push(item)

  //22
  this.state.total += amount;
  console.log("Обновлённый total:", this.state.total);

  if (this.donateList) {
    this.donateList.addItem(item);
  }
  }
}
const app = new App();



