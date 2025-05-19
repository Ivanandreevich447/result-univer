import { useState } from 'react';
import {ref, push} from 'firebase/database'
import { db } from '../firebase'

//refreshProducts - в файр не принимается-не нужен
const useRequestAddVacuumCleaner = () => {
	const [isCreating , setIsCreating] = useState(false)

	const requestAddVacuumCleaner = () => {
		setIsCreating(true)

		//ref(db, 'products') db-база данных ведет на саму ссылку с файр, 'products' - то что я сам написал создал базу продактс
		const productsBdRef = ref(db, 'products')

		//добавить -принимает бд с продактс + новый обьект
		push(productsBdRef, {
			name: 'новый пылесос',
			price: 4690,
		})
		.then((response) => {
				console.log('пылесос добавлен,ответ сервера:', response);
			})
			.finally(()=> setIsCreating(false))

	// 	fetch('http://localhost:3003/products' , {
	// 		method: 'POST', //получаем данынные
	// 		headers: { 'Content-Type': 'application/json;charset=utf-8'}, // кодировки
	// 		body: JSON.stringify({
	// 			name: "новый пылесос",
	// 			price: 4445,
	// 		}),
	// 	})
	// .then((rawResponse) => rawResponse.json())
	// .then((response) => {
	// 	console.log('пылесос добавлен,ответ сервера:', response);
	// refreshProducts()
	// 	// setProducts((prev) => [...prev, response])
	// })
	// .finally(()=> setIsCreating(false))

	}
	return {
isCreating,
requestAddVacuumCleaner
			};
};

export default useRequestAddVacuumCleaner;
