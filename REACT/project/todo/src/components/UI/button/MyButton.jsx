import React from "react";
import classes from './MyButton.module.css'


// props.children — это специальное свойство, которое позволяет передавать компоненту содержимое, помещённое между его открывающим и закрывающим тегами
//В АПП передаем
//  <myButton> ВОТ ТУТ ЧТО НАХОДИТСЯ ТУТ-МЫ ПЕРЕДАЕМ СЮДА В КОМПОНЕНТ <myButton/>
//в тут в пропсах укажем {children, ...props - все остальные пропсы вызванные} А НИЖЕ В ВОЗВРАТЕ УКАЖЕМ {children} -  место , куда передадим это сожержимое

const MyButton = ({children, ...props}) => {


	return (
<button
 //ЧТОБ ПРОПСЫ ПЕРЕДАВАЛИСЬ ИЗ МЕСТА КУДА ПРОПИСАЛИ КОМПОНЕНТ- ТУТ УКАЗАТЬ ПРИЕМ ПРОПСОВ КАК НИЖЕ {...props} - ВСЕ ПРОПС ПРИЛЕТЯТ СЮДА
{...props}
className={classes.myBtn}>
{children }
</button>


	)
}

export default MyButton;
