import React from 'react';
//https://www.npmjs.com/package/qrcode.react
import {QRCodeSVG} from 'qrcode.react';  // импорт библиотеки с npm
import {useState} from 'react';
import styles from './QrCodeGeneration.module.css' //импорт css - пишу любое слово и через него задаю ниже классы

//тут из constant импорт ключ этот
import {GENERATE_DATA} from '../../constants';


//event.target.value - достать значения из поля  ввода


const QrCodeGeneration = () => {

const [value, setValue] = useState('')
const [result, setResult] = useState('')


//event- принимает при клике- передает инфо о действии и тд
const onClickHandler = () => {

//тут локалсторэдж getItem - получение 
//(SCAN_DATA || '[]') - тк изначально пустой массив выдаст NULL / '[]' - в ковычках-строка тк json ожидает строку
//метод JSON.parse -  функция JS,преобразует строку в формате JSON в JS- массив
const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]')
console.log(prevData);

//тут локалсторэдж setItem - набор полученных данных используем
//собираем вводимые данные в массив 
//ЛОКАЛСТОРДЖ ВЫВОДИТ СТРОКУ - НАДО ОБЕРНУТЬ В JSON.stringify(новый ввод строки [  там новый ввод] )
//В localStorage можно сохранять только строки, поэтому объекты нужно преобразовывать с помощью JSON.stringify.
localStorage.setItem(
    //[...старый массив, новое значение]
    GENERATE_DATA,
      JSON.stringify([...prevData, value]));
    
console.log(event.target);
//клик на кнопку- состояние - берется из состояния value
setResult(value)
setValue('')


}


const onChangeHandler = (e) => {

    //при вводе состояние становися -  из поля ввода
setValue(event.target.value)
setResult('')

// console.log(event.target.value);
// console.log(event);
}


// console.log(GENERATE_DATA);

    return (
        <div 
        className={styles.container}
        >  

             <input  
             className={styles.input}
             placeholder='Введите текст...'
             //{value- состояние сейчас}
             value={value}
             //передаю функц в обработчик
             onChange={onChangeHandler}
             type="text" />
             
             <button
             className={styles.button}
              //передаю функц
             onClick={onClickHandler}
             >Сгенерировать QR</button>

              {/* если result -  не пустой - выводи куар или ничиего */}
            {result !== '' ? <QRCodeSVG value={result} className={styles.qr}
            // В ОПИСАНИИ БИБЛ ЕСТЬ что могу менять size-размер
            size={300}
            /> : null}
        </div>
    );
};

export default QrCodeGeneration;