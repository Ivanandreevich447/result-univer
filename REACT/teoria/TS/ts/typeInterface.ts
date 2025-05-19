			//ТИПЫ И ИНТЕРФЕЙСЫ   --  TYPE & INTERFACE

//ЧТОБ РАСШИРИТЬ ТИП - ПИШЕМ НОВЫЙ ТИП / и & новый тип
//ЧТОБ ИНТЕРФЕЙС - ОН ЕКСТЕНДИТСЯ от прошлого интерфейса


//интерфейс
interface IUserAge {
	age: number
}
//интерфейс --  IUser extends IUserAge
interface IUser extends IUserAge {
	name: string
	email: string
}

const user2 : IUser = {
	email: 'bos123@mail.ru',
	name: 'ivan',
	age: 29
}


//ТИПЫ
type TypePerson = {
	age:number
}
//тип
type TypeUser1 =  {
	name: string
	email: string
}& TypePerson // добавил еще тип сюда

const user1 :  TypeUser1 = {
	email: 'bos123@mail.ru',
	name: 'ivan',
	age: 29
}


