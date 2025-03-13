import { App } from './components/App';
import './index.css';

document.addEventListener('DOMContentLoaded', function () {    
  document.body.appendChild(new App().$rootElement);

  // const listItem = new ListItem()
  // document.body.appendChild(listItem.$rootElement)

  // const list = new List()
  // document.body.appendChild(list.$rootElement)

  // const form = new Form()
  // document.body.appendChild(form.$rootElement)


  // document.body.appendChild(new DemoCounter({ title: 'App counter' }).$rootElement);
});