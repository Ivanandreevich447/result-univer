import {  useState} from "react";
import styles from "./App.module.css";
// import { useRequestAddVacuumCleaner, useRequestDeleteHairDryer, useRequestUpdateSmartphone,useRequestGetProducts } from './hooks'
import useRequestAddVacuumCleaner from "./hooks/useRequestAddVacuumCleaner";
import useRequestUpdateSmartphone from './hooks/useRequestUpdateSmartphone'
import useRequestDeleteHairDryer from './hooks/useRequestDeleteHairDryer'
import useRequestGetProducts from "./hooks/useRequestGetProducts";


const App = () => {

	//флаг для обновления списка при добавлении(для юсэффекта)
	const [refreshProductsFlag, setRefreshProductsFlag] = useState(false)
	const refreshProducts = () => setRefreshProductsFlag(!refreshProductsFlag)

	// const [isLoading, setIsLoading] = useState(false);

	// const [products, setProducts] = useState([]);

	const {isLoading, products} = useRequestGetProducts()


	// СЕЙЧАС ФАЙР - ТУТ НЕ НАДО ДЛЯ НЕГО
	useEffect(() => {
		setIsLoading(true);
		//создал файл сервера /json-server / работаю с ним
		fetch('http://localhost:3003/products')
			  // получаем ответ от сервера (объект Response)
			.then((loadedData) => loadedData.json())
			 // получаем уже готовые данные из JSON
			.then((loadedProducts) => {
				setProducts(loadedProducts);
			})
			.finally(() => setIsLoading(false));
	}, [refreshProductsFlag]);


		// Вызываю хук useRequestAddVacuumCleaner, передавая в него refreshProducts (чтобы он мог обновить список товаров после добавления). и получаю метод и состояние
	const {isCreating, requestAddVacuumCleaner} = useRequestAddVacuumCleaner(refreshProducts)
	const {updeting, requestUpdateSmartphone } = useRequestUpdateSmartphone(refreshProducts)
	const {isDeleting, requestDeleteHairDryer} = useRequestDeleteHairDryer(refreshProducts)
	// const {products,
	// 	isLoading} = useRequestGetProducts(refreshProductsFlag)


	// useEffect(() => { //без возврата
	// 	//отпрвка запроса к этому юрл
	// 	fetch('https://mocki.io/v1/8af1a620-1f8f-48ab-8090-d394e332e430')
	// 	//обработка первоночального ответа сервера- преобразование в json()
	// 	.then((loadedData) => loadedData.json())
	// 	//тут уже работаем с данынми
	// 	.then((loadedProducts) =>
	// 	setProducts(loadedProducts))
	// }, [])

	// useEffect(() => {
	// 	//1  запупск - сначала это рендерится
	// 	//2  рендер - сначала RETURN сработает- затем уже это
	// 	console.log("1-", counter);
	// 	//при 2 и дальше рендере -сначала ретен вызывается
	// 	return () => console.log("2-", counter);
	// }, [counter]);

	// useEffect(() => {
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



	return (
		<>
			<div>
				{/* тут колесо загрузки пропишу */}
				{isLoading ? (
					<div className={styles.loader}> </div>
				) : (
			// ТУТ ДЛЯ ПЛЭЙСХОЛДЕРА
					// products.map(({ id, name, price }) => (
					// 	<div key={id}>
					// 		{name} - {price} rub
					// 	</div>


					// Object.entries() - превращает обьект в МАССИВ
					Object.entries(products).map(([id, { name, price }]) => (
						<div key={id}>
						  {name} - {price} rub
						</div>

					))
				)}
			</div>





			{/* <button onClick={() => setCounter(counter + 1)}>+1</button> */}


	<button disabled={isDeleting} onClick={requestDeleteHairDryer}  >удалить фен</button>
	<button disabled={isCreating} onClick={requestAddVacuumCleaner}  >добавить пылесос</button>
	<button disabled={updeting} onClick={requestUpdateSmartphone}  >обновить телефон</button>


		</>
	);
}

export default App;
