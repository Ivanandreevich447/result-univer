import { Component } from '../core/Component';

export class Form extends Component {

  setup(props) {
this.state = {
  amount : ''
}
console.log(typeof(amount));

    this.$rootElement = document.createElement('form');
    this.$rootElement.className = 'donate-form';

    const $donateLabel = document.createElement('label')
    $donateLabel.classList.add('donate-form__input-label')
    $donateLabel.textContent = ' Введите сумму в $'

 
    this.$input = document.createElement('input')
    this.$input.classList.add('donate-form__donate-input')
    this.$input.name = 'amount'
    this.$input.type = 'number'
    this.$input.max = '100'
    this.$input.min = '1'
    this.$input.required = true 


    this.$button = document.createElement('button')
    this.$button.disabled = ''
    this.$button.classList.add('donate-form__submit-button')
    this.$button.type = 'submit'
    this.$button.textContent = 'Задонатить'

    this.$rootElement.appendChild($donateLabel)
    this.$rootElement.appendChild(this.$button)
    this.$rootElement.appendChild(this.$input)
    // this.$rootElement.append($donateForm, $button, $this.$input)


    this.$input.addEventListener('input', this.handleInput.bind(this))
    this.$rootElement.addEventListener('submit', this.handleSubmit.bind(this))


  }


  handleInput(event) {
console.log(event.target.value);

// console.log(this.isValid);

this.state.amount = event.target.value
 
this.$button.disabled = !this.isValid
  }

  handleSubmit(event) {
    event.preventDefault();

    if(this.isValid) {
      console.log(this.state);
      console.log(typeof(this.state));


      console.log(this.isValid);
      
//16
      this.props.onSubmit (this.state.amount)

      console.log(this.$input.value);
      this.$input.value = ''
    }


  }
  

  get isValid () {
    // const amount = Number(this.state.amount);
    const amount = Number(this.$input.value);
    if(  amount >= 1 && amount <= 100) {
      return true
    } else {
     return false
    }

}
}
