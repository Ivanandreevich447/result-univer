import React from 'react';
import { useState } from 'react';
import styles from './Obrabotchici.module.css'

//ОБРАБОТЧИКИ СОБЫТИЙ-СЛУШАТЕЛИ НА КНОПКУ
//onClick / onDoubleClick -КЛИК ИЛИ ДВОЙНОЙ КЛИК
//onMouseMove - при наведении сработает

const Obrabotchici = () => {

	function showInput (event) {
		//выводит значение инпута
		console.log(event.target.value);
		textOut.current.innerHTML = textInput.current.value
		setOutput(textInput.current.value)
	}



let textInput = React.createRef()
let textOut = React.createRef()
const [output,  setOutput] = useState('hello')
// const [value, setValue] = useState(0)

const [showRedText, setShowRedText] = useState(0)


// //функц обработчика, передаю ниже в кнопку
// const onClick = (event) =>{
// 	//в функц setValue передаю функц колбэк, от которой ожидается,что вернет новое состояние
// 	// сначала реакт 0 +1 1+1 2+1 потом рендер и выводит уже новое значение после всех действий
// 	setValue((updateValue)=> updateValue + 1)
// 	setValue((updateValue)=> updateValue + 1)
// 	setValue((updateValue)=> updateValue + 1)
// 	console.log(event);
// }

const onClick = () => {
	setShowRedText(!showRedText)
}

function f1(arg) {

	console.log('f1 work' + arg);
}

function f2() {
	console.log('move');
}

const text = <div className={showRedText ? styles.red : styles.white} >
	текст</div>
	return (
<>
			<h1>События</h1>
<section>

	{/* тут через тернарный мы скрываем иили показывам текст в зависимости от значения showText
	 если оно тру- верет див с текст , если фолс - реакт ничгео не рендерит и просто выведет текст ,котоырй прописали */}
	{text  }
	<button onClick={onClick}> {showRedText ? 'cкрыть' : 'показать'} текст </button>
	{/* <h2>Button</h2> */}
	{/* <p>{value}</p>
	<button onClick={onClick}>прибавить +1</button> */}
	{/* <button onClick={()=> f1(23)} >push</button> */}
</section>
<section>
	<h2>двойной клик + нажатие мыши</h2>
	<div className='test' onDoubleClick={ ()=> f2(4)}>
	</div>
</section>
<section>
	<h2>Input</h2>
	{/* обрашаюсь к ипут что ввожу через функ шоутмпут и РЕФ ТУТ И let textInput = React.createRef()*/}
	<input type='text' onInput={showInput} ref={textInput} />
	<p ref={textOut} ></p>
	<h2 >{output}</h2>
</section>
</>
	);
};

export default Obrabotchici;