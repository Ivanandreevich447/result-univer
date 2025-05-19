import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import registrSchema from "../Scheme/validationScheme";
import React, { useEffect, useRef } from "react";



const useRegistrForm = () => {
	const {
		// //возращает хук
		// watch, //СЛЕДИТ ЗА ПОЛЕМ НУЖНЫМ НАМ
		// trigger, //принудительная проверка поля или всей формы
		// handleSubmit,
		register,
		handleSubmit,
		reset,
		watch,
		trigger,
		formState: { errors, isValid }, //сразу извлекаю ошибки и проверка всей формы на валидность
	} = useForm({
		mode: "onBlur", // валидация начнется при уходе с поля
		reValidateMode: "onChange", //С НИМ СТАЛИ ОШИБКИ СРАЗУ ВЫХОДИТЬ ПРИ ВВОДЕ!
		//передаю начальное поле логина -пустое
		defaultValues: {
			login: "",
			password: "",
			repeatPassword: "",
		},
		//добавляю схему
		resolver: yupResolver(registrSchema),
	});

	// loginError,passwordError, repeatPasswordError, password, repeatPassword, useEffect(),submitButtonRef,
	//ошибки полей
	const loginError = errors.login?.message;
	const passwordError = errors.password?.message;
	const repeatPasswordError = errors.repeatPassword?.message;

	//указываю для watch поля для слежки
	const password = watch("password");
	const repeatPassword = watch("repeatPassword");

	useEffect(() => {
		if (repeatPassword && password) {
			//принудительно запускает эту проверку при изменении основного пароля
			trigger("repeatPassword");
		}
	}, [password, repeatPassword, trigger]);

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

	return {
		handleSubmit,
		errors,
		reset,
		isValid,
		password,
		repeatPassword,
		submitButtonRef,
	};
};

export default useRegistrForm;
