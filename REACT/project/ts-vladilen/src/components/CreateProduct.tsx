import { useState } from "react";
import Iproduct from "../models";
import axios from "axios";
import ErrorMessage from "./ErrorMessage";

const productData: Iproduct = {
title: "",
price: 21.33,
description: "описание товара",
category: "car",
image: "http://i.pravatar.cc",
rating:{
    rate: 111,
    count: 20
}
}

interface CreateProductProps {
    onCreate:(product: Iproduct) => void
 }

const CreateProduct = ({onCreate}: CreateProductProps) => {
const[value, setValue] = useState('')
const[error, setError] = useState('')


const submitHandler = async (event: React.FormEvent<HTMLInputElement>)=> {
    event.preventDefault()
    setError('')

    if(value.trim().length === 0) {
       setError('введи верное название')
       return
    }
    
    productData.title = value
    const response = await axios.post<Iproduct>('https://fakestoreapi.com/products', productData)

    onCreate(response.data)
}

const changeHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
setValue(event.target.value) 
}
    
    return (
     <form onSubmit={submitHandler}>
<input 
type="text"
className='border py-2 px-4 mb-2 w-full'
placeholder='Введи описание продукта...'
value={value}
onChange ={changeHandler}
/>

{error && <ErrorMessage error={error}/>}

<button
className='py-2 px-4 border bg-yellow-400'
>
Создать
</button>

     </form>
    );
};

export default CreateProduct;