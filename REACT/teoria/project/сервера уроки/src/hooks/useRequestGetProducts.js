import { useEffect, useState } from "react";
import {ref, onValue} from 'firebase/database'
import {db} from '../firebase'

const useRequestGetProducts = () => {
	const [products, setProducts] = useState({});
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		//передаю db-база данных и путь к чему надо получать доступ
		const productsBdRef = ref(db, 'products')

			//onValue - функц для подписки / для получения этих товаров- принимаем базу данных конкретные файлы и при изменении- делается вот это-как юсреф примерно
			//return - возврат и делает каждый раз отписку, когда компонент будет удалятся
			//snapshot - слепок данных которые в таблице сейчас- принимаем это
			return onValue(productsBdRef, (snapshot) => {
				const loadedProducts = snapshot.val() || {}

				console.log(loadedProducts);
				setProducts(loadedProducts)// передаю полчученные данные с табл в состояние продактс
				setIsLoading(false) // конец заугрзки
			})



			//феч не нужен- выше функция подписки служит для этого
	// 	setIsLoading(true);
	// 	//создал файл сервера /json-server / работаю с ним
	// 	fetch('http://localhost:3003/products')
	// 		  // получаем ответ от сервера (объект Response)
	// 		.then((loadedData) => loadedData.json())
	// 		 // получаем уже готовые данные из JSON
	// 		.then((loadedProducts) => {
	// 			setProducts(loadedProducts);
	// 		})
	// 		.finally(() => setIsLoading(false));
	// }, [refreshProductsFlag]);
}, [] )


	return {
		products,
		 isLoading,

	}
}
export default useRequestGetProducts;
