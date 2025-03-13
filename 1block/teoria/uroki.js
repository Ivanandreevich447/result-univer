/* работа со строками */
/*КОНКАТЕНАЦИЯ - СЛОЖЕНИЕ СТРОК*/

//  let a = 'ivan'
//  let b = 'техник'
//  console.log(`${a}  работает  :   ${b}ом`);  //в обратных ковычках `${a}     ${b}` -  пробелы и все учитываются и выводятся так же полностью/ переменные помещаем в ${переменная} сразу после без пробелов добавил окончание и выводмтся сразу

//  const c = 123;
// console.log(`${c}45`); // Выведет строку: '12345'
// console.log(`${c + 21}`); // Выведет строку: '144' - прям там посчитали

                        /* Получение длины строки  
                           ПЕРЕМЕННАЯ.length */
// let a = 'apple'
// console.log(a.length); //5


                        /*toUpperCase , toLowerCase - ВСЕ С БОЛЬШОЙ ИЛИ МАЛЬНОКЙ БУКВЫ */

// let name = 'ivanchuhuvashev'
// console.log(name.toUpperCase());


                              /*НАЙТИ СИМВОЛЫ - indexOf, includes
переменная.indexOf('букву,которую ищем') - выдаст индекс буквы/ если нет такой -1  - ищет только 1букву в тексте */

//переменная.includes('буква/слово') - выдаст тру или фолс - есть или нет в тексте такое

// const text = 'мой любимый язык програмирования javaScript'
// console.log(text.indexOf('б')); //6
// console.log(text.includes('язык')); // тру

// console.log(text[0], text[text.length - 1]);  //укажем индекс и выдаст символ ,который стоит на этом месте / тут выдаст 1 и послднюю букву

                        
                              /*  ОБРЕЗКА СТРОКИ - SLICE  
переменная.slice(1, 6)  1- с какого индекса начинаем обрезку строки и 6 - каким заканчиваем - выдаст только этот промежуток текста. можно ограничть только началом без 2 числа*/

// const text = 'мой любимый язык програмирования javaScript'
// console.log(text.slice(1, 14));

 
                                  /* ЗАМЕНА СИМВОЛА В СТРОКЕ - replace, replaceAll
переменная.replace('java', 'хуява') - ковычки!! 'java'- то,что хотим заменить в строке, 'хуява' - на что меняем 
меняет только ПЕРВОЕ значение
replaceAll - МЕНЯЕТ ВСЕ ТАКИЕ ЗНАЧЕНИЯ НА ЭТО
*/

// const text = 'мой любимый язык програмирования javaScript'
// console.log(text.replace('java', 'хуява'));
// console.log(text.replaceAll('о', 'О'));// заменил мальнькую на биг буквы


                             /* REPEAT
пременная.repeat(3)  3- сколько раз потоврить эту переменную*/

// const age = '29' // без ковычек не сработает- ВИДИТ ТОЛЬКО СТРОКИ
// console.log(age.repeat(5));



                        /* TRIM - УДАЛЯЕТ ЛИШНИЕ ПРОБЕЛЫ ДО И ПОСЛЕ ВВОДА ЗНАЧЕНИЯ */

// const nameUser = prompt('ваше имя, господин?') //есил ввести имя с пробелами ДО и ПОСЛЕ - trim- убирает их и выодит без пробелов

// console.log(nameUser.trim());



                              /* Математика и операторы сравнения */

// console.log(5 ** 3);  //возведение в степень
// console.log(10 % 3); // 1   - вычислить остаток от деления/ если число делится без остатка будет 0

                              
                                    /* ИНКРЕМЕНТ(++) И ДЕКРЕМЕНТ(--) */
// let capsulCofee = 0
// capsulCofee += 5    // так можно сократить строчку ниже
// capsulCofee = capsulCofee +5
// capsulCofee -= 6  // -6
// capsulCofee *= 3  // *3
// capsulCofee /= 3 // деление на 3
// console.log(capsulCofee);

// capsulCofee++ //значит прибавляем +1
// ++capsulCofee //
// console.log(capsulCofee++); // прибавили +1 , возвращает значение  до увеличения на 1

// console.log(++capsulCofee); // тоже +1 , но прибавление выводится сразу

// capsulCofee-- // точно такое же понятие как с ++

/* == и === */
/* !=  - НЕ РАВНО  */
/* математические функции */

// == сравнивает значения не важно строка или число и тд/ преобразует типы данных
// === строгое равенство и по типу тоже/ не преобразует типы данных

// console.log('1' == 1); //true тут сравнили 1 == 1
// console.log('1' <= 1); //true
// console.log('20' == '20'); // тру/  логика ТАКАЯ: СРАВНИВАЕТ сначала 2 и 2 равенство , дальше второе число и тд
// console.log('200' > '21'); //false!! / логика выше! 2 и 2/тру , 0 и 1 тут второй число больше и значение в целом неверно!
// console.log(true == 1); //true   , Number(true) = 1- так задано по дефолту
// console.log(false == 0); //true  , Number(false) = 0

// console.log('1' === 1); //false   , строка НЕ РАВНО числу/ разные типы данных, не преобразует типы данные

// console.log(Math.round(43.6)); // округление до целых
// console.log(Math.floor(43.84));  // округление вниз до целых
// console.log(Math.ceil(43.84));  // округление вверх до целых
// console.log(31.3123123.toFixed(2));  //toFixed(2) - округление до числа в скобках по колличеству цифр поле точки / ВОЗРАЩАЕТ НЕ число , а СТРОКУ

                      
                                      /* IF , IF ELSE , SWITCH CASE , ? : */

// const closingTime = 8
// const nowTime = 9

// // if(nowTime >= closingTime) {
// //      console.log( ' магазин закрыт!');
// // } else {
// //        console.log('добро пожаловать!!');
// // }

     
                                     // //КРАТКАЯ ЗАПИСЬ - ТЕРНАРНЫЙ ОПЕРАТОР

// const open = nowTime >= closingTime ? `добро пожаловать!!` : 'магазин закрыт!'
// console.log(open);

// //ЕСЛИ СРАВНИТЬ НАДО БОЛШЕ ЗНАЧЕНИЙ
// const job = 'front'

// if(job === 'front') {
//       console.log('100$');
// } else if (job === 'backend') {
//       console.log('250$');
// } else if (job === 'full') {
//       console.log('500$');
// } else{
//       console.log('50$');
// }

            /* SWITCH CASE-случай */
//  const job = 'full'

// switch(job) { //в ( переменная,значение которой сравниваем )
//       case 'front' : console.log('100$');  //case-случай, если равен 'front' : значит выведи это
//       break //прерывает код,чтоб не шел дальше, если значение уже нашлось
//       case 'backend' : console.log('300$');
//       break
//       case 'full' : console.log('500$');
//       break
//       default : console.log('зп не ясна'); //если значения нет- выведется это
// }

                  /* ЛОГИЧЕСКИЕ ОПЕРТОРЫ */
// || - ИЛИ
// && - И
// !  - НЕ

// Если все значения truthy (приводятся к true), то возвращает последнее из них.
// Если хотя бы одно falsy (приведется к false), то возвращает первое из них.

// true && "dog"   // dog   - Если первый операнд является истинным, то оператор логического И вернёт второй операнд:

// Все truthy
// console.log(1 && 'hello' && true); // true
// console.log(true && 1 && 'javascript'); // 'javascript'

// // Содержится falsy
// console.log(false && 0 && 'javascript'); // false
// console.log(1 && '' && false); // ''
// console.log(0 && '' && false); // 0

// const user = 'ivan' // вернут тру
// const userAge = user && 'АЦВАВЫАЫВАЫВ'   //задал оператор через переменную, если 1 значение -ТРУ - идет дальше/ если ФОЛС- выводит его
// console.log(userAge);

/* !(НЕ) */
// const hasKey = true

// if(!hasKey) { //если значение отличается от переменной - делай это
//       console.log('Доступ закрыт');
// } else {  // иначе выведи это
//       console.log('Доступ открыт');
// }

// const answer = prompt('сколько вам лет?')

// if(!answer) {
//       alert('введи полное колличество лет')
// } else {
//       alert (`вам ${answer} лет`)
// }

   
                                       /* ОПЕРАТОР ОБЪЕДИНЕНИЯ с null ??  */
// ДЛЯ || ложными значениями являются : false,0, '', nan, undefined, null
// console.log(0 || 'hello');
// //ЕСЛИ ПЕРВОЕ ЗНАЧЕНИЕ ЛОЖНОЕ -ВЫБИРАЕТ ДРУГОЕ ПОКА ИСТИНЫ НЕ НАЙДЕТ

// // ДЛЯ ?? ложными значениями являются : null, undefined
// console.log(0 ?? 'hello');

                    
                       
                           /* ЦИКЛЫ FOR  WHILE  do WHILE */

// FOR
// for (начальное значение; условие; шаг) {
//       // тело цикла console.log(i);
//     }

// for (let i = 1; i <= 6; i++) {
//   console.log(i);
// }

/* WHILE - СНАЧАЛА СМОТРИТ УСЛОВИЕ - ПОТОМ ВЫВОДИТ

      while (условие) {
            // цикл будет повторяться, пока условие истинно
          }  */

// let i = 0;
// while (i <= 5) {
//   console.log(i);
//   i++;
// }

//DO .. WHILE - сначала выводит значение -потом сверяет с условием!! минимум 1 значение выведет всегда

// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i <= 5);

//break - чтобы вручную остановить цикл полностью

// let i = 0
// while (i< 8) {
//       console.log(i);
//       i++
// }

// if(i === 4) break; // если i === 4 то прерви цикл на этой итерации/ в if 1 значение и можно запись делать так

//continue - на данной итерации стоп (не выведет) и цикл продолжится

// for(let i = 1; i <= 6; i++ ) {
// if(i === 4) continue;
// console.log(i);
// }

// let userPassword = prompt('Введите пароль')

// if(userPassword.length >= 3 && userPassword.lengt <= 30) { alert('Пароль валидный. Добро пожаловать в аккаунт!')
// } else {
//       alert('Пароль не удовлетворяет условиям! Перезагрузите страницу и попробуйте ввести его еще раз')
// }

// function reverseWords(str) {
//   str = "This is an example!";

//   str = str.split("").reverse().join()
//   console.log(str);
// }
// console.log(str());

// function reverseWords(str) {
//       str = 'The quick brown fox jumps over the lazy dog.' 
//       str = str.split("").reverse().join("").split(' ').reverse(' ').join(' ')
//       return str
//       }
//       console.log(reverseWords());



// / регулярное значение /   .charCodeAt - юникод букв(латиница маленькие буквы - начинаются с 97 , поэтому -96/ тогда а=1 будет)
// function alphabetPosition (text) {
//       text = text.replace(/[^a-z]/gi, '').toLocaleLowerCase().split('')
//       return text.map(letter => letter.charCodeAt() - 96).join(' ')
//   }




                  /* ДЕБАГИ -  СМОТРЕТЬ ВИДЕО ВКЛАДКА ДЕБАГ */

// С  ПОМОЩЬЮ console.log() - ВЫЗЫВАЕМ ВО ВСЕХ ПРОБЛЕМНЫХ МЕСТАХ НА НАШ ВЗЯГЛЯД И СМОТРИМ,ГДЕ НАЧИНАЕТСЯ ПРОБЛЕМА - РЕШАЕМ ЕЕ

// ЧЕРЕЗ БРЕКПОИНТЫ В БРАУЗЕРЕ(sources) ИЛИ ТУТ В vs code - слева жук и плей

//написать debugger в vs code на строке , где кажется косяк




                     /* ФУНКЦИИ */

            //колбэк - функция ,которая является аргументом другой функции
                  

                  //FUNCTION DECLARATION - МОЖНО ВЫЗЫВАТЬ ФУНКЦИЮ ДО ЕЕ ОПРЕДЕЛЕНИЯ!

// function names (параметр) {
// тело функции
// }
// names(аргументы функции)

// sum(4, 5) //функция определсяется ниже и вызвать моуг ДО
// function sum (a, b) {
//       console.log(a + b);
// }
// sum(5,3)


// function sum (a, b, callback) { // callback - передача функции в функию - ее задали отдельно/ вторую функцию не вызываем отдельно- она через 1ю вызывается
//     const result = a + b
//     callback(result)
// }

// function arrSum(res) {
//       console.log('резульат', res);
// }
// sum(4, 11, arrSum)    // МОЖЕМ НЕ ЗАДАВАТЬ ВТОРУЮ ФУНКЦ- А УКАЗАТЬ АНОНИМНУЮ ПРИ ВЫЗОВЕ 1 ФУНКЦИИ! НИЖЕ!


// function sum (a, b, callback) { 
//       const result = a + b
//       callback(result)
// }
// sum(4, 12, function(res) {
//       console.log('результат', res);  // ПРИ ВЫЗОВЕ КОЛБЭК ФУНКЦИИ МЫ ЗАДАЛИ ЕЕ АНОНИМНО БЕЗ ОТДЕЛЬНОЙ ФУНКЦИИ
// })



                  //FUNCTION EXPRESSION - не можем вызывать ДО определения функции/ 

// const sum = function (a, b) {
//       console.log(a + b);
// }
// sum(11, 22)

                        //СТРЕЛОЧНАЯ ФУНКЦИЯ - нельзя вызвать до определения
                  // const name = () => {

                  // }

// const sum = (a, b) => {
//       return a + b;
// }
// const res = sum(10, 12)
// console.log(res);


                        //СОКРАЩЕННАЯ ЗАПИСЬ ФУНКЦИИ
            // const sum = (a, b) => a + b

            // const res = sum(12, 33)
            // console.log(res);


// const addFive = (a, c) => a + 5 + c // a,c - нужны скобки

// const addFive = a => a + 5   // а - один параметр -то скобкт не нужны

// const res = addFive(21)
// console.log(res);


// function multiplay (a, b, callback) {
// const res = a * b
// callback(res)
// }
// console.log(multiplay(3,3));
// multiplay(5, 3, (multiplayRes) => {
// console.log(multiplayRes);
// } )


// const sayHello = (name, showMethod) => {
//       showMethod(`Hello, ${name}`);
//     };
    
//     // Используем стрелочную анонимную функцию в качестве коллбэка
//     sayHello("Vasya", (message) => {
//       alert(message);
//     });





                         /* ЗАМЫКАНИЯ */

                  // замыкание - процесс запоминания данных внтури функции и потом ты сможешь работать с этими данными
                  
                  //В ТЕЛО ФУНКЦИИ ПЕРЕДАЕМ НОВУЮ ФУНКЦИЮ
      
//       const arrMultiplyer = function(n) {
// return function() {
// return n * 10
//    }
//  }
//  const arr = arrMultiplyer(10)
//  const res = arr()
//  console.log(res);



// const createCounter = (arrowOne = 0) => { //задали параметру начальное значение(если не заадать потом-выдается оно)
//       return(arrowToAdd) => {
//             return arrowOne + arrowToAdd
//       }
// }

// const arr = createCounter(15) // создал переменную для начальной функции
// const res = arr(25) //новая переменная, которая равна выше переменной С ЕЩЕ НОВЫМИ ЗАДАННЫМИ ПАРАМЕТРАМИ
// console.log(res);

// //можено записать без второй переменной, а сразу в консоли обозначить параметр
// const arrTwo = createCounter(22)
// console.log(arrTwo(35));


//посложнее

// const createCounter = (arrowOne) => {
//       let counter = arrowOne
//       return(arrowToAdd) => {
//             counter +=arrowToAdd
//             return counter
//       }
// }



// const arr = createCounter(12) //задаем параметр функции(оно равно и counter)
// const res = arr(10) // задаем параметр замыканию
// console.log(res);
// console.log(arr(42)); // или так без строки выше

// //короче запись
// const arr = createCounter(50)
// console.log(arr(20));



// let discont = function(price) {
//       return price - 200
//     }
//     function printPrice (price, fn) { //fn- так назвал функцию дисконт и передал сюда(можно по-другому) , 
//       console.log(fn(price));
//     }
//     printPrice(500,discont) // вторым передая функцию , которую хочу определить в параметр(она уже сама функция и передеается просто в параметр)


                  //НАЗВАНИЯ ФУНКЦИЙ
// название функции должно сожержать ГЛАГОЛ(в большинстве случев)
// название функции должно БЫТЬ КОНКРЕТНЫМ-что делает функция
//Названия пишутся с маленькой буквы и в стиле lowerCamelCase: несколько слов пишутся слитно без пробелов, при этом каждое слово внутри фразы пишется с заглавной буквы (кроме первого слова).        

// 1-показывает лоудер
// function show(){} //показывать - НЕВЕРНО
// function showLoader() {} //показывать лоудер - корректно назвали


// 2-перенаправление на след страницу
// function next() {} //не ГЛАГОЛ не особа понятно ,что делает функция
// function goToNextPage {} // ИДИ  на след страницу- глагол есть и понятно ,что будет

// 3- выводит звуки животного
// function sound() {} // СУЩЕСТВИТЕЛЬНОЕ и особо не ясно ,что следует за этим
// function getAnimalSound () {} //конкретно выводит звук животного- ясно из названия




                  /* МАССИВЫ  -  в нем может хранится ,что угодно - числа,строки,объекты*/ 
            
// const pricePhohe = [250, 100, 5400, 700,203]
// console.log(pricePhohe);
// console.log(pricePhohe[3]); //выводим элемент с индексом 3
// console.log(pricePhohe.length - 1); // показать послдений элемент массива(.length - 1) узнаем длину - 1 тк индекс счет с нуля, а длина с 1..3

// /* массив.at() - .at() - метод,который принимает массив и выводит элемент , если -1 выводит с конца / -3 третий с конца */
// console.log(pricePhohe.at(-1));

//       //ДОБАВИТЬ ЭЛЕМЕНТ В КОНЕЦ МАССИВА массив.push(переменная)
//       //МОЖЕМ ДОБАВЛЯТЬ СРАЗУ НЕСКОЛЬКО ЭЛЕМЕНТОВ
// const iphone = 1000
// pricePhohe.push(iphone)
// console.log(pricePhohe);



//       //ДОБАВИТЬ ЭЛЕМЕНТ В НАЧАЛО МАССИВА массив.unshift(переменная)

// pricePhohe.unshift(800, 1200,20) // просто в скобках новый элемент пишем
// console.log(pricePhohe);

//                    //УДАЛЕНИЕ
// //удаление ПЕРВОГО элемента SHIFT()
// pricePhohe.shift()
// console.log(pricePhohe);

// //показать первый удаленный элемент -задать переменную для элемента и через shift вывести
// const onePrice = pricePhohe.shift()
// console.log(onePrice);

// //удаление ПОСЛЕДНЕГО эелемента .pop()
// pricePhohe.pop()
// console.log(pricePhohe);

// //показать этот удаленный эл-т
// const endPrice = pricePhohe.pop()
// console.log(endPrice);


//                   //ИЗМЕНЕНИЕ ЭЛЕМЕНТОВ МАССИВА - массив[индекс, который меняем] = новоое значение
// pricePhohe[4] = 'лям' //добавить можно любое значение
// pricePhohe[1] = 8000
// console.log();


                          //ПЕРЕБОР МАССИВА циклами

// const workName = ['ivan', 'vova', 'oleg', 'tina']

//                         // ЧЕРЕЗ for

//       for (let i = 0; i < workName.length; i++) {
// console.log(workName[i]); //выводит все элементы по очереди
// console.log(i);
      // }

                  //ЧЕРЕЗ for of 
                  //  for(значение новое для перебора массива of массив)
            // for(name of workName) {
            //       console.log(name);
            // }


                        //ЧЕРЕЗ FOR EACH
// workName.forEach(function() { }) // или ниже через стрелочную написать

//названия можно любые вообще, но лучше созвучные и понятные
//ЕСЛИ МЫ НЕ ИСПОЛЬЗУЕМ НЕКОТОРЫЕ ПАРАМЕТРЫ -ПРСОТО НЕ ПИШЕМ/ НАДО ИНДЕКС- НАПИШУ ЕГО И ВСЕ
//name - элементы массива
//index - индексы элементов
//array - выводится сам массив

// workName.forEach((name, index, array) => { 
// console.log(name);
// console.log(index);
// console.log(array);
// })


// const array = [1, 'two', true, false];
// array.forEach((item, index, array) => {
//   console.log('array item:', item);
//   console.log('item index:', index);
//   console.log('array:', array);
// });

  
//                   //МЕТОДЫ

//  const pricePhohe = [250, 100, 5400, 700,203]


//                   //MAP -  мы каждый элемент массива можем изменить(умножить там или прибавить КАЖДЫЙ)

//   //МЕТОД ВОЗВРАЩАЕТ НОВЫЙ МАССИВ, В КОТОРОМ ИЗМЕНИЛИ КАЖДЫЙ ЭЛ-Т С ПОМОЩЬЮ ФУНКЦ КОЛБЭК И ВНУТРИ ФУНКЦИИ МЫ ВОЗВРАЩАЕМ ИЗМЕНЕННЫЙ ЭЛ-Т
// //ЗАДАЕМ В .map(( КАК У for each ВЫШЕ ПАРАМЕТРЫ))

// const updatePrice =  pricePhohe.map((price, index, array) => {
//       return price * 2 // умножил каждый элемент в массиве
// })
// console.log(updatePrice);


//                   //filter - делает фильтр по параметру и их выводим

// const filterPrice = pricePhohe.filter((price, index, array) => {
//       // return price > 500 // фильтрем цена выше 500
//       return index % 2 === 0 // фильтр на четные индексы
// })
// console.log(filterPrice);



//                         //find - найдет эл-т первый по очереди и выведет


//  const pricePhohe = [250, 100, 5400, 700,203]

// const findPrice = pricePhohe.find((price) => {
//    return price > 200 //выведет первый эл-т ,который совпадет
// })
// console.log(findPrice);




//                   //findIndex - ищет индексы эл-тов

// const searchIndex = pricePhohe.findIndex((price) => {
//       return price === 700 //покажет номер индекса эл-та(если -1 значит не найден)
// } )
// console.log(searchIndex);


//                  //SOME(вернет true / folse ЕСЛИ ХОТЬ ОДНО СОВПАДЕНИЕ ЕСТЬ- ТРУ) , 
//                  // EVERY (вернет true / folse, ТРУ - ЕСЛИ ВСЕ СОВПАЛО И ВЕРНО )

// const somePrice = pricePhohe.some((price) => {
//  return price < 700 // если хоть 1 эл-т такой есть - тру / иначе фолс (
// } )
// console.log(somePrice);

// const everyPrice = pricePhohe.every((price) => {
// //  return price < 700 // ВСЕ ЦЕНЫ < 700 - нет ,есть и выше - ФОЛС
//  return price >= 100 // ВСЕ ЦЕНЫ >= 100 - да -ТРУ
// } )
// console.log(everyPrice);



                  //REDUCE() - можно использовать для подсчета суммы массива (вместо циклов)

// // acc - изначально равен числу,которое задаем после тела функции/ дальше к нему прибавляется эл-т массива и так каждый круг
// // item -  эл-т массива , который будет складываться
// // index - индекс -необязательный
// // array - просто сам массив - необязательный

// //  const value = array.reduce((acc, item, index, array) => {
// //  // тело функции
// // }, 0  )  (начальное значение обычно с нуля счет)

// const pricePhohe = [250, 100, 5400, 700,203]

// const sum = pricePhohe.fice((acc,price) => {
//       console.log(acc, price); // так вижу каждый шаг что чему равно
//       return acc + price
// }, 0);
// console.log(sum);




                  //МЕТОДЫ МАССИВОВ
                  //  SORT() - сортирует эл-ты и МЕНЯЕТ МАССИВ ИЗНАЧАЛЬНЫЙ

                  

//  const array = [2, 4, 1, 3, 7, 6, 5]; //СОРтировка чисел в массиве
      
// //  a и b - рядом стоящие эл-ты в массиве,которые сравниваем между собой и сортируем  
// // если не указать на массив чисел колбэк функц просто array.sort() - он переведет все в строки и соритирует по первому символу по возрастанию

// array.sort((a,b) => {
// // return a - b //сортировка по возрастанию
// return b - a //сортировка по убыванию

// })
// console.log(sort);

// const array = ['b', 'd', 'c', 'a', 'e', 'f', 'g']; //сортировка строк в масссиве
 
// console.log(array.sort()); // сотрирует по возрастанию строки и будет в алфафитном порядке

//ЕСЛИ СТРОКИ НУЖНО СОРТИРОВАТЬ В ОБРАТНОМ ПОРЯДКЕ- задаем колбэк с a, b
// array.sort((a, b) => {
// if(a < b) {   //ЕСЛИ ЗНАКМИ ПОМЕНЯТЬ В if - будет сортировка по возрастанию
//       return 1
// } if (a > b) {
//       return -1
// } return 0
// })
// console.log(array);



                  //МЕТОДЫ МАССИВА

                //  SPLICE(1, 2)  - меняет массив
//  - удаляет элементы из массива и, если это необходимо, заменяет их другими данными тут 1-индекс с которого начинаем удаление , 2- сколько эл-тов удалм после первого индекса ( 2 удалим после того индекса)  

// const cars = ['bmw', 'audi', 'lada', 'merin']

// //УДАЛЕНИЕ
// cars.splice(1, 2)
// console.log(cars); // 1 индекс - ауди , удалим от него(вкл его) две тачки 

// //УДАЛЕНИЕ И ЗАМЕНА ЭЛ-ТОВ   в '', ''  - пишем на что меняем
// cars.splice(0, 2, 'kia', 'urent', 'автобус') // первые два убрал и на их место подсатвил новые эл-т
// console.log(cars); 

// //ВОЗВРАТ УДАЛЕННЫХ ЭЛ-ТОВ - задать новую переменную
// const removeElements = cars.splice(0, 2, 'машинааа') // с 3 символа уже принмает на что заменяем
// console.log(removeElements); // удаленные эл-ты
// console.log(cars); // просто измененный массив


                //  .SLICE(1, 5) - не меняет массив 
                //  - извлекает и возращает(не удаляет) нам эл-ты.  тут 1- индекс с которого начинаем, а 3- кем заканчиваем извлечение(не включая его!) - нам выведутся элементы с 1 по 4 индекс(5 не включается)
// const array = [1, 3, 5, 7, 9, 11];
// const sliceArray = array.slice(1, 4)
// console.log(sliceArray); // новый обрезанный массив 3 5 7
// console.log(array); //старый массив - не изменился


                        //indexOf() -возвращает индекс искомого элемента массива. Если такого элемента не существует, он вернет значение -1.
                        //ОН ИЩЕТ ИНДЕКС 1ГО эл-та, подходящего под услвоие
// const array = ['one', 'two', 'three'];
// console.log(array.indexOf('one')); // вернет индекс 0 
// console.log(array.indexOf('four')); // -1 - такого эл-та нет


                        //INCLUDES() -проверяет, содержится ли искомый элемент в массиве или нет. Если содержится, то вернется значение true, иначе - false.
// const array = ['coffee', 'tea', 'coca-cola', 'mirinda'];
// console.log(array.includes('mirinda')); // такой есть - тру
// console.log(array.includes('cola')); // нету - фолс



                      //  Метод split() и метод join()
                      
                  //     .split() разбивает строку на массив из строк.
                  //     .join() объединяет все элементы массива в строку

// const items = 'Coffee, Cake, Water';
// console.log(items.split()); //данные строки стали массивом ИЗ 1 ЭЛ-ТА!
// //ЧТО БЫ РАЗДЕЛИТЬ ЭЛ-ТЫ В МАССИВЕ В (',') В '' УКАЖЕМ КАК РАЗДЕЛЯТЬ (через запятую)
// console.log(items.split(', ')); //эл-ты в массиве разделены

// const itemsArray = ['Coffee', 'Cake', 'Water']; //из массива в строку
// console.log(itemsArray.join(', ')); //строка с разделением запятой(в 'запятая+пробел') после запятой будетп отом пробел

// //МОЖНО НЕ УКАЗЫВАТЬ РАЗДЕЛИТЕЛЬ И ЭЛ-ТЫ СКЛЕЯТСЯ
// const array = ['Java', 'Script'];
// console.log(array.join('')); // JavaScript



                  //Объединение нескольких массивов в один 
                  //Метод concat() - в скобки массивы,которые нажно добавить
// const array1 = [1, 2, 3, 4];
// const array2 = [5, 6, 7, 8];

// const arrayAll = array1.concat(array2, array1, array2) //сколько хотим могу добавить массивов
// console.log(arrayAll); // выведет общий массив



//                         //Оператор SPREAD -новая переменная = [...массив, ...массив2, ...массив3]
// const array1 = [1, 2, 3, 4];
// const array2 = [5, 6, 7, 8];
// const arrayAll = [...array1, ... array2]
// console.log(arrayAll);




                  //ОБЪЕКТЫ


// const name = {
//       key : value, //ключ значение
//       key : value, 
//       key : {
//             key : value //внутри объекта еще объект
//       }

// }

// const developer = {
//       name : 'ivan',
//       job : 'tehnik',
//       age : 29,
//       jobInfoAll :{
//             type : 'ftontend',
//             framework : 'ReactJs'
//       }
// }
// console.log(developer); //показать весь объект
// console.log(developer.name); // имя объекта.key - вызов ключа у объекта
// console.log(developer.jobInfoAll)
// console.log(developer.jobInfoAll.type) //вызов объекта в объекте name.key.key

// //2 вариант вызова объекта через name['key']
// console.log(developer['name']);
// console.log(developer.jobInfoAll.framework) //если надо объект в объекте вызвать
// console.log(developer['jobInfoAll']['framework']); //если надо объект в объекте вызвать


// //если создать переменную равную ключу из объекта, то вызов делатется через []

// const key = 'name'
// console.log(developer[key]); // тут key- переменная выше, которая равна имени  и ее вызвали БЕЗ ''  !! 




//                         //ДОБАВЛЕНИЕ ОБЪЕКТОВ
// const student = {
//       id : 1,
//       programminLanguage : 'javaScript',
//        hasExperienseForReact : false,
// }
// console.log(student);

// student.experience = 6;
// student['age'] = 22
// console.log(student); //новый ключ уже добавлен и он есть во всем объекте
// console.log(student.experience); // новый объект


//                         //УДАЛЕНИЕ
// //DELETE
// delete student.hasExperienseForReact
// console.log(student);

//                         //ИЗМЕНЯТЬ ЗНАЧЕНИЯ ОБЪЕКТА
// //name.key = новое значение
// student.experience = 12
// student.id = 2 //меняю значения
// console.log(student);



//                         //КОРОТКАЯ ЗАПИСЬ СВОЙСТВ

// function createCar(name, year) {
//       return {
//             name : name,
//             year :year
//       }
// }

// // ЕСТЬ НА ТАКИЕ ПОВТОРЫ КОРЧОЕ ЗАПИСЬ
// function createCar(name, year) {
//       return {
//             name,
//             year
//       }
// }



//                     //Объект - ссылочный тип данных(единственный не примитивный тип).
//                     //  То есть в переменных типах object хранится не сам объект, а ссылка на него.

// const obj = { x: 10 };
// const objCopy = obj; // Копируется ссылка на объект(в других типах(число строка и тд) копируется значение  )
// objCopy.x = 20;

// console.log(obj.x); // 20 // Обратите внимание, в новой переменной objCopy хранится не копия оригинального объекта, а ссылка на него. То есть, по сути, в двух переменных хранится один и тот же объект, точнее ссылка на него.
// console.log(objCopy.x); // 20


// // РАЗНЦИА ЧЕРЕЗ ФУНКЦИЮ - ПРИМИТИВНЫЙ
// const x = 10;
// const updateX = arg => arg = 20;
// updateX(x); // МЫ ПОМЯНЛИ АПДЕЙТ, НО Х - КАК БЫЛА ВЫШЕ И НЕ МЕНЯЛАСЬ

// console.log(x); // 10 


// //ОБЪЕКТЫ ИЗМЕНЕНИЯ
// const obj = { x: 10 };
// const updateObjX = arg => arg.x = 20;
// updateObjX(obj); // В ФУНКЦ АПДЕЙТ МЫ МЕНЯЕМ ЗНАЧЕНИЕ ССЫЛКИ ,КОТОРАЯ ТАК ЖЕ ХРАНИСЯ С obj - ПОЭТОМУ МЕНЯЕТСЯ

// console.log(obj.x); // 20


            //ПРИМЕР С ЗАМЕНАМИ


// const setName = (entity, value) => {
//       if (typeof entity === 'object') {
//             entity.name = value
//       } else {
//             entity = value
//       }
// }
// const developer = {
//       name :'ivan'
// }
// let developerName = 'ivan'

// setName(developer, 'vanya')
// setName(developerName, 'vanya')

// console.log(developer);
// console.log(developerName);





// const users = [
//       {
//         name: 'Name2',
//         age: 23,
//       },
//       {
//         name: 'Name3',
//         age: 34,
//       },
//       {
//         name: 'Name1',
//         age: 12,
//       },
//     ];
    
//     // Используя циклы:
//     for(const user of users) {
//       console.log(user);
//     }




                       // Перебор объектов. Создание массивов из объектов (keys, values, entries)

                       //Цикл for...in -используется для пребора свойст ОБЪЕКТА , А for of - перебор МАССИВА -
//                        // ЭТО  старый способ
// const car = {
//       name : 'camry',
//       year : '2012',
//       isNew : false
// }
// // for (const key in car) {
// //       // console.log(key); // ключи перебор
// //       // console.log(car[key]); // значения перебор
// // console.log(`${key} : ${car[key]}`); // тут совместили для записи и то, и то
// // }


//                  //Object.keys(объект) -- ВОЗВРАТ  КЛЮЧЕЙ

// const keys =Object.keys(car) 
// console.log(keys);


//             // и Object.values(объект) -- ВЕРНЕТ ЗНАЧЕНИЯ ПЕРЕБОРОМ
//                               // {key : value}

// const value = Object.values(car)
// console.log(value);


//                   //Object.entries(объект)  -- выводит перебор сразу key : values  - ВЫВОДТ МАССИВЫ УЖЕ, А НЕ ОБЪЕКТЫ

// const entries = Object.entries(car)
// console.log(entries);




                        //РАБОТА С КЛЮЧАМИ ОБЪЕКТА
                        // КЛЮЧИ МОГУТ ИМЕНТЬ В ЗНАЧЕНИЯХ ПЕРЕМЕННЫЕ!

// const key = 'color'
// const car = {
//       name : 'nissan',
//       [key] : 'gold'
// }
// console.log(car); //[key] - в объекте будет замена key на переменную -color



                        //Symbol для создания ключей объекта
                  //В КЛЮЧЕ ОБЪЕКТА ИСПОЛЬЗУЮТ ТОЛЬКО СТРОКИ И SYMBOL
                  // он нужен для создания УНИКАЛЬНЫХ КЛЮЧЕЙ

                  //Также такие свойства не видны при переборе обычными способами (такими как цикл for...in или метод Object.entries()).


// const symbol1 = Symbol("id"); //ОНИ РАЗНЫЕ(УНИКАЛЬНЫЕ)
// const symbol2 = Symbol("id");

// console.log(symbol1 === symbol2); // false



                  // 1// Если в объекте есть два ключа с одинаковыми именами, то сохранится только последний:


// const car = {
//       name : 'nissan',
//       name : 'BMW'
// }
// console.log(car); // покажет только послдений из потворов

            //ВОТ КАК ЧЕРЕЗ symbol
// const car = {
//       [Symbol('name')] : 'bmw',
//       [Symbol('name')] : 'nissan'
// }
// console.log(car);  //ВСЕ ВЫВОДИТ


                        // 2// СОЗДАНИЕ СКРЫТЫХ СВОЙСТВ ОБЪЕКТА
                // ДЛЯ ПЕРЕБОРА Object.getOwnPropertySymbols(ОБЪЕКТ)
                
// const car = {
//       [Symbol('name')] : 'bmw',
//       [Symbol('name')] : 'nissan'
// }
// const symbols = Object.getOwnPropertySymbols(car) //для перебора СКРЫТЫХ СВОЙСТВ ОБЪЕКТА
// console.log(car);//Вывел скрытые объекты
// for (const symbol of symbols) {
//       console.log(`${symbol.description} : ${car[symbol]}`)
// }


                  //ЧТОБЫ ОБРАЩАТЬСЯ НА ПРЯМУЮ К СВОЙСТВУ - СНАЧЛА ЗАДАТЬ ЕМУ ПЕРЕМЕННУЮ И ПОТОМ ВЫЗВАТЬ

// const id = Symbol('id')
// const car = {
//       [id] : 1242,
//       name : 'pes'
// }
// console.log(car[id]); //вызов скрытого свойства



                  //ОБЪЕДИНЕНИЕ НЕСКОЛЬКИХ ОБЪЕКТОВ В ОДИН

// const developerBio = {
//       age : 25,
//       experiens : 2,
//       name : 'tanya'
// }

// const developerInfo = {
//       name : 'ivan',   //ОДИНКОВЫЕ КЛЮЧИ - ВЫВОДИТСЯ ПОСЛДЕНИЙ КАКОЙ ОБЪЕКТ УКАЗАЛИ
//       height: 172,
//       sity : 'sochi'
// }

// const developer = { //как В МАССИВАХ ...name объект
//       ...developerBio,
//       ...developerInfo,
//       name : 'anarina'  // МОЖНО ТУТ ДОБАВИТЬ ПАРАМЕТРЫ - ИМЯ ЭТО БУДЕТ СЧИТАТЬСЯ ПОСЛЕДНИМ
// }
// console.log(developer);


//                     //Если при объединении объектов в них встречаются одинаковые ключи, то применяются те, которые идут последними

//                     const obj1 = { x: 1, y: 1 };
// const obj2 = { x: 2, y: 2 };

// const unitedObj = {
//   ...obj1,
//   ...obj2,
//   y: 3
// };

// console.log(unitedObj.x); // Выведет 2
// console.log(unitedObj.y); // Выведет 3



            
                                          //Object.assign() - СТАРЫЙ СПОСОБ ОБЪЕДЕНЕНИЯ ОБЪЕКТОВ
      
// Object.assign(объект ,который принимает новые объекты в себя  , который копируем)

// Object.assign(developerBio, developerInfo) // объект МУТИРУЕТСЯ МЕНЯЕТСЯ
// console.log(developerBio); 



                              //ОПЦИОНАЛЬНАЯ ЦЕПОЧКА
                          //(Проблема несуществующего свойства) - При попытке обращения к свойствам вложенных объектов может случиться так, что сам вложенный объект не существует (то есть равен undefined или null). При этом будет выброшена ошибка.
// const developer = {
//       name : 'ivan',
//       job : 'tehnik',
//       age : 29,
//       // jobInfoAll :{   //ЗАКОМЕНТИРОВАЛ И ЗАБЫЛ ИЛИ НЕТУ ТАКОГО СВОЙСТВА
//       //       type : 'ftontend',
//       //       framework : 'ReactJs'
//       // }
// }

// console.log(developer.jobInfoAll); // выдаст андефайн и нижу мы у него ищем свойста-ошибка
// console.log(developer.jobInfoAll.type); // выдаст ошибку - нет свойства

//ЧТОБЫ ПРОВЕРИТЬ НАЛИЧЕ СВОЙСТВА И В СЛУЧАЕ ОБРАЩЕНИЯ НАПРЯМУЮ -НЕ ВЫДАЛО ОШИБКУ - ПРОВЕРЯЕМ ЧЕРЕЗ ОПЦИОНАЛЬНУЮ ЦЕПОЧКУ 
                  // if(developer?.jobInfoAll?.type) пишем свойсвто и перед КАЖДОЙ ТОЧКОЙ ?

// if(developer?.jobInfoAll?.type) {
//       console.log(`это фронтенд разраб`);  //если свойство существует
// } else {
//       console.log('это еще не фронт разраб'); //нет ничего- выдает иначе
// }



                        //ОПЕРАТОР SPREAD
// //МАССИВЫ
// const cityRussia = ['Казань', 'Екб', 'Мск', 'Спб']
// const cityEurope = ['берлин', 'лондон', 'прага']
// console.log(...cityRussia); //норм все выводит СТРОКУ вместо массива

// allcity = [...cityEurope,
//       'Тверь',  //объеденил массивы
//       ...cityRussia
// ]
// console.log(allcity);


// //ОБЪЕКТЫ
// const popularCityEurope = {
//       berlin : 10,
//       praha : 5,
//       paris : 5
// }
// const popularCityRussia = {
//       msc : 10,
//       spb : 9,
//       ekb : 4
// }
// // console.log(...popularCityEurope); //спред не работает на одном   объекте
// console.log({...popularCityEurope}); //  {...объект} - нужны скобки{} для вывода

// const popularCityWorld = {
// ...popularCityEurope,
// ...popularCityRussia
// }
// console.log(popularCityWorld);



                              //Math.max() - ПОИСК МАКСИМАЛЬНОГО И min() -минимального значения

// const numbers = [4, 32, 6, 94]
// console.log(Math.max(3, 11, 55, 4)); // выдвет ответ 55
// console.log(Math.max(numbers)); // метод не может вычислить значение у объекта - NaN
// console.log(Math.max(...numbers)); // метод SPREAD - выдаст строку и уже можно метод максимума применить







                              //ПРОВЕРКА НАЛИЧИЯ СВОЙСТВА В ОБЪЕКТЕ
                              //через оператор in   или 
                              // Object.hasOwn(объект, 'свойство,которое ищем')
// const city = {
//       berlin : 10,
//       praha : 5,
// }
// // if('name' in popularCityEurope) {   //ТУТ ЧЕРЕЗ in
// //       console.log(`естььь`);
// // } else {console.log(`нет свойства`);}

// if(Object.hasOwn(city, 'name')){  //ТУТ ЧЕРЕЗ in
//       console.log(`естььь`);
// } else {console.log(`нет свойства`);}



                        //PROTOTYPE
            


                  // замыкание - процесс запоминания данных внтури функции и потом ты сможешь работать с этими данными


                              //ДАТА И ВРЕМЯ (Date)
                              //new Date() - для создания даты(вывести в консоли - будет дата которая сейчас)
                              //ИЛИ В(УКАЖЕМ ДАТУ И БУДЕТ ОНА ВЫВОДИТЬСЯ)
                        //МЕСЯЦЫ ОТ 0-11 ИДУТ

                      //  new Date() может принимать в себя число (timestamp) - количество миллисекунд, прошедших с 1 января 1970 года. 
                  
// const date = new Date()
// console.log(date);

// //получаем дату и потом ее части например месяц

// const newDate = new Date(2000, 2, 16, 11, 12, 22, 222)
// console.log(newDate); //вся дата,которую задали год месяц день час мин сек

// console.log(newDate.getFullYear()); //вызываем ГОД который в перменной указали/ не забывать про () - вызов в конце
// console.log(newDate.getMonth()); //месяц и тд
// console.log(newDate.getHours()); // часы
// console.log(newDate.getMinutes); // минутки


                  //ДЕНЬ НЕДЕЛИ (0-ВС , 6- СБ)

// console.log(newDate.getDay());
// if(newDate.getDay() === 1) { //1 день недели-пн
//       console.log(`сегодня у нас понедельник, релаьно!`);
// }


                  //ИЗМЕНЕНИЕ ДАТЫ 
                  //переменная.setFullYear -год
                  //.setMonth  

// newDate.setFullYear(2025) //год  в (передаем значение даты)
// newDate.setMonth(9) // месяц
// newDate.setDate(23) // день в месяце
// newDate.setMinutes(32) //минуты
// console.log(newDate);


                              //Метод Date.parse() -анализирует строку на наличие даты и переводит в милисекунды

// console.log(Date.parse(new Date)); // покажет нашу нынешнюю дату в милисекундах



                      //  Расчет разности между датами: getTime()
                  // Date.now() - получить текущее время в мс

// console.log(new Date().getTime());  // Date.now()  - кратко

// const date1 = new Date(2005, 4, 10)
// const date2 = new Date(2004, 4, 24)

// console.log(date1.getTime()); // мс первой даты
// console.log(date2.getTime()); // мс 2 даты

// const difference = date1.getTime() - date2.getTime()
// console.log(difference); // разница между 2мя датами в мс

// console.log(difference / 1000 /60 /24); // мы делим на 1000(1с=1000мс),делим для минут ,часов и тд




                        //Деструктуризация — это синтаксис для быстрого извлечения данных из объектов и массивов в переменные. Упрощает код и делает его читаемым.

// const bio = {
//       // name: 'ivan',
//       age : 29,
//       adress: {
//             city: 'sochi'
//       }
// }
//как ПРОПУСКАТЬ КЛЮЧИ СМОТРЕТЬ НИЖЕ В ОБЪЕКТАХ!!!

//извлечение свойст

// const { name, age} = bio // тут в { задаю сразу ключи несколько для вывода из объекта} это равно bio.name bio.age 
// console.log(name, age); // вывожу сразу значения ключей


//переименование ключей

// const {name: firstName} = bio //переименовал имя в фирстнейм
// console.log(firstName);


//задать значения по умолчанию - если в объекте у ключа нет значения = будет по умолчанию или ВООБЩЕ НЕТ КЛЮЧА ТАКОГО  - создаст ключ/значение

// const {name = 'ваня', heigh = 172} = bio // елси в имени будет пусто=ваня, + рост задал кдюч/значение
// console.log(name, heigh);


//вызвать вложенные в объект объекты

// const {name, 
// adress: {city}
// } = bio 
// // вложенный  после ключей пишу объект:{ключи} и так можно продолжать дальше /перенос для удобства чтения сделал
// console.log(city);


                  //Деструктуризация массивов
// const number = [10, 30, 8, 44, 32]

//извлечение

// const [a, b] = number
// console.log(a);

//пропуск эл-тов - Использую пустую запятую, чтобы пропустить элемент массива. 

// const [a,, c,, d] = number  // ставим , - значит отделяем эл-т, когда его нету и ставим запятую -тоже будто он есть и отлеяем- код видит будто он есть и дает задать значение для след эл-та
// console.log(a,c,d); // пропустил 2 и 4 э-ты и выдал следущие


// const matrix = [[1, 2], [3, 4], [5, 6]]; // ПРИМЕР СЛОЖНЕЕ
// // Пропуск первого подмассива
// const [, [a, b]] = matrix;
// console.log(a, b); // 3, 4


// // Пропуск элемента внутри подмассива
// const [[x], , [ , y]] = matrix;
// console.log(x, y); // 1, 6


//rest опертор  - могу кому-то задать переменную и отсальные выведи вот так ...переменная новая для них / он выведет остальнео в отдельный массив

// const [a, b, ...other] = number
// console.log(other); // выдал после 2го эл-та остальные 

//значения по умолчанию

// const [a = 11, ...other] = number // если вместо 1 эл-та будет андефан -выводит по умолчанию это




                  //В ФУНКЦИЯХ ДЕСТРУКТУРИЗАЦИЯ

// // Объект как параметр
// function greet({ name, age }) {
//       console.log(`Привет, ${name}! Тебе ${age} лет.`);
//     }
    
//     greet({ name: "Иван", age: 29 }); //функция( {тут указвваем так же переменные и значения: 'иван'} )    / в () вызове пишем {}
//     // Массив как параметр
//     function sum([a, b]) {
//       return a + b;
//     }
//     console.log(sum([5, 10])); // тут укажем как в массиве []

// //задачи
// const colors = ["red", "green", "blue", "yellow", "pink"];
// /*С помощью деструктуризации извлеките:
// Первый элемент (red).
// Третий элемент (blue).
// Пятый элемент (pink). */
// const [red, , blue, , pink] = colors
// console.log(red, blue,pink);


// const mixedData = [ 
//       { name: "Alex", age: 25 }, 
//       "hello", 
//       [100, 200, 300], 
//       undefined 
//     ];
// // //     Извлеките:
// // //     name из первого элемента массива (объекта).
// // //     Второй элемент массива (строку "hello").
// // //     Третий элемент из вложенного массива [100, 200, 300] (значение 300).
// // //     Четвертый элемент (значение по умолчанию "default").

// const[{name}, hi, [, , a], b = "default"] = mixedData  //undefiend - принимает умолчание
// console.log(name,hi, a, b);






//ЗАДАЧА НА ВВОД ДОНАТА И ВЫВОД ДАТЫ С СУММОЙ ДОНАТОВ/ ПРИ ВВОДЕ 0 - ЦИКЛ ВВОДА ДОНАТОВ КОНЕЦ (сейчас 5 донатов)

function task1 () {
      class Donate  {
            constructor(amount) {
            this.amount = amount,
            this.date = new Date().toLocaleString('ru-RU')
            }
            
            
            }
            
            
            class DonationList {
                  constructor() {
                        this.donations = []
                        this.total = 0
            
                  }
            addDonation (amount) {
            const donation = new Donate(amount)
            
            this.donations.push(donation)
            
            console.log(`Добавлен новый донат: ${donation.amount} (Дата : ${donation.date})`);
            
            this.total += donation.amount
            
            }
            showAllDonations () {
                  console.log('Все донаты :', this.donations);
                  console.log('сумма', this.total);
            
            }
            
            }
            
            
            class App  {
                  constructor() {
                        this.donationList  = new DonationList()
                  }
            
                  start() {
                  let amount
                  for(let i = 0; i < 5; i++) {
                       const inputAmount = (prompt(`введи донат(у тебя 5 донатов)`))
                       if (inputAmount === null ) break;
            
                        amount = Number(inputAmount)
            
                        if(amount === 0) break
                       if(!isNaN(amount) && amount > 0) {
                        this.donationList.addDonation(amount)
                       } else {
                        console.log(`не верно ты донмат прописал`);
                       }
            
            
                  }
            this.donationList.showAllDonations()
            
            
            
            
                        // const amount = Number(prompt("Введите сумму доната:")); // Преобразуем строку в число
                        // if (!isNaN(amount) && amount > 0) {
                        //   this.donationList.addDonation(amount);
                        //   this.donationList.showAllDonations();
                        // } else {
                        //   console.log("Некорректное значение! Попробуйте снова.");
                        // }
            
                  }
            }
            const app = new App()
            app.start()

}

// task1()

