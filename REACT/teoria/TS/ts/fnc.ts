let array:string[] //значит массви задан из строк
let array2:number[] //значит массви задан из xbctk

array = ['1', '3', '4']
array2 = [1, 3, 543]

//чтоб сделать массив не изменяемым- только получить данные можно
//после имени : ReadonlyArray<number> - массив чисел не изменяемый
const numbers: ReadonlyArray<number> = [1, 4, 5, 6]

numbers[0]//получу данные
numbers[0] = 3 //менять нет - ошибка- только для читения


//КОРТЕЖ -укажу сразу какие типы в какой очереди должны будут стоять в массиве
type TypeArray = [number, string, null]
const newArray:TypeArray = [1, '42', null]



//ФУНКЦИИ

//так в возврате могу только это указать -типизировал
type typeChannelReturn = {
	name: string
}

function getChannel(name: string):typeChannelReturn {
	return {name:'eqw'} //name: 'строка'
}

//укажу тип ,что функц принимает имя -строку => отдает тип ,который уже задавали выше
//запись кратче в функции будет только на стрелочные функц
type typeChannelFunction = (name:string) => typeChannelReturn
//стрелочная функц
const getChannelName: typeChannelFunction = (name) =>  {
	return {name:'eqw'} //name: 'строка'
}

//рест оператор - я типизировал ,что оператор остатка -массив чисел вот так : number[]
 const getNumbers = (...numbers: number[]) => {
	return numbers
 }


 //стрелочная функция



type User = {
name: string,
age: number,
car?: {color:string} //?- не обязательное поле
}

const o9: User = {
	name: 'Alex', age : 29
}

interface User2 {
	name:string,
	age: number,
	car?: {color: string}//?- не обязательное поле
}

const o10: User2 = {
	name: 'Alex', age : 29, car: {color: 'red'}
}

//массив строк или чисел можно задать
const o11:string[] = ['111', '222', '333']



//ниже задаю типы и тут указываю- у нас массив объектов
const o13: o13[] = [
	{
		name: 'alex',
		age: 20,
		hasJob: true,
		getMoreInfo: (config) => {
			return {data: 12312312}
		}
	},
	{
		name: 'ivan',
		age: 20,
		hasJob: false,
		getTest: function test() {
			return 5
		},
		getMoreInfo: (config) => {
			return {data: 12}
		}
	}
]
//все выношу отдельно
type o13_config = {
	status: string
}

type o13_getMoreInfo = {
	data: number
}

type o13 ={
	name: string,
	age:number,
	hasJob: boolean,
	//так описываются функции / имя:(аругмент)=> {} -тут без скобок тк сразу перменную задали
	getMoreInfo?: (config: o13_config)=> o13_getMoreInfo
	//если функц задана не стрелочная-тут пишем все равно так
	getTest?: () => number
}





 		//ФУНКЦИОНАЛЬНЫЕ ПЕРЕГРУЗКИ

//  function getCar(name: string): string
//если есть прайс? - то тип = число, нет прайса - просто тип строку принимает и возращает
 function getCar(name: string, price?: number): string

 function getCar(name: string, price: number): string {return price? `Название${name}, цена ${price}` : `Название ${name}`}

const car1 = getCar('bmw') // просто строка
const car2 = getCar('bmw', 10000)  // + еще и прайс- число
const car3 = getCar('bmw', 10000, 'df')  // 3ий аргумент + строка не была задана в типизации - ощибка




 					//КЛАССЫ

class Car {
	//типизриуем все через :
	name: string
	price: number
	constructor(name: string, price :number) {
		this.name = name
		this.price = price
	}
	//в методе отдаем : строку
	private getInfo() : string {
		return `${this.name}-${this.price}`
	}


	protected getInfo2() : string {
		return `${this.name}-${this.price}`
	}
	//тут в классе getInfo - вызывается
newCar() {
	this.getInfo()
}
}
 //в типизации указывал строку и число-ок --но модификатор PRIVAT- НЕ работает вне класса
new Car('bmw' , 1312321).getInfo()

class Bus extends Car {
	constructor(name: string, price :number) {
	super(name,price)
	}

	test(){ //это было ПРИВАТ- не будет раб тут
		return this.getInfo
	}
	test2(){//PROTECTED - раб тут
		return this.getInfo2
	}
}

					//МОДИФИКАТОРЫ
//public- по умолчанию
//private - работает только внутри данной функции/класса
//protected - работает внутри класса + в классе от которого создан(extend)




			//ЛИТЕРАЛЬНЫЕ типы - Literal Types -представляют конкретные значения, а не диапазоны возможных значений.

//укажу ИМЕННО такие значения - другие не подойдут
function o20 (a: 5| 6 | 8){

}
o20(5)
//в функцию можно задать только эти строки
function o19 (a: 'alex' | 'ivan' | 'rina' ){

}
o19('rina')



			//ДВОЙНОЕ ПРИВЕДЕНИЕ ТИПОВ - as unknown as НОВЫЙ тип(string);
	//сначала приводим к as unknown(говорит- я не знаю что там лежит-обнулил тип ) и дальше as новый- number пусть это будетт число

		//МОЖНО ИСПОЛЬЗОВАТЬ ПОСЛЕ создания массивов / обьектов / при обращении к свойствам обьекта
const one = [] as unknown as number
const two = {} as unknown as string
//обращаение к свойству объекта two.name - у цифры же нет имени
(two as unknown as {name:string}).name


//+ дргие виды @ts-ignore

function o18(status: 'ok' | 'error') {
	if(status === 'ok') {

	}
	else if(status === 'error'){

	}
	return null
}
// as unknown as new
const o18Result  =o18('ok') as unknown as boolean
const o18Result3  =o18('ok') as unknown as{ name: string}

//any - игнор типа-клади хоть что   - тут
const o18Result2: any = o18('ok')


//@ts-ignore  - ГОВОРИТ СТРОКУ НИЖЕ ИГНОРЬ
const o18Result1 : boolean =o18('ok')



