import React, { useEffect, useState } from 'react';

//по видео с ютуб 

//кастомный хук- содержит в себе хуки стандартные всегда! начинается на USE
//и должен, что-то возращать
const useInput = (initialValue, validations) => {

	const [value, setValue] = useState(initialValue)

	//показывает вышли из инпута или нет
	const[isDirty, setIsDirty] = useState(false)

	const valid = useValidation (value, validations)


//отработает внутри инуптута
	const onChange = (e) => {
setValue(e.target.value)
	}

//функц отработает ,когда покинули поле инпута мышкой
	const onBlur = ()=> {
		setIsDirty(true)

	}
	return {
		value,
		onBlur,
		onChange,
		isDirty,
		...valid,
	}
}

//хук для валидации формы
//сост на путсое поле
const useValidation = (value, validations) => {

	//сост на мин колличество знаков
	const [minLengthError, setMinLengthError] = useState(false)
	const [maxLengthError, setMaxLengthError] = useState(false)
//пустое значение
    const [isEmpty, setIsEmpty] = useState(true)

	const [emailError, setEmailError] = useState (false)
	//сост валидность инпута
	const [inputValid, setInputValid] = useState(false)


	useEffect(() => {
for ( const validation in validations ) {
	switch (validation) {
		case 'minLength' :
			value.length < validations[validation] ?  setMinLengthError(true) : setMinLengthError(false)
		break;

		//проверка на пустое поле
		case 'isEmpty' :
			value? setIsEmpty(false) : setIsEmpty(true)
			break

			case 'maxLength' :
				value.length > validations[validation] ?  setMaxLengthError(true)  : setMaxLengthError(false)
				break;

			case 'isEmail': {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  setEmailError(!re.test(String(value).toLowerCase()));
  break
}
	}
}

	},[value,validations])



	// 	еще ХУК НА ВАЛИДНОСТЬ КНОПКИ И ОШИБКИ
	useEffect(() => {
		if(isEmpty || maxLengthError || minLengthError || emailError) {
			setInputValid(false)
		}
		else {
			setInputValid(true)
		}
	}, [isEmpty, maxLengthError , minLengthError ,emailError])

return {
	isEmpty,
	minLengthError,
	maxLengthError,
	emailError,
	inputValid
}
}



const Input2 = () => {
//вызываю хук для константы мыла и пароля
	const email = useInput('', {isEmpty : true , minLength : 3, isEmail: true})
	const password = useInput('', {isEmpty : true, minLength : 5, maxLength : 8})


	return (
		<div>

<form>
	<h1>Регистрация</h1>
 {/* если вошли и вышли из инпута и пустое поле у нас -то отображаем див*/}
{(email.isDirty && email.isEmpty) && <div style={{color:'red'}}>поле не может быть пустым</div>}

{(email.isDirty && email.minLengthError) && <div style={{color:'red'}}>некорректная длина</div>}
{(email.isDirty && email.emailError) && <div style={{color:'red'}}>некорректный емейл</div>}

	<input
	onChange={e => email.onChange(e)}
	onBlur={e => email.onBlur(e)}
	value={email.value}
	 name='email'
	type='text'
	placeholder='Enter your Email...'
	/>

	 {/* если вошли и вышли из инпута и пустое поле у нас -то отображаем див*/}
{(password.isDirty && password.isEmpty) && <div style={{color:'red'}}>поле не может быть пустым</div>}

{(password.isDirty && password.minLengthError) && <div style={{color:'red'}}>некорректная длина пароля</div>}
{(password.isDirty && password.maxLengthError) && <div style={{color:'red'}}>слишком длинный пароль</div>}

	<input
	onChange={e => password.onChange(e)}
	onBlur={e => password.onBlur(e)}
	value={password.value}
	 name='password'
	type='password'
	placeholder='Enter your password...'
	/>

	<button
	type='submit'
	disabled={!email.inputValid && !password.inputValid}
	>Registration</button>
</form>
		</div>
	);
};

export default Input2;
