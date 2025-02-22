
/*7.1 */


// let health = prompt ('Введите число параметра "здоровье" для персонажа')
// console.log(health);
// if (health <= 0 || !health) {
//   alert('Параметр "здоровье" должен быть больше нуля!') 

// } else {
//   alert(`Параметр "здоровье" равен ${health}`); // выводил не верно - обратные ковычки
// }
// console.log(Health);  // не нашел такой переменной- с мелкий буквы пишем



/* 7.2 */

// const temperatureInCelsius = Number(prompt('Введите температуру в градусах Цельсия'));

// console.log(typeof temperatureInCelsius);
// if (temperatureInCelsius === 0) {// сравниваем 0 и строку(промпт-строка)
//    alert('0 градусов по Цельсию - это температура замерзания воды')
// } else if (temperatureInCelsius > 0) {
//    alert('Для замерзания воды температура должна быть 0 градусов по Цельсию либо ниже');
// }

// const temperatureInFahrenheit = temperatureInCelsius * 9 / 5 + 32;
// // console.log(temperatureIncelsius); // C - большая должна

// alert(`${temperatureInCelsius} градусов по Цельсию - это ${temperatureInFahrenheit} по Фаренгейту.`); // $



/* 7.3 */

// const salaryOfJuniorDeveloper = 500;
// const numberOfJuniorDevelopers = 3;
// let taxPercentage = 13;
// let totalJuniorDevelopersSalary = 0;

// console.log(totalJuniorDevelopersSalary); //андефайн - а заданы вещде числа в задаче, укажу начальную позицию = 0
                
// for (let i = 0; i < numberOfJuniorDevelopers; i += 1) {
//    const salaryWithTax = salaryOfJuniorDeveloper - (salaryOfJuniorDeveloper*taxPercentage/100);
//    totalJuniorDevelopersSalary += salaryWithTax;
// }
// console.log('totalJuniorDevelopersSalary', totalJuniorDevelopersSalary);




/* 7.4 */


// const numbers = [10, 4, 100, -5, 54, 2]
// let sum = 0;

// // Через цикл for
// for (let i = 0; i < numbers.length; i += 1) {
//    /* numbers[i] = numbers[i] ** 3; //массив сразу за 1 итерацию меняется весь
//     console.log(numbers[i]);*/
//     numbersArr = numbers[i] ** 3;
//     // console.log(numbersArr);// массив не сразу весь возвелся в степень и изменился, а по 1 объукту в массиве-по очереди
//     // sum += numbers[i];
//     sum += numbersArr;

//     // console.log(sum); //сверяю как выводит суммы
// } 
// console.log(sum); // 1158411

// // Через цикл for of

// sum = 0;
// for (let num of numbers){
//     num = num ** 3;
//     sum += num;

// } 
// console.log(sum); // 1158411




/* 8.1 */

// function getName1(name) {
//   return `имя равно ${name}`
// }
// const res = getName1('ivan1')
// console.log(res);


// const getName2 = function(name) {
//   return `имя равно ${name}`
// }
// const result = getName2('ivan2')
// console.log(result);


// const getName3 = name => `имя равно ${name}`//кратко

// const getName3 = name => {
//   return `имя равно ${name}`
// }
// const resultGetName3 = getName3('ivan3')
// console.log(resultGetName3);



/* 8.2 */



// function getSumOfNumbers (number, type = 'odd') {
//     if(isNaN(number) || !number) {
//       return NaN
//     }
// let sum = 0;
  
// for (let i = 0; i <= number; i++) {
//   if (type === 'odd' && i % 2 !== 0) {
//     sum += i; // Суммируем только нечётные
//   } else if (type === 'even' && i % 2 === 0) {
//     sum += i; // Суммируем только чётные
//   } else if (type === '') {
//     sum += i; // Если тип пустой, суммируем всё
//   }
// }

// return sum;
// }

// console.log(getSumOfNumbers(10, ''));


/* 8.3 */

// function getDivisorsCount (number) {
//   if(isNaN(number) || !number) { //если параметр не число а NaN - тру будет и , если задан !number  -  читается как НЕ задан параметр
//    return NaN
//   } else if(number < 0 || !Number.isInteger(number)) {
//     alert(`number должен быть целым числом и больше нуля!`)
//   } else if (Number(number)) { // если пишу отдельно ниже без иф - на строку реагирует алерт , но и ответ выдаст
//     let countDivisors = 0
//     for(let i = 1; i <= number; i++) {
//       if(number % i === 0) { //если число делится на i без остатка - делитель подходит
//         countDivisors++ // если итерация верная - то к начальнону 0 + 1 идет
//       }
//   }
//   return countDivisors

// } }

// console.log(getDivisorsCount('12'));//андефайн
// console.log(getDivisorsCount(12));// 6

// // console.log(typeof 0); // для себя проверки
// // console.log(typeof isNaN(0));




/* 9.1 */

// const peopleWaiting = ['Кристина', 'Олег', 'Кирилл', 'Мария', 'Светлана', 'Артем', 'Глеб'];

// const copyPepleWaiting = peopleWaiting.slice()  //копирую массив,чтоб дальше работать с ним - не измененным
// // console.log(copyPepleWaiting); // выводит норм

// function giveParcel() {
// let person = peopleWaiting.shift()
//     // alert(`${getGive} получил(а) посылку. В очереди осталось ${peopleWaiting.length} человек`)
//     console.log(`${person} получил(а) посылку. В очереди осталось ${peopleWaiting.length} человек`);
//     return person
// }
// // giveParcel()
// // console.log(peopleWaiting.length);

// function leaveQueueWithoutParcel() {
//     let deletPeople = peopleWaiting.shift()
//     //   alert(`${deletPeople} не получил(а) посылку и ушел(ла) из очереди`)  
//       console.log(`${deletPeople} не получил(а) посылку и ушел(ла) из очереди`); //для себя ,чтоб видеть
//       return
//     }

// // leaveQueueWithoutParcel()


// for(let i = 0; i < copyPepleWaiting.length; i++) {
// //    console.log(copyPepleWaiting);
// //    console.log([i]);
// //    console.log(i);
// //    console.log(peopleWaiting.length);

// if (i < 3) {
//     giveParcel()
// } else  {leaveQueueWithoutParcel()}   
// }



/* 9.2 */


// function getSumOfSequence (number) {
//     let getNumber = []
//     for(let i = 1; i <= number; i++) {
//         getNumber.push(i)
//     }

//     let firstNumber = getNumber.shift();
// let endNumber = getNumber.pop()
// // console.log(firstNumber, endNumber);
// console.log(firstNumber + endNumber);

// }
// getSumOfSequence(109)




/* 9.3 */

// const coffees = ['Latte', 'Cappuccino', 'Americano'];

//  let coffeeName = prompt(`Поиск кофе по названию:`).trim()
// coffeeName = coffeeName[0].toUpperCase() + coffeeName.slice(1).toLocaleLowerCase() //сначала 1 букву аппер, слайс отделил слово со второй буквы и их ловеркейс 

// console.log(coffeeName);

//  const coffeeExists = coffees.findIndex((name, index) => {
//     return name === coffeeName
//  })
// //  console.log(coffeeExists); //индекс
// //   console.log(coffeeExists+1); // инд+1 = номер по счету массива

//  if(coffeeExists !== -1) {
//     console.log(`Держите ваш любимый кофе ${coffeeName}. Он ${coffeeExists + 1}-й по популярности в нашей кофейне`);
//  } else{ console.log(`К сожалению, такого вида кофе нет в наличии`);}




/* 9.4 */

// const coffees = ['Latte', 'Cappuccino', 'Americano'];
// const prices = [1.5, 1, 2];

// const updatedPrices = prices.map(costs => {
//     return costs * 1.5
// })
// // console.log(updatedPrices);

// // вызов функции внутри функции/ создал переменную и обращался к индексу массива снуружи
// updatedPrices.forEach((price, index) => {
//    const coffee = coffees[index] 
//    console.log(`Кофе ${coffee} сейчас стоит ${price} евро`);
//     })




/* 9.5 */
// //хотел фильтры объеденить как-то , но не получилось

// let clientsEstimations = []

// function askClientToGiveEstimation() {
//     for(let i = 0; i < 5; i++) {
// const estimation = Number(prompt(`Как вы оцениваете нашу кофейню от 1 до 10?`))
// if(estimation >= 1 && estimation <= 10) {
//     clientsEstimations.push(estimation)
// }
// } return 
//     }
//     askClientToGiveEstimation()
//     // console.log(clientsEstimations.length);
//     // console.log(clientsEstimations);

// const goodEstimations = clientsEstimations.filter((estimation) => {
//     return estimation > 5
// })

// const notGoodEstimations = clientsEstimations.filter((estimation) => {
   
//     return estimation <= 5
    
// })
// console.log(`Всего положительных оценок: ${goodEstimations.length}; Всего отрицательных оценок: ${notGoodEstimations.length}`);


  
/* 9.6 */
//ели все разом раскомментировать - сумма наклдадывается, нужно по очереди

// const numbers = [10, 4, 100, -5, 54, 2];
// let sum = 0

// const numberInCube = numbers.map(num => {
//     return num ** 3
// })
// console.log(numberInCube);



// // //reduce()

// const sumNumbers = numberInCube.reduce((acc, num) => {
// return acc + num
// },0)
// console.log(sumNumbers);

// //for
// for(let i = 0; i < numberInCube.length; i++) {
//     sum += numberInCube[i]
// }
// console.log(sum);


// for..of

// for(num of numberInCube) {
//     sum += num
// }
// console.log(sum);

// //forEach
// numberInCube.forEach(num => {
//     sum += num
// })
// console.log(sum);