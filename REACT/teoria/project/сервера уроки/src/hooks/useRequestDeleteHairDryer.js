import React, { useState } from 'react';
import { ref, remove } from 'firebase/database'
import { db } from '../firebase'

const useRequestDeleteHairDryer = (refreshProducts) => {
	//флаг на удаление
	const [isDeleting, setIsDeleting] = useState(false)

	const requestDeleteHairDryer = () => {
		setIsDeleting(true)

		const hairDryerBdRef = ref(db, 'products/003')

		remove(hairDryerBdRef)
		.then((response) => {
			console.log('фен удалили, ответ от сервера:', response);
		refreshProducts()
			// setProducts((prev) => [...prev, response])
		})
		.finally(()=> setIsDeleting(false))
		


	// 	fetch('http://localhost:3003/products/003' , {
	// 		method: 'DELETE', //удаляем данные
	// 	//настройки сервера не нужны для удалния
	// 	})
	// .then((rawResponse) => rawResponse.json())
	// .then((response) => {
	// 	console.log('фен удалили, ответ от сервера:', response);
	// refreshProducts()
	// 	// setProducts((prev) => [...prev, response])
	// })
	// .finally(()=> setIsDeleting(false))
	}


	return{
requestDeleteHairDryer,
isDeleting

	};
};

export default useRequestDeleteHairDryer;
