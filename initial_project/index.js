import './index.css';
// import { App as appComponen } from './src/modules/app' //для просто экспорта

//тут для экспорт дефолт так
import App from './src/modules/app';


const app = new App();
app.run()

console.log('__work__');