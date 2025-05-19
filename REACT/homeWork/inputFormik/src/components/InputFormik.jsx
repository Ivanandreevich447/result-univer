import React from 'react';
import { useForm } from "react-hook-form"

//https://react-hook-form.com/get-started
//библ для форм самая популярная

const InputFormik = () => {

const {
	//возращает хук
	register,
	handleSubmit,
	formState:{errors} //сразу извлекаю ошибки
} = useForm({
	//передаю начальное поле логина -пустое
	defaultValues :{
		login :''
	}
})

const loginProps = {
	//значение пропа : {value: '', message: ''}
minLength : {value: 3, message: 'введи больше 3 символов'},
maxLength : {value: 20, message: 'введи меньше 20 символов'},
pattern : {value: /^[\w_]*$/ , message: 'может содержать латинские, цифры и нижнее подчеркивание'}
}


// const validationSchema = yup.object().shape({
// 	email : yup.string().required('Required').email('Invslid email'),
// 	password: yup.string().required('Required'),
// 	repeatPassword: yup.string().required('Required')
// 	})

const loginError = errors.login?.message

const onSubmit = (FormData) => {
	console.log(FormData);
}
	return (
		<div>
<form
onSubmit={handleSubmit(onSubmit)}
>
{loginError && <div style={{color:'red'}}>{loginError}</div> }
<input
{...register('login', loginProps)}
name='login'
type='text'

/>

<button
type='submit'
disabled={!!loginError}
>отправить</button>
</form>
		</div>
	);
};

export default InputFormik;
