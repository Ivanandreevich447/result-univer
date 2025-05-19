import React, { useState } from 'react';
// всегда ref/ set - обновить
import { ref, set} from 'firebase/database'
import { db } from '../firebase'

//пропс передаю ,который отдал в вызове компонента в АПП
const useRequestUpdateSmartphone = () => {
	const [updeting, setUpdeting] = useState(false)



	const requestUpdateSmartphone = () => {
		setUpdeting(true)


		const smartphoneBdRef = ref(db, 'products/002')

		set(smartphoneBdRef, {
			name: 'телефон',
			price: 17900,
		})
		.then((response) => {
				console.log('телефон обновили, ответ сервера:', response);

			})
			.finally(()=> setUpdeting(false))

	// 	fetch('http://localhost:3003/products/002', {
	// 		method: 'PUT', //обновяем данные
	// 		headers: { 'Content-Type': 'application/json;charset=utf-8'}, // кодировки
	// 		body: JSON.stringify({
	// 			//Если не передать какие-то поля — они будут удалены на сервере. PUT — как будто перезаписывает файл целиком.
	// 			name: "телефон",
	// 			price: 17900,
	// 		}),
	// 	})
	// .then((rawResponse) => rawResponse.json())
	// .then((response) => {
	// 	console.log('телефон обновили, ответ сервера:', response);
	// refreshProducts()
	// 	// setProducts((prev) => [...prev, response])
	// })
	// .finally(()=> setUpdeting(false))
	}

	return {
requestUpdateSmartphone,
updeting
	};
};

export default useRequestUpdateSmartphone;
