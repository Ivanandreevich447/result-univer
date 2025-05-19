import  { useEffect, useState } from "react";
import axios, { AxiosError } from "axios"; //установил его
import Iproduct from "../models";


function useProducts() {
     // состояние на список товаров с сервера - сначала пустой
const [products, setProducts] = useState<Iproduct[]>([])
//для индикатора загрузки
const [loading, setLoading] = useState(false)
const [error, setError] = useState(false)

const addProduct=(product: Iproduct)=> {
    //prev-прошлое состояние => [...прошлое сост, новый продукт] - тут спред к этому + новое
    setProducts(prev=> [...prev, product])
}

async function fetchProducts() {
try {
  setError(false)
  setLoading(true)
  //axios.get <что мы ожидаем получить в ответ? тс>(ссылка)
const response = await axios.get<Iproduct[]>('https://fakestoreapi.com/products?limit=20')
//состояние меняем-кладем туда с сервера список и В МАП ЕГО выводим
setProducts(response.data)
setLoading(false)
} catch(e: unknown) {
  const error = e as AxiosError
  setLoading(false)
  setError(error.message)

}
}

useEffect(() => {
  fetchProducts()
}, [])

return {
    //возвращаем СОСТОЯНИЯ
products,
loading,
error,
addProduct,
}
}

export default useProducts;