// import React, { useEffect, useRef } from "react";
// import { useForm } from "react-hook-form";
// import * as yup from "yup"; //ушло в схему
// import { yupResolver } from "@hookform/resolvers/yup";
import styles from "./FormikYup.module.css/";
// import registrSchema from './Scheme/validationScheme'
import useRegistrForm from "./hooks/useRegistrForm";

// const InputFormik = () => {
	// const fieldsScheme = yup.object().shape({
	// 	login: yup
	// 		.string()
	// 		.matches(
	// 			/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
	// 			"неверный логин"
	// 		) //регулярка
	// 		.max(20, "должно быть не больше 20 символов")
	// 		.min(3, "не верно, введи больше 3х символов")
	// 		.required("обязательное поле"), // указывает на обязательное поле в форме

	// 	password: yup
	// 		.string()
	// 		.max(20, "должно быть не больше 20 символов")
	// 		.min(5, "не верно, введи больше 5 символов")
	// 		.matches(
	// 			/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/,
	// 			"пароль должен содержать буквы и цифры"
	// 		)
	// 		.required("обязательное поле"),

	// 	repeatPassword: yup
	// 		.string()
	// 		.max(20, "неверный логин, должно быть не больше 20 символов")
	// 		.min(5, "не верно, введи больше 5 символов")
	// 		.matches(
	// 			/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/,
	// 			"пароль должен содержать буквы и цифры"
	// 		)
	// 		.required("повторите пароль")
	// 		//чек на совпадение пароля/ .oneOf() - хотя бы 1поле совпадает с этим
	// 		//для того,что пароль сравнить я и делал метод watch
	// 		.oneOf([yup.ref("password")], "пароли не совпадают"),
	// });

	// const {
	// 	//возращает хук
	// 	register, // регистрирует поле и дает доступ управлять им
	// 	reset, //для сброса всей формы
	// 	handleSubmit, //отправка формы пока в консоль
	// 	// watch, //СЛЕДИТ ЗА ПОЛЕМ НУЖНЫМ НАМ
	// 	// trigger, //принудительная проверка поля или всей формы
	// 	formState: { errors, isValid }, //сразу извлекаю ошибки и проверка всей формы на валидность
	// } = 	resolver: yupResolver(registrSchema),
	// useRegistrForm()
	// const{
	// 	register,
	// 	errors,
	// 	isValid,
	// 	handleSubmit,
	// 	watch,

	// } = useRegistrForm()

	// useForm({
	// 	mode: "onBlur", // валидация начнется при уходе с поля
	// 	reValidateMode: "onChange", //С НИМ СТАЛИ ОШИБКИ СРАЗУ ВЫХОДИТЬ ПРИ ВВОДЕ!
	// 	//передаю начальное поле логина -пустое
	// 	defaultValues: {
	// 		login: "",
	// 		password: "",
	// 		repeatPassword: "",
	// 	},
	// 	//добавляю схему
		// resolver: yupResolver(registrSchema),
		// useRegistrForm()
	// });

	const InputFormik = () => {

	const {
		register,
		reset,
		handleSubmit,
		formatState :{
			errors
		},
	} = useRegistrForm()

	// //указываю для watch поля для слежки
	// const password = watch("password");
	// const repeatPassword = watch("repeatPassword");

	// useEffect(() => {
	// 	if (repeatPassword && password) {
	// 		//принудительно запускает эту проверку при изменении основного пароля
	// 		trigger("repeatPassword");
	// 	}
	// }, [password, repeatPassword, trigger]);


	//ошибки полей
	const loginError = errors.login?.message;
	const passwordError = errors.password?.message;
	const repeatPasswordError = errors.repeatPassword?.message;

	//так же убрал handleClick  с кнопки(сброс полей) -сюда положил- скидывались поля раньше отправки формы
	const onSubmit = (FormData) => {
		console.log(FormData);
		console.log(isValid);
		reset();
		// {resetField('repeatPassword')
		// 	resetField('password')
		// 	resetField('login')}
	};

	// //useRef - для фокуса и useEffect
	// const submitButtonRef = useRef(null);

	// useEffect(() => {
	// 	//ткнопка нажата и она активна
	// 	if (
	// 		isValid &&
	// 		submitButtonRef.current &&
	// 		!submitButtonRef.current.disabled
	// 	) {
	// 		submitButtonRef.current.focus();
	// 	}
	// }, [isValid]);

	return (
		<div className={styles.container}>
			<p>{password}</p>
			<p>{repeatPassword}</p>
			<form onSubmit={handleSubmit(onSubmit)}>
				{loginError && <div className={styles.error}>{loginError}</div>}
				<input
					className={`${styles.input} ${
						loginError
							? styles.inputError
							: isValid
							? styles.inputSuccess
							: ""
					}`}
					{...register("login")}
					name="login"
					type="text"
					placeholder="Enter your email..."
				/>

				{passwordError && (
					<div className={styles.error}>{passwordError}</div>
				)}

				<input
					className={`${styles.input} ${
						passwordError
							? styles.inputError
							: isValid
							? styles.inputSuccess
							: ""
					}`}
					{...register("password")}
					name="password"
					type="password"
					placeholder="Enter your password..."
				/>
				{repeatPassword && (
					<div className={styles.error}>{repeatPasswordError}</div>
				)}
				<input
					className={`${styles.input} ${
						repeatPasswordError
							? styles.inputError
							: isValid
							? styles.inputSuccess
							: ""
					}`}
					{...register("repeatPassword")}
					name="repeatPassword"
					type="password"
					placeholder="Сonfirm the password..."
				/>

				<button
					ref={submitButtonRef}
					className={styles.btn}
					// onClick={handleClick}
					type="submit"
					disabled={!isValid}
				>
					Registration
				</button>
			</form>
		</div>
	);
};

export default InputFormik;
