			//Utility Types в TypeScript: Разбор примеров


// Pick<T, 'K' | 'Q' > - создает новый класс T с только этими свойствами 'K' | 'Q'
// Omit<T, K> - противоположность Pick, исключает указанные свойства
// Exclude<T, U> - исключает из T типы, которые присваиваются U
// Extract<T, U> - извлекает из T типы, которые присваиваются U
// NonNullable<T> - исключает null и undefined из типа T


type ICar0 = {
	id: number
	name: string
	price: number
	yearBuild: number
}

type ICar01 = Pick<ICar0, 'id' | 'name'>


interface ICar {
	id: number
	name: string
	price: number
	yearBuild: number
}
interface Icar2 extends Pick<ICar, 'id' | 'price'>

//extends Omit<ICar ,'id'>  - расширил на эти типы ,НО без ID ( или без других)
interface ICarOmit extends Omit<ICar ,'id'> {
	// cod...
}

// Pick <ICar,'id'> - Создает новый тип, содержащий только свойства 'id' и 'name' из ICar
interface ICarPick extends Pick<ICar ,'id' | 'name'> {
	// cod...
}


//Partial<ICar>  - делает все типы/свойства станут НЕ ОБЯЗАТЕЛЬНЫМИ для ввода
interface ICarPartial extends Partial<ICar> {
	// cod...
}

interface ICar2 {
	//ТУТ ВСЕ ПОЛЯ НЕ ОБЯЗАТЕЛЬНЫ (?? СТОИТ ВЕЗДЕ - НЕ ОБЯЗЯТЕЛЬНОЕ ПОЛЕ)
	id?: number
	name?: string
	price?: number
	yearBuild? : number
}

//Required<ICar> - делает ВСЕ ПОЛЯ ОБЯЗАТЕЛЬНЫМИ
//Противоположность Partial
interface ICarRequired extends Required<ICar2> {
	// cod...
}
const car :ICarRequired = {
//все поля нужно обязетально ввести с типами
}


//все типы станут доступны ТОЛЬКО  для чтения  -  Readonly<ICar>
interface ICarReadOnly extends Readonly<ICar> {
	// cod...
} //ИЛИ МОГУ СРАЗУ УКАЗАТЬ РИДОНЛИ
const hello: Readonly<{test: string}> = {
	test: 'weqwe'
}
hello.test = 'eqweweqw' //ошибка-только читать можно

//Record -дает выбор как бы/ имя или цена может быть строкой или числом
type TypeCarRecord = Record<'name' | 'price', string | number>

const motoCar: TypeCarRecord = {
	price: 1231, // оба могут быть строкой или числом без ошибки
	name: 3123
}



//RETURN TYPE - Извлекает тип возвращаемого значения функции (string в этом случае)
type TypeGetName = () => string
//принимает в себя еще TypeGetName - и будет возращать строку
type Return = ReturnType<TypeGetName>


//Exclude - исклбчает по 1 названию - тут type Any = "max" | "ivan
type Any = Exclude<'max' | 'ivan', 'ivan| 'rina'>

//удаляет null или undefinend
type NotNull = NonNullable <string | number | 'rina' |null | 'ivan'>
//type Any = 'max' // только 'max', так как 'ivan' был исключён
