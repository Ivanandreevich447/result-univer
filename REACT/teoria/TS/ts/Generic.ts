			//ДЖЕНЕРИКИ
			//Дженерики (Generics) - это мощный инструмент TypeScript для создания компонентов, которые могут работать с разными типами данных, сохраняя при этом безопасность типов.

			//Преимущества дженериков:
// Повторное использование кода - один класс/функция может работать с разными типами
// Безопасность типов - TypeScript проверяет типы на этапе компиляции
// Гибкость - можно создавать обобщенные структуры данных

			//<T> - объявление параметра типа (type parameter)
// Функция entity принимает аргумент типа T и возвращает значение того же типа T
// При вызове мы явно указываем конкретный тип: number string ..


//фукнц принимает и отдает один тип - название ЛЮБАЯ БУКВА- чаще <Т> -это и есть дженерик
function entity<T> (args: T):T {
	return args
}
entity<number>(1)
entity<string>('ere')

//стрелочная функция
const entity2 = <T> (args: T):T => {
	return args
}

entity2<number>(1)
entity2<string>('ere')


//КЛАССЫ
class Channel<T> {
	private name: T
	constructor(name:T) {
		this.name = name
	}
	getName():T {
		return this.name
	}
}
//При создании экземпляра мы указываем конкретный тип:
new Channel<string> ('Red Group')
new Channel<number> (1)


		//INTERFACE - дженерики назову по перым буквам/ тут как бы создаю структуру без типов конкретных
interface IPair<K, V> {
	key : K
	value: V
}
//а тут в начале задаю типы на эти джененики- каждую переменную могу задать разные- но порядок как при выводе должен быть
const pair1:IPair<string, number> = {
	key: 'qwe',
	value: 133
}

const pair2:IPair<string, string> = {
	key: 'qwe',
	value: '123123'
}


				//СРАЗУ ЗАДАТЬ ТИП ДЖЕНЕРИКУ и потом РАСШИРИТЬ extends этим значением
type TypeLength = {
	// это тип, описывающий объект с обязательным свойством length типа number
	length: number
}
//Параметр типа T должен быть типом, который соответствует (расширяет) TypeLength
//любой тип T должен иметь свойство length: number - строка и массив- имеют длину

function getNameLength<T extends TypeLength>(entity3: T): number {
	return entity3.length
}

getNameLength('eqrw') //имеет длину и вернут оба ЧИСЛО!
getNameLength([312, 34, 321])
getNameLength(ewqew) // - нет длины - ошибка
