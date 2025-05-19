// FC -функциональный компонент - когда возращает jsx- пишем FC<наш тип>


//РАЗНИЦА type & interface -
//type- модно использовать | или или   / и не обьеденяются
// interface - если задать 2одинаковых имени - они объединятся в 1!! (можно указать нечаянно в другом файле и они сольются - будут ошибки потом)
	//РАСШИРЕННЫЕ ТИПЫ

type TypeIsNumber<T> = T extends number? 'yes' : 'no'

type Type1 = TypeIsNumber<number> //покажет yes
type Type2 = TypeIsNumber<string>//покажет no



			//темплейт литералы

//задаю типы для марок и цен
type TypeBrand = 'bmw' | 'mclaren' | 'mersedes'
type TypePrice = '10000' | '20000' | '35000'

//объединяю типы как бы скрещивая
type TypeCar = `${TypeBrand} ${TypePrice}`

//command+esc - посдказки и могу указать только вот эти скрещенные пары - иначе ошикба
const car11: TypeCar = "mersedes 10000"







//вот так записывать | ИЛИ | ИЛИ
function o14(config) : {data: number} | null | undefined {
	if(config.status === 'ok') {
		return {data: 12312}
	}
	else if (config.status === false) {
		return null
	}
	return undefined
}


//ВОТ ТАК ЗАПИСЫВАТЬ  И &  И
//задаю новый тип и указываю старый & старый
type o16_User2 = o15_Car & o15_User

type o15_Car = {
	color: string,
	speed: number,
	left: boolean,
}

type o15_User = {
	name: string,
	age: number,
}

function renderUser(user: o15_User) {}
function renderCar(user: o15_Car) {}
//тут 2 типа разных так или сразу как обьеденили
function renderUserCar(user: o15_User & o15_Car) {}
function renderUserCa2r(user: o16_User2) {}



//ЕЩЕ ЗАПИСИ ИЛИ С МАССИВАМИ (string | number)[] -нужно типы в скобки положить
const o16: string[] = ['11', '33', '423']
const o17:(string | number)[]  = [123, '33', '423', 3123]
const o21: Array<string | number> = ['11', '33', 123, 343]
