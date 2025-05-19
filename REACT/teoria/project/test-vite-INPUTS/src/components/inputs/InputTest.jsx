import React, { useState } from 'react';


// // import React, { useRef, useState } from 'react';
// // import *as yup from 'yup'

// // //2инпута тут/ 2-через библ YUP



// const sendFormData = (formData) => {
// 	console.log(formData);
// }

// const InputTest = () => {
// const [login, setLogin] = useState('')
// const [loginError, setLoginError] = useState(null)

// const onLoginChange =({target}) => {
// 	setLogin(target.value)

// 	let newError = null

// if(!/^[\w_]*$/.test(target.value)) {
// newError = 'неверный логин'
// } else if (target.value.length > 20) {
// 	newError = 'неверный логин, должно быть не больше 20 символов'
// }
// setLoginError(newError)

// }

// const onLoginBlur = ({target}) => {
// 	if(target.value.length < 3) {
// 		setLoginError('не верно, больше 3х символов')
// 	}
// }

// const onSubmit = (e) => {
// 	e.preventDefault()
// 	sendFormData({login})
// }

// 	return (
// 		<div>
// <form onSubmit={onSubmit} >
// 	{loginError &&
// <div style={{color:'red'}}>{loginError}</div>}
// <input type="text"
// name='login'
// value={login}
// placeholder='введи логин'
// onChange={onLoginChange}
// onBlur={onLoginBlur}
// />

// <button type='submit' disabled={!!loginError} >отправить</button>
// </form>
// 		</div>
// 	);
// };

// export default InputTest;




//YUP - loginChangeScheme = yup. / scheme-схема/ строка и дальше методы через точку(значение, 'ошибка')
const loginChangeScheme = yup.string() //что строка
.matches(/^[\w_]*$/, 'неверный логин') //регулярка
.max(20, 'неверный логин, должно быть не больше 20 символов')

//обработка на уведение с инпута мышки
const loginBlurScheme = yup.string()
.min(3,'не верно, введи больше 3х символов')

//scheme — это loginChangeScheme или loginBlurScheme (правила проверки).
const validateAndGetErrorMessage = (scheme, value) => {
	let errorMessage = null

	try {
		//схема на валидность синхронно
		//берем схему и валидируем для нее значение- катч перехватит и выведет ошибку
		//{abortEarly: false} показывать все ошибки, а не только первую
		scheme.validateSync(value, {abortEarly: false})

		//catch ({ errors }) — если есть ошибки, получаем их в виде массива.
// errors.join('\n') — объединяем ошибки в одну строку через перенос (\n).

	} catch ({ errors }) {
		//ошибка есть? - выведет все ошибки для обьединения .join('\n')
		errorMessage = errors.join('\n')
	}
	return  errorMessage
}


const InputTest = () => {
	const [login, setLogin] = useState('')
	const [loginError, setLoginError] = useState(null)

	const [stateCounter, setStateCounter] = useState(0)
	//useRef
	const submitButtonRef = useRef(null)

//useRef - проверка как значение выводит- useState - рендерит изменения и сразу выводит, а юсреф- выводит предыдущее значение
const refCounter = useRef(0)

	const onLoginChange =({target}) => {
		setLogin(target.value)
		const error = validateAndGetErrorMessage(loginChangeScheme, target.value)

setLoginError(error)

//использую юсреф - если так - сделай с кнопкой фокус
if(target.value.length === 20) {
	submitButtonRef.current.focus()
}
	}

	const onLoginBlur = () => {
		const error = validateAndGetErrorMessage(loginBlurScheme, login)

		setLoginError(error)
	}

	const onSubmit = (e) => {
		e.preventDefault()
	console.log(login);
	}

const handleClickState = ()=> {
//тут сразу все выведет на странице
	setStateCounter(stateCounter +1)
	console.log(stateCounter);
}

	const handleClickRef = () => {
//в консоли меняет, но покажет только с рендером страницы сразу все накполеннное
		refCounter.current += 1
console.log(refCounter.current);
	}

		return (
			<div>
<p>refCounter : {refCounter.current}</p>
<button
onClick={handleClickRef}
>прибавить refCounter</button>

<p>stateCounter : {stateCounter}</p>
<button
onClick={handleClickState}

>прибавить stateCounter</button>

	<form onSubmit={onSubmit} >
		{loginError &&
	<div style={{color:'red'}}>{loginError}</div>}
	<input type="text"
	name='login'
	value={login}
	placeholder='введи логин'
	onChange={onLoginChange}
	onBlur={onLoginBlur}
	/>

{/* !! превращает любое значение в true/false */}
	<button
	//передаю пропс реф- значение юсереф - записал значение кнопки на переменную submitButtonRef.current - и могу обратиться к кнопке по нему
	ref={submitButtonRef}
	type='submit'
	disabled={!!loginError}
	>отправить</button>
	</form>
			</div>
		);
	};

	export default InputTest;
