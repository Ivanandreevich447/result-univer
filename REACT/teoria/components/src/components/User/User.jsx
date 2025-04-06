import React from "react";
import styles from "./User.module.css";
import Contacts from "../contacts/Contacts";
import Label from "../contacts/label/Label";

const User = ({name, age, ...contacts}) => {
	return (
		<div className={styles.user}>

			{/* ТАК ПЕРЕДАЮ ПРОПСЫ ДЛЯ ЗАГОЛОВКА И ЦВЕТА В СТИЛЯХ! */}
			<Label color={'red'}> Пользователь</Label>

			<div>имя : {name}</div>
			<div>возраст : {age}</div>
		<Contacts {...contacts}/>
		</div>
	);
};

export default User;
