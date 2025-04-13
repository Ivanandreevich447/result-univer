import React, { useEffect, useRef, useState } from "react";
import styles from "./Form.module.css";

const Form = () => {
	// может для сброса полей нужно будет
	// надр все поля указать
	const resetForm = () => {
		setEmail("");
		setPassword("");
		setRepeatPassword("");
		setEmailDirty(false);
		setPasswordDirty(false);
		setRepeatPasswordDirty(false);
		setEmailError("email не может быть пустым");
		setPasswordError("password не может быть пустым");
		setRepeatPasswordError("повторите password");
		setFormValid(false);
	};

	const submitButtonRef = useRef(null);

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [repeatPassword, setRepeatPassword] = useState("");

	//если нажал на поле инпута
	const [emailDirty, setEmailDirty] = useState(false);
	const [passwordDirty, setPasswordDirty] = useState(false);
	const [repeatPasswordDirty, setRepeatPasswordDirty] = useState(false);

	//ошибки
	const [emailError, setEmailError] = useState("email не может быть пустым");
	const [passwordError, setPasswordError] = useState(
		"password не может быть пустым"
	);
	const [repeatPasswordError, setRepeatPasswordError] =
		useState("повторите password");

	const [formValid, setFormValid] = useState(false);

	//проверка на валидность формы - проверяем ошибки везде/нету -валидна форма
	useEffect(() => {
		if (emailError || passwordError || repeatPasswordError) {
			setFormValid(false);
		} else {
			setFormValid(true);
		}
	}, [emailError, passwordError, repeatPasswordError]);

	//юсэффект для фокуса отдельно/когда форма уже валидна
	useEffect(() => {
		console.log(submitButtonRef.current);
		//если форма вся валидна - дай фокус
		if (formValid) {
			submitButtonRef.current.focus();
		}
		//слжу только за валид форм
	}, [formValid]);

	const emailHandler = ({ target }) => {
		setEmail(target.value); //сост -значение поля
		const re = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
//.test() — возвращает true, если строка подходит под шаблон, и false — если нет.
		if (!re.test(String(target.value).toLocaleLowerCase())) {
			setEmailError("некорректный email");
		} else {
			setEmailError();
		}
	};

	const passwordHandler = ({ target }) => {
		setPassword(target.value);

		if (!target.value) {
			setPasswordError("password не может быть пустым");
		} else if (target.value.length < 5 || target.value.length > 12) {
			setPasswordError("password должен быть от 5 до 12 символов");
			// submitButtonRef.current.focus()
		} else {
			setPasswordError("");
		}

		//чек на совпадение паролей - ставлю состояния на второй пароль уже
		if (repeatPassword && target.value !== repeatPassword) {
			setRepeatPasswordError("passwords не совпадают");
		} else if (repeatPassword) {
			setRepeatPasswordError("");
		}
		console.log(target.value);
	};

	const repeatPasswordHandler = ({ target }) => {
		setRepeatPassword(target.value);

		if (target.value.length < 5 || target.value.length > 12) {
			setRepeatPasswordError("password должен быть от 5 до 12 символов");
		}
		if (!target.value) {
			setRepeatPasswordError("повторите password");
		}
		if (target.value !== password) {
			setRepeatPasswordError("passwords не совпадают");
		} else {
			setRepeatPasswordError("");
		}
		console.log(target.value);
	};

	const blurHandler = ({ target }) => {
		switch (target.name) {
			case "email":
				setEmailDirty(true);
				break;

			case "password":
				setPasswordDirty(true);
				break;

			case "repeatPassword":
				setRepeatPasswordDirty(true);
				break;
		}
	};

	const sendFormData = (formData) => {
		console.log(formData);
	};

	const onSubmit = (e) => {
		e.preventDefault();
		sendFormData({ email, password, repeatPassword });
		resetForm();
	};

	return (
		<div className={styles.container}>
			<h1>Регистрация</h1>
			<form onSubmit={onSubmit}>
				{/* вывод ошибки */}
				{emailDirty && emailError && (
					<div className={styles.error}>{emailError}</div>
				)}
				<input
					className={styles.input}
					value={email}
					onBlur={blurHandler}
					type="text"
					name="email"
					placeholder="Enter your email.."
					onChange={emailHandler}
				/>

				{passwordDirty && passwordError && (
					<div className={styles.error}>{passwordError}</div>
				)}
				<input
					className={styles.input}
					value={password}
					onBlur={blurHandler}
					type="password"
					name="password"
					placeholder="Enter your password.."
					onChange={passwordHandler}
				/>

				{repeatPasswordDirty && repeatPasswordError && (
					<div className={styles.error}>{repeatPasswordError}</div>
				)}
				<input
					className={styles.input}
					value={repeatPassword}
					onBlur={blurHandler}
					type="password"
					name="repeatPassword"
					placeholder="Enter your password.."
					onChange={repeatPasswordHandler}
					// onChange={passwordHandler}
				/>

				<button
					ref={submitButtonRef}
					className={styles.btn}
					// disabled={passwordError || emailError}
					disabled={!formValid}
				>
					Registration
				</button>
			</form>
		</div>
	);
};

export default Form;
