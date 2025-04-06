//https://www.npmjs.com/package/@yudiel/react-qr-scanner
import { Scanner } from '@yudiel/react-qr-scanner';
import React, { useState } from 'react';
import styles from './QRCodeScanner.module.css'

//тут из constant импорт ключ этот
import {SCAN_DATA} from '../../constants';



const QRCodeScanner = () => {

const [scanned, setScanned] = useState(null)

//<Scanner onScan={(result) => console.log(result)} />;
// так в описании бтблиотеки - создать функцию с параметром результ и вывести в консоль / и уже эту нашу функц передаю в onScan={QRCodeScanner}
    const scanHandler = (result) => {
        //так могу вытащить ссылку из сканировки

setScanned(result[0].rawValue)
        
//тут локалсторэдж getItem - получение 
//(SCAN_DATA || '[]') - тк изначально пустой массив выдаст NULL / '[]' - в ковычках-строка тк json ожидает строку
//метод JSON.parse -  функция JS,преобразует строку в формате JSON в JS- массив
const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]')
console.log(prevData);

//тут локалсторэдж setItem - набор полученных данных используем
//собираем сканы в массив 
//ЛОКАЛСТОРДЖ ВЫВОДИТ СТРОКУ - НАДО ОБЕРНУТЬ В JSON.stringify(новый скан [  там новый скан] )
//В localStorage можно сохранять только строки, поэтому объекты нужно преобразовывать с помощью JSON.stringify.
localStorage.setItem(
    //[...старый массив, новое значение]
     SCAN_DATA,
      JSON.stringify([...prevData, result[0].rawValue]));

    }

//тут объект с настройками для передачи в сканер - components={setting}
    const settigs ={
        audio: false,
        finder:false
    }


    return(

        <div
        className={styles.container}
        >

<Scanner

//задержка между сканами
scanDelay={2000}

//скан на паузе,если то-то
// paused={true}

//для передачи размера сканировки -сразу тут указал как обычные стили
styles ={{container:{width: 500,}}}
components={settigs}
onScan={scanHandler} />

{ scanned ? <a href={scanned} allowMultiple={true} className={styles.textContent} target="_blank" rel="noreferrer">
            {scanned}
          </a>
: null }
     
        </div>

    )
}

export default QRCodeScanner ;

