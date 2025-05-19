import React, { useState } from 'react';

// Когда вы вводите текст в любое поле:
// Браузер создаёт событие (event)
// target - это элемент input, который вызвал событие
// target.name - имя поля ('email', 'login' или 'password')
// target.value - введённое значение
// updateState обновляет соответствующее поле в состоянии

//задаю начальное состояние
const initialState = {
	email : '',
	login: '',
	password: '',
}

//будет хранилище состояния - пользовательский ХУК/там всегда должен быть обычный хук и начинается на USE
const useStore = () => {
	const [state, setState] = useState(initialState)

	return {
		//функц меняет состояние
		getState: () => state,

		// fieldName - имя поля ('email', 'login' или 'password')
		// newValue - новое значение для этого поля
		//[fieldName] -скобки,чтоб внутри значение было динамическое-менялось от выбранного поля/ типа [fieldName]-майл/ майл:значение майла в инпуте
		updateState: (fieldName , newValue) => {
			setState({...state, [fieldName]: newValue})
			console.log(`Меняем поле ${fieldName} на ${newValue}`)
		},
		//сброс полей в начальное сост
		resetState: () => {
			setState(initialState)
		}
	}
}

const sendData = (formData) => {
	console.log(formData);
}

const Input = () => {

	const {getState , updateState ,resetState} = useStore()

	const onSubmit = (event) => {
		event.preventDefault()
		sendData(getState())
		//отправка инпутов и сброс полей
		resetState()
	}

	const {email, login , password} = getState ()

	const onChange = ({ target }) => updateState(target.name, target.value )


	return (
		<div>
<form onSubmit={onSubmit} >

{/* target - это сам input
target.name - берёт значение атрибута name ("email")
target.value - текущий текст в input */}

	<input type="email"
	name='email'
	value={email}
	placeholder='почта'
	onChange={onChange}
	/>

	<input type="text"
	name='login'
	value={login}
	placeholder='login'
	onChange={onChange}
	/>

	<input type="password"
	name='password'
	value={password}
	placeholder='пароль'
	onChange={onChange}
	/>

<button type='submit'  >отправить</button>
</form>
		</div>
	);
};

export default Input;
