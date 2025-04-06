
import styles from './GenerateHistory.module.css'
import {GENERATE_DATA} from '../../constants';
import { Scanner } from '@yudiel/react-qr-scanner';
import {QRCodeSVG} from 'qrcode.react';  // импорт библиотеки с npm



const GenerateHistory = () => {

const data = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]')
console.log(data);

     return (
         <div className={styles.container}>
 
             {data.map((text,index) => (
                 <p className={styles.text} key={index} > 
                 <span className= {styles.textContent}>{text} </span> 
                 <QRCodeSVG className={styles.qr} value={text} size={150}/>
                  </p>
             ))}
 
         </div>
     );
 };

export default GenerateHistory;