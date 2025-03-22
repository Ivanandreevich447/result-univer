import React, { useState } from 'react';
// import styles from './MyComponent.modules.css'


const MyComponent = () => {
	const getTimeFromDate = (date) => date.toISOString().substring(11,19)


	// 1 - актульаное значение состояния, 2 - функция для установки нового значения состояния
	//функция изменения состояния
	const [currentDate, setCurrentDate] = useState(new Date())

	const [value, setValue] = useState(0)
	const onClick = () => setValue(value + 1)


	setTimeout(( ) => {
		setCurrentDate(new Date())
	},1000)


	const [obj, setObj] = useState({a: 10, b:20, c:30})

	//ТАК НЕЛЬЗЯ МЕНЯТЬ ОБЪЕКТ-МУТАЦИЯ, В РЕАКТЕ НАДО ЗАМЕНЯТЬ ЗНАЧЕНИЕ ВМЕСТО МУТИЦИИ/ ОНИ ИММУТАБЛЬНЫ
	// obj.a = 20

	//вот так меням значения
	// setObj({a: 23, b:20, c:30})


	//если значений много, а изменить надо 1- спреад оператор- развернем все свойста и дальше изменим нужное
	//меняю значение - реакт видит новый объект и вызывает рендер объекта- потом снова видит это изменение и так бескончено / поэтому через иф -элс
	// setObj({...obj , a: 23})

	if (obj.a === 10) {
		setObj({...obj , a: 23})
	}


	const tagName = 'div'
	return (
		<div
		 className={tagName + 'Element'}
style = {{   marginTop: '20px', textAlign: 'center'}}>
<p  >{obj.a}</p>
		{getTimeFromDate(currentDate)}



		</div>
	);
};

export default MyComponent;