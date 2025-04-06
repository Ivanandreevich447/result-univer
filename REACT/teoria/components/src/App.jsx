import React, { useState } from "react";
import styles from "./App.module.css";
import User from "./components/User/User";
import Label from "./components/contacts/label/Label";
import Counter from "./Counter";

import Layout from "./layout/Layout";

const getUserFromServer = () => ({
	name: "IVAN",
	age: 29,
	mail: "bos447@mail.ru",
	phone: "+7-922-609-63-54",
});

const App = () => {
	const user = getUserFromServer();

//задаю состояние в родителе и передаю пропсом в дочерний counter
const [value, setValue] = useState(0)

	return (
		<div className={styles.app}>

{/* наше состояние перадю в каунтер и там принимаю пропсом их и меняю уже */}
		<label>Счетчик</label>
		<Counter
		value={value}
		setValue={setValue}
		/>


			{/* что указал текстом в лейбл - передается в ЧИЛДРЕН в компонент сразу */}
			<Label color={'blue'} > Приложение </Label>

			<div>инфо о приложении</div>

			<User

			// МОГУ ПРОСТО ПЕРЕДАТЬ ВСЕ СРАЗУ- если дан обьект - {...user} !!
			{...user}
				// name={user.name}
				// age={user.age}
				// mail={user.mail}
				// phone={user.phone}
			/>

			<Layout/>

		</div>
	);
};

export default App;
