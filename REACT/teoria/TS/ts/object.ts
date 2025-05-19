const o1: number = 22  //числа,NaN, Infinity
const o2: string = '211' // все в ' qdqdd'
const o3: boolean = true // false
const o4: null = null
const o5: undefined = undefined
const o6: any = true  // можем положить все ,что угодно-тайпскрипт перестает работать
// const o7: void - с функц когда ничего не возвращает

type TypeUser = {
	name:string,
	age:number,

}
type TypeAddress = {
sity: string,
country: string
}


const user : TypeUser = {
	//задал выше какие типы есть у него- подсказка на оптион+ еск
	age:29,
	name: 'Ivan'
}

const address: TypeAddress = {
country:'Russia',
sity:'sochi'
}

//объеденить 2 переменных выше - через спред  + типы сложить
let common: TypeAddress & TypeUser

common = { //спред
	...user,
	...address
}
