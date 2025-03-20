import { useState } from "react";
import React from "react";
import styles from './App.module.css'

export function App() {

	const[value, setValue] = useState('')
	const[list, setList] = useState([])
	const[error, setError] = useState('')

	const onInputButtonClick = () => {
const promptValue =  prompt('введи новое значение')

if(!promptValue || promptValue.length < 3) {
	setError('Введенное значение должно содержать минимум 3 символа')

} else {
	setValue(promptValue)
	setError('')
}
	}

	const onAddButtonClick = () => {
		if(value.trim().length >= 3) {
			const newItem = {id: Date.now(), value}

			const updatedList = [...list, newItem]
			setList(updatedList)

			setError('')
			setValue('')
		}
		}

		// для доп задания время-передам в li
		const DataNew = new Date().toLocaleString()


	return(
		<div className={styles.app}>
		<h1 className={styles["page-heading"]}>Ввод значения</h1>
		<p className={styles["no-margin-text"]}>
		  Текущее значение <code>value</code>: "<output  className={styles["current-value"]}>{value}</output>"
		</p>
		{error && <div className={styles.error}>{error}</div>}

		<div className={styles['buttons-container']}>
		  <button onClick={onInputButtonClick}  className={styles.button}>Ввести новое</button>
		  <button onClick={onAddButtonClick} className={styles.button}
// trim()- на пробелы кнопка активна без него
		  disabled={value.trim().length < 3}>Добавить в список</button>
		</div>
		<div className={styles['list-container']}>
		  <h2 className={styles['list-heading']}>Список:</h2>
		  {/* чтоб тру получить- надо сравнить по длинне массив list!! */}
		  <p className={styles['no-margin-text']}> {list.length === 0 ? 'Нет добавленных элементов' : null}  </p>
		  <ul className={styles.list}>
			
			{list.map((item) => (
			<li key={item.id} className={styles["list-item"]}> значение : {item.value},<br/>
			время создания : {DataNew}</li>
		  ))}

		  </ul>
		</div>
	  </div>
	)

}

