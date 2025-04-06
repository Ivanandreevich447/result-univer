import React from 'react';
import styles from './ScanHistory.module.css'
import {SCAN_DATA} from '../../constants';
import {QRCodeSVG} from 'qrcode.react';  // импорт библиотеки с npm



// 1/30!!!!!!!!


const ScanHistory = () => {

const data = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]')
console.log(data);
   return (
         <div className={styles.container}>
 
             {data.map((text,index) => (
                 <p className={styles.text} key={index} > 
                 <a href={text} className={styles.textContent} target="_blank" rel="noreferrer">
            {text}
          </a>
                 <QRCodeSVG className={styles.qr} value={text} size={150}/>
                  </p>
             ))}
 
         </div>
     );
 };

export default ScanHistory;