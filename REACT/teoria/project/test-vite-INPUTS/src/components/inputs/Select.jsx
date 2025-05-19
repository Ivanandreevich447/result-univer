import React, { useState } from 'react';
import Select from "react-select";


//НИЖЕ ВТОРОЙ ВАРИАНТ ЧЕРЕЗ БИБЛИОТЕКУ!!1
//https://react-select.com/home - отсюда беру библиотеку



//ТУТ ПРО МУЛЬТИ СЕЛЕКТЫ - НЕСКОЛЬКО СЕЛЕКТОВ ,КОТОРЫЕ РАБОТАЮТ ВМЕСТЕ
//multiple={true}  - указывать в селекте втором или дальше- он будет выпадать из первгого выбора

// const Selected = () => {
// 	//состояние товаров
// 	const [ selectedProduct , setSelectedProduct] = useState('tv')
// 	//сост цветов товара
// 	const [selectedColors, setSelectedColors] = useState(['black', 'silver'])

// 	//обработчик на товары/ таргет-цель тут равна выбранному option/ принмиаем цель и задаем состояние со значением этой цели
// const oneSelectedProductChange = ({ target }) => setSelectedProduct(target.value)

// const oneSelectedColorChange = ({ target }) => {
// 	//selectedOptions - предусмотрено в таргете - там массив элементов-чрез мап распаковку делаем -там получаем уже массив значений наших выбраннх - конкретно у нас ЦВЕТ
// 			//создаю копию массива этого,чтоб ориг не трогать
// 	const newselectedColors = [...target.selectedOptions].map((selectedTarget) => selectedTarget.value)
// //newselectedColors - там наши цвета хранятся теперь
// 	setSelectedColors(newselectedColors)
// }

// 	return (
// 		<div>
// <select value={selectedProduct} onChange={oneSelectedProductChange}>
// <option value="phone">телефон</option>
// <option value="tv">телевизор</option>
// <option value="laptop">macbook</option>
// </select>

// <select multiple={true} value={selectedColors} onChange={oneSelectedColorChange}>
// <option value="black">черный</option>
// <option value="red">крансый</option>
// <option value="silver">серебристый</option>
// </select>
// {/* вывожу выбор */}
// <p>{`${selectedProduct} color ${selectedColors}`}</p>
// 		</div>
// 	);
// };

// export default Selected;




// //https://react-select.com/home - отсюда беру библиотеку

//ТУТ ПРО МУЛЬТИ СЕЛЕКТЫ - НЕСКОЛЬКО СЕЛЕКТОВ ,КОТОРЫЕ РАБОТАЮТ ВМЕСТЕ
//multiple={true}  - указывать в селекте втором или дальше- он будет выпадать из первгого выбора

const SelectOptions = () => {

	const productOptions = [
		{ value: "phone", label: "телефон" },
		{ value: "tv", label: "телевизор" },
		{ value: "laptop", label: "macbook" },
	];

	const colorOptions = [
		{ value: "black", label: "черный" },
		{ value: "red", label: "крансый" },
		{ value: "silver", label: "серебристый" },
	];

	return (
		<div>
			<Select options={productOptions} defaultValue={productOptions[0]} />

			{/* isMulti={true} - в библиотеке так пишется мультиселектор
в дефолте надо добавить массив цветов - у нам везде массив цветов  */}
			<Select
				isMulti={true}
				options={colorOptions}
				defaultValue={[colorOptions[0], colorOptions[1]]}
			/>
		</div>
	);
};

export default SelectOptions;
