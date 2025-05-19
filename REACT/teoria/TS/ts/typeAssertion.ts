			//УТВЕРЖДЕНИЕ -ЗАДАЮ ТИП ПРИНУДИТЕЛЬНО(КОГДА ОН НЕИЗВЕСТЕН)

						//Когда это нужно?
			// Это нужно, когда TypeScript не может сам определить точный тип элемента. document.querySelector возвращает HTMLElement | null, но если мы знаем, что это точно input элемент, мы можем утвердить более конкретный тип HTMLInputElement, который имеет свойство value.

			// Без этого утверждения TypeScript выдал бы ошибку, что свойство value не существует на типе HTMLElement.

			//Разница между типами утверждения (type assertion) в TypeScript


			const inputElement = document.querySelector('input')

			//можно задать через - AS + тип - as HTMLInputElement
			//  Синтаксис as (предпочтительный)
			const value1 = (inputElement as HTMLInputElement).value

			//Синтаксис угловых скобок <>
			const value2 = (<HTMLInputElement>inputElement ).value



			// ! -УКАЗЫВАЕТ ,что возращаемый тип - не null или undefind
//Функция принимает параметр text, который может быть либо string, либо null
// Используется оператор ! (non-null assertion), который говорит TypeScript: "я уверен, что text не будет null здесь"

//при вызове getLength(null) вы получите runtime ошибку

const getLength = (text: string | null):number => {
	return text!.length
}

getLength('eqweqw') //-работает строка
getLength(null) //-работает строка


