import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "./FormikYup.module.css";
import fieldsScheme from './scheme/fieldsScheme'

const InputFormik = () => {


	const {
		//возращает хук
		register, // регистрирует поле и дает доступ управлять им
		reset, //для сброса всей формы
		handleSubmit, //отправка формы пока в консоль
		watch, //СЛЕДИТ ЗА ПОЛЕМ НУЖНЫМ НАМ
		trigger, //принудительная проверка поля или всей формы
		formState: { errors, isValid }, //сразу извлекаю ошибки и проверка всей формы на валидность
	} = useForm({
		mode: "onBlur", // валидация начнется при уходе с поля
		reValidateMode: "onChange",
		//передаю начальное поле логина -пустое
		defaultValues: {
			login: "",
			password: "",
			repeatPassword: "",
		},
		resolver: yupResolver(fieldsScheme),
	});

	//указываю для watch поля для слежки
	const password = watch("password");
	const repeatPassword = watch("repeatPassword");

	useEffect(() => {
		if (repeatPassword && password) {
			//принудительно запускает эту проверку при изменении основного пароля
			trigger("repeatPassword");
		}
	}, [password, repeatPassword, trigger]);


	//ошибки полей
	const loginError = errors.login?.message;
	const passwordError = errors.password?.message;
	const repeatPasswordError = errors.repeatPassword?.message;

	//так же убрал handleClick  с кнопки(сброс полей) -сюда положил- скидывались поля раньше отправки формы
	const onSubmit = (FormData) => {
		console.log(FormData);
		console.log(isValid);
		reset();

	};

	//useRef - для фокуса и useEffect
	const submitButtonRef = useRef(null);

	useEffect(() => {
		//ткнопка нажата и она активна
		if (
			isValid &&
			submitButtonRef.current &&
			!submitButtonRef.current.disabled
		) {
			submitButtonRef.current.focus();
		}
	}, [isValid]);

	return (
		<div className={styles.container}>
			<p className={styles.reg}>Регистрация</p>

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
