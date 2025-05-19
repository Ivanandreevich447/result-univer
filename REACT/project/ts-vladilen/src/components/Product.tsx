// import React from "react";
import { useState } from "react";
import { Iproduct } from "../models";

//типизирую и передаю в пропс типизацию
interface ProductProps {
  product: Iproduct;
}

//тут пропс с Апп принимаю и чтоб не все пропс , а именно {product} - пишу в скобках
const Product = ({ product }: ProductProps) => {
  const [details, setDetails] = useState(false);

  //задам смену классов на кнопку
const btnClassName = details? 'py-2 px-4 border bg-blue-400' : 'py-2 px-4 border bg-yellow-400'
//повторы в классах положу отдельно + что выше написал - это будет меянть класс кнопки
const btnClasses = ` ${'py-2 px-4 border'}, ${btnClassName} `

  return (
    <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
      <img src={product.image} className="w-1/6" alt={product.title} />

      <p>{product.title}</p>
      <span className="font-bold">{product.price}</span>
      {/* классы задаю через переменную выше */}
      <button className={btnClasses}
      //клик- меняет состояние на противоположное,которое было prev => !prev
      onClick = { () => setDetails(prev => !prev)}
      >
       {details? 'Скрыть описание' : ' Показать описание'}
      </button>
      <div>
       {details && <p>{product.description}
        <p> Рeйтинг :  
            <span style={{ fontWeight: 'bold' }}>
            {product?.rating?.rate}
            </span> 
            </p>
        </p>} 
     
      </div>
    </div>
  );
};

export default Product;
