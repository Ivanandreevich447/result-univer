        
        
                //что такое "this" и зачем он нужен?

               // Ключевое слово this указывает на объект, конкретное значение которого зависит от текущего контекста.
                //У СТРЕЛОЧНОЙ ФУНКЦИИ НЕТ СВОЕГО THIS!!!
                //В ОБЪЕКТЕ НЕ ПИШЕМ СТРЛЕЧН ФУНКЦ
                
            //указывает на объект, конкретное значение которого зависит от текущего контекста.

// const user = {
//     name : 'ivan',
//     dateOfBirth : 1995,
//     getName() {
//         /*return user.name */ //можно так, но тогда функция будет привязана конкретно к объекту юзер и его имени при вызове

//         return this.name // this - ссылается на данный объект просто, не конкретно user и можно функцию в дургом месте писать так же
//     },


//      calculateAge() { // или так функцию писать в объектах
//         const yearNow = new Date().getFullYear() //год сейчас, не зыбывать ()
//         return yearNow - this.dateOfBirth // такая функция может в любом месте работать из-за this- у любого пользователя с такими ключами, а не так бы только у этого юзера
//     },
//     getAllInfo : function() { //функия как можно написать или как выше
// const age = this.calculateAge()
// console.log(`имя: ${this.name}, врзраст: ${age}`);
//     }
// }
// console.log(user.getName());
// console.log(user.calculateAge()); // НЕ ЗАБВАТЬ() ПРИ ВЫЗОВЕ ФУНКЦ!!
// user.getAllInfo()




//                 //Стрелочные функции отличаются от обычных в плане работы с this. Они не имеют своего "собственного" this, а берут его из внешней функции, в которой определена эта стрелочная функция. Если стрелочная функция не вложена в обычную функцию, то значением this будет глобальный объект.

// // 1. Глобальная стрелочная функция
// const globalArrowFunc = () => console.log(this);

// //2. стрелочная в объекте
// const obj = {
//     objArrow: () => console.log(this),
//     objFunc() {
// //3. вложенная стрелочная функ
// const nestedObjFunc = () => console.log(this);
//     nestedObjFunc();
//     }
// }
// globalArrowFunc(); // window  функц указывает на глобальный объект/поиск
// obj.objArrow(); // window / тоже на глобальный
// obj.objFunc(); // object //тут фнукц указывает на внешнюю функц на которую ссылаемся


// function showYear() {
//     console.log(this.year);
//   }
  
//   showYear(); // Выведет: undefined /вызов функции без данных вообще
  
//   const car = { name: "Toyota Corolla", year: 2017 };
//   car.showYear = showYear; // Добавляем метод
//   car.showYear(); // Выведет: 2017



//                         //BIND, CALL, APPLY

                            //Метод call() позволяет вызвать функцию с указанным значением контекста this. 
//                             // /В качестве аргументов метод call() принимает: объект, который будет подставлен в качестве контекста this.
//                             //  список аргументов функции через запятую.
// const car = {
//   name: "Toyota Corolla",
//   showName() {
//     console.log(this.name);
//   }
// };

// const bike = {
//   name: "GT Avalanche"
// };
// car.showName() // вызов у машины функции

// //ЧТОБЫ ВЫЗВАТЬ ЭТУ ФУНКЦИЮ У МОТОЦИКЛА-У НЕГО НЕТ В ОБЪЕКТЕ ФУНКЦ ВООБЩЕ- МОГУ ОДОЛЖИТЬ ЕЕ у CAR!! с помощью CALL()

// car.showName.call(bike) //в скобках объект у кого хочу вызвать функц


                            //Метод apply()

                    //Метод apply() работает практически так же, как call(). Единственное отличие состоит в способе передачи параметров функции. Метод call() принимает параметры в виде списка через запятую, а apply() — в виде массива:
                   // func.apply(context, [arg1, arg2, ...]) context-объект 

// function showInfo(key1, key2) {
//   console.log(this[key1] + " " + this[key2]);
// }
// const car = {
//     name: "Kia Rio",
//     year: 2021,
//     modification: "1.6 AT"
//   };
  
//   // call
//   showInfo.call(car, "name", "year"); // Kia Rio 2021
//   showInfo.call(car, "name", "modification"); // Kia Rio 1.6 AT
  
//   // apply - тоже самое выводит-только используем []
//   showInfo.apply(car, ["name", "year"]); // Kia Rio 2021
//   showInfo.apply(car, ["name", "modification"]); // Kia Rio 1.6 AT




                    //Метод bind() - ТОЛЬКО ЗАДАЕТ КОНТЕКСТ THIS- для вызова нужно задать вызову переменную - и мы можем скопировать вызов функц с нужным this!

// const mainHero = {
//     fullName : 'spiderMan',
//     health: 90,
//     strenght : 5,
// }

// const badHero = {
//     fullName : 'joker',
//     health: 66,
//     strenght : 10,
// }

// function printHeroInfo (extraInfo = '') { //параметры пустые для заполнения
//     console.log(`имя : ${this.fullName}, здоровье : ${this.health}, сила удара : ${this.strenght}, ${extraInfo}`);
// }
// printHeroInfo.call(mainHero) //ФУНКЦИЯ.call(объект с которого взять данные)

// //CALL

// printHeroInfo.call(mainHero, 'роль героя')  //дабавить значение в параметр В (ОБЪЕКТ, 'данные параметра') - ЭТО С CALL! ,ЕСЛИ ЕЩЕ ЕСТЬ ПАРМЕТРЫ-ЧЕРЕЗ ЗАПЯТУЮ ДАЛЬШЕ

//APPLY

// printHeroInfo.apply(badHero, ['роль злодея'])  //чтобы дабавить значение в параметр В (ОБЪЕКТ, ['данные параметра']) - ЭТО ДЛЯ APPLY, СЛЕД ПАРАМЕТРЫ В МАССИВЕ ЧЕРЕЗ ЗАПЯТУЮ

//BIND - создал новую переменную(как и call в скобках будет)

// const binderInfoHero = printHeroInfo.bind(badHero, 'злодей') //bind - нужно задать новую переменнную для вызова
// binderInfoHero() 


                       

                    //Потеря контекста "this"
                    // /Функции — это объекты

// const car = {
//   name: "Kia Rio",
//   year: 2017,
//   showYear() {
//     console.log(this);
//   }
// };
// console.log(this); // windows

// const newShowYear = car.showYear;
// newShowYear(); // Выведет: undefined// функц задана в переменную и вызвана из ГЛОБАЛЬНОГО контекста( а не из объекта ,где лежит функция) - в глоб нету такой функц
  
// newShowYear.call(car)  //через call (apply /bind)
// const getShow = newShowYear.bind(car)  // через bind
// getShow() 


                    //ООП (объектно-ориентированное программирование)
                    //через класс можно создать шаблон , по которому потом добавив названия -получаю сразу объект новый готовый - как по шбалону новые объекты
                    //Создание экземпляров объекта при помощи function и class
                    //Класс – это шаблон кода для создания объектов – экземпляров класса

        //FUNCTION - устарело и больше кода нужно

// // Класс через функцию-конструктор
// function имя(значениеСвойства) {
//     this.названиеСвойства = значениеСвойства;
//     this.названиеМетода = function() { /* ... */ };
//   };

// function animal (name) {
//     this.name = name

//     this.getName = function() {
//         return this.name
//     }
// }


                       //CLASS - это збс, это нам надо
                       //Имя должно быть с заглавной буквы.
                    //Вызов происходит с помощью оператора new.
                    //Также, обратите внимание, что между методами класса запятая не ставится. Если написать между ними запятую, это приведет к синтаксической ошибке!


//         // Определение класса - как писать
// class Имя {
//     constructor(значениеСвойства) {
//       this.названиеСвойства = значениеСвойства;
//     }
//     названиеМетода1() {}
//     названиеМетода2() {}
//   }
  
//   // Создание экземпляра класса
//   const obj = new Class(переданноеЗначение);


// class Animal {
//     constructor(name) {
//         this.name = name
//     }
//     getName() {
//         return this.name
//     }
// }


    //для создания объекта перед ФУНКЦИЕЙ ( ИЛИ КЛАССОМ) напистаь new

// const cat = new Animal('кот') // создаю объект animal- по названию функц(класса)
// const dog = new Animal('пес') //новый  объект

// console.log(dog);
// console.log(cat); //вызываю новый объект
// console.log(cat.name); //имя животного из класса или функции


// //ЕЩЕ ПРИМЕР СЛОЖНЕЕ-функция
// function Pet(type, name) {
//     this.type = type; // это ключ/значение будет
//     this.name = name;
//     this.favoriteAction = 'спать';
//     this.say = function() {
//       console.log(`${this.type} по имени ${this.name} любит ${this.favoriteAction}.`);
//     };
//   };
  
//   const cat = new Pet('Кот', 'Барсик'); //создал новый объект с переденными значениями
  
//   console.log(cat);//вызов объекта
//   // Pet {type: 'Кот', name: 'Барсик', favoriteAction: 'спать', say: ƒ}
  
//   cat.say();//вызов значения у ключа SAY в объекте
//   // Кот по имени Барсик любит спать.


//   //на классы пример

//   class Pet {
//     constructor(type, name) {
//       this.type = type;
//       this.name = name;
//       this.favoriteAction = 'спать';
//     }
//     say() { //это называется МЕТОД
//       console.log(`${this.type} по имени ${this.name} любит ${this.favoriteAction}.`);
//     }
//   };
  
//   const cat = new Pet('Кот', 'Барсик'); //задаю новое имя и дальше ОБРАЩАЮСЬ ПО НЕМУ УЖЕ!!
  
//   console.log(cat);
//   // Pet {type: 'Кот', name: 'Барсик', favoriteAction: 'спать'}
  
//   cat.say();
//   // Кот по имени Барсик любит спать.




                    //Принципы ООП - объектно-ориентированное программирование.
                    // ООП – это методология программирования, при которой программа представлена в виде совокупности объектов.

                     // Наследование ключевое слово - extends

                     // НОВЫЙ КЛАСС  extandeds родительский класс(на основе которого создаем новый класс)

                    //C помощью ключевого слова SUPER мы получаем свойства и методы родительского класса

// class Transport { //РОДИТЕЛЬСКИЙ КЛАСС
//     constructor (type, category) {
//         this.type = type
//         this.category = category
//     }
//     sayInfo() {
//             console.log(`тип данного траспорта ${this.type}. Сфера применения: ${this.category}`);
//     }
//     move() {
//         console.log(`в путь!`);
//     }
// }

// // класс автомобиля
// class Car extends Transport {// ДОЧЕРНИЙ КЛАСС НА ОСНОВЕ РОДИТЕЛЬСКОГО
//     constructor(type, category) {//указываем такие же парамтры как в родительском
//         super(type, category)  // для передачи родительских свойств super()
//         this.numOfWheels = 4 // 4 колеса  у тачки
//     }
//     move() {
//         console.log(`поехали!!`);  // ПЕРЕОПРЕДЕЛИЛ МЕТОД НА НОВЫЙ КОНСОЛЬ - ДЛЯ ТАЧКИ ТЕПЕРЬ ВЫЗОВЕТ ЕГО
//         // ЕСЛИ ЕГО БЫ НЕ БЫЛО ТУТ- ИСКАЛ БЫ В РОДИТЕЛЬСКОМ КЛАССЕ
//     }
// }

// const car = new Car('машина', 'легковая') // задаю переменную дял вызова класса Car
// console.log(car);


// //класс самолета
// class Plane extends Transport {// ДОЧЕРНИЙ КЛАСС НА ОСНОВЕ РОДИТЕЛЬСКОГО
// constructor(type, category) { 
//     super(type, category)//указываем такие же парамтры как в родительском
//     this.numOfWheels = 3 // 3 колеса у самолета
//     this.numOfWings = 2 // 2 крыла
// }
// move() {
//     console.log('Полетели!')
//   }
// }


            //Ключевое слово extends используется для создания дочернего класса на основе родительского класса.

// В constructor() у дочерних классов  видим super(). C помощью ключевого слова super мы получаем свойства и методы родительского класса. В данном случае с помощью него мы вызвали родительский конструктор и передали нужные аргументы.
// Также  мы переопределили метод move() в обоих дочерних классах. Таким образом, для классов Car и Plane результат работы данного метода будет разный. Если бы мы его не переопределили, как в случае с методом sayInfo() родительского класса, тогда дочерние классы вызывали бы родительский метод:

//добавили к транспорту колличество колес и для самолета крыльев- в траспорт указать такое нельзя, ведь не у всех они есть/ поэтому общие - родительсий класс, а личное для каждого в дочерних классах

// const car = new Car('автомобиль', 'пассажирский')  //объект машина
// console.log(car);

// const plane = new Plane('самолет' ,'грузовой') //объект самолет
// console.log(plane);

// car.sayInfo();
// // Тип данного транспорта: Автомобиль. Сфера применения: Пассажирский
// car.move();
// // Поехали!

// plane.sayInfo();
// // Тип данного транспорта: Самолет. Сфера применения: Грузовой
// plane.move();
// // Полетели!



//                         // INSTANCEOF - можем проверить принадлежность объекта к классу:
// class FirstClass {};
// class SecondClass {};

// const obj = new FirstClass();

// console.log(obj instanceof FirstClass); // true // объект принадлежит классу FirstClass? - да , он же создан на его основе
// console.log(obj instanceof SecondClass); // false // объект принадлежит классу SecondClass?




                    //Принципы ООП.
                    //  Инкапсуляция — это объединение в одном месте данных и поведения, которое работает с этими данными. Данные хранятся в свойствах, а поведение – в методах:

                    //методы мы можем разрешать вызывать снаружи, а некоторые –только внутри класса (публичные и приватные методы).
                    //свойства мы можем разрешать изменять снаружи, а некоторые – только через специальные методы (или вовсе не давать к ним доступ).

// //публичные данные
// class User {
//     constructor(name) {
//         //данные
//         this.name =  name
//     }
// //поведение
// sayHi() {
//     console.log(`привет! я ${this.name}`);
// }
// }
// //Данные и поведение объединены в одном объекте
// new User(`ivan`).sayHi()  //так тоже можно вызывать метод

// const newUser = new User('anarina')
// newUser.sayHi()  // обращение к методу через точку
// console.log(newUser.name); //тоже через точку


//                     //private данные - обращение только внутри класса
//                     //создаение this.#name -  ставим перед именем данных # + эти данные #данные прописать между написанием класса и констуктором

// class SimpleClass {
//   // Приватное СВОЙСТВО тут писать надо еще- методы не надо
//   #privateValue

//   constructor() {
//     this.value = 'Hello World!';
//     // Запись в приватное свойство через # - внутри класса с ним и работаем
//     this.#privateValue = 'JavaScript';
//   }

//   sayHi() { // через этот метод могу вызвать приватное свойство
//     console.log(this.value);
//     // Вызов приватного метода внутри класса - ок
//     this.#privateMethod();
//   }

//   // Приватный метод
//   #privateMethod() {
//     // Чтение приватного свойства
//     console.log(`I love ${this.#privateValue}`)
//   }
// };

// const obj = new SimpleClass();

// console.log(obj.#privateValue); // будет ОШИБКА!- через точку нельзя вызвать приватное

// obj.#privateMethod();// будет ОШИБКА!- через точку нельзя вызвать приватное

// obj.sayHi(); // так норм вызов будет



//                     //Геттеры. 
//                     // get - Для того чтобы получить значение приватных данных, можно воспользоваться геттером. Его необходимо создать внутри класса с помощью ключевого слова get:

// class SimpleClass {
//   #privateValue //указал приватное св-во

//   constructor() {
//     this.#privateValue = 'JavaScript'; //приватное
//   }

//   get value() { // метод через get для работы с приватным свойством
//     // сработает, при чтении obj.value
//     return this.#privateValue;
//   }
// };

// const obj = new SimpleClass();
// console.log(obj.value); // ПРИ ВЫЗОВЕ ГЕТТЕРА () НЕ СТАВИМ-ЭТО НЕ МЕТОД : А ПРОСТО ВЫЗОВ СВОЙСТВА!



//                             // Сеттеры. 
//                             // set - изменить значение, можно воспользоваться сеттером. Они создаются таким же образом, как и геттеры, но ключевое слово теперь – это set
                            
// class SimpleClass {
//   #privateValue

//   constructor() {
//     this.#privateValue = 'JavaScript'; //приват свойство
//   }

//   get value() {
//     // сработает, при чтении obj.value 
//     return this.#privateValue;
//   }

//   set value(newValue) {//задаем ПАРАМЕТР , ЧТО БУДЕТ ЯВЛЯТЬСЯ НОВЫМ ЗНАЧЕНИЕМ
//     // сработает, при записи obj.value = ...   и СМОЖЕМ ИЗМЕНИТЬ ЗНАЧЕНИЕ
//     this.#privateValue = newValue;  //такая запсиь : this.#свойство = ПАРАМЕТР
//   }
// };

// const obj = new SimpleClass(); //определил класс чз переменную
// console.log(obj.value); // вызвал

// obj.value = 'TypeScript'; // изменил ЧЕРЕЗ МЕТОД SET
// console.log(obj.value); // вызвал новое значение



                        //ПОЛИМОРФИЗМ - ОДНО действие и несколько реализаций/ вызов одного и того же метода у разных объектов - они могут выполнять разные функции - одинаковое только имя метода будет


// class Animal {//родительский класс
//     constructor(name) {
//         this.name =  name
//     }
//     makeSound() {} // оставляем пустыми так - дальше в других классах заполянем каждый раз для разных целей
// }

// class Cat extends Animal {   //ЕСЛИ В ДОЧЕРНЕМ ТОТ ЖЕ КОНСТРУТКОР И НЕТ НОВЫХ СВОЙСТВ-  МОГУ НЕ ПИСАТЬ ИХ ВООБЩЕ ТУТ - ОНИ ВЫЗЫВАЮТСЯ СТАНДАРТНО ТОГДЕ ИЗ РОДИТЕЛЯ!!!!

//     makeSound() {
//         console.log(`мяу , я же кот!`);
//     }
// }


// class Dog extends Animal {
//     makeSound() {
//         console.log(`гав-гав, я - пёс!`);
//     }
// }

// const cat = new Cat (`marsik`) // класс в переменную задал
// cat.makeSound() // вызвал метод для КОТА

// const dog = new Dog(`bobik`)
// dog.makeSound()


//         //ПЕРЕБОР makeSound() через forEach()

// const animals = [cat, dog];

// animals.forEach(animal => {
//   // вызываем метод для разных объектов
//   animal.makeSound(); //выведет метод для наших животных по очереди
// });
// console.log(animals); //массив с объектами внутри




                            //Статические поля и методы
                            //Их главная особенность в том, что для того чтобы получить к ним доступ, нам не нужно создавать экземпляр класса. Мы можем к ним обратиться непосредственно через класс.имя статического поля/метода

                            
// class SimpleClass {
//   static staticProperty = 'Я – статичное свойство';
//   static staticMethod() {
//     return 'Я – статичный метод';
//   }

//   constructor(value1, value2) {
//     this.value1 = value1;
//     this.value2 = value2;
//   }

//   foo() {
//     console.log(this.value1, this.value2);
//   }
// };

// console.log(SimpleClass.staticProperty) // Я статичное свойство
// console.log(SimpleClass.staticMethod()) // Я – статичный метод


//                 //Важно отметить, что статические свойства и методы также наследуются для дочерних классов. 



// //Функция работает, разумнее было ее реализовать в классе, так как данный функционал относится к классу, но в то же время он не относится к конкретному объекту. Плюс, таким образом, мы не засоряем наше глобальное пространство новой функцией isPerson()

// class Person {
//     static isPerson(obj) {
//       return obj instanceof Person;
//     }
  
//     constructor(name, age) {
//       this.name = name;
//       this.age = age;
//     }
//   }
  
//   const person1 = new Person('Алекс', 25);
//   const person2 = {};
  
//   console.log(Person.isPerson(person1)); // true
//   console.log(Person.isPerson(person2)); // false




// //СОЗДАЛ СТАТИЧЕСКОЕ СВОЙСТВО defaultParams со значениями, которые будут определяться по умолчанию ,если они не были определны потом

//   class SimpleClass {
//     static defaultParams = {
//       value1: 'I love',
//       value2: 'JavaScript',
//     }
  
//     constructor(value1, value2) {
//       this.value1 = value1 || SimpleClass.defaultParams.value1; //либо передается значение, либо из статика берется как дефолтное
//       this.value2 = value2 || SimpleClass.defaultParams.value2;
//     }
  
//     sayHi() {
//       console.log(this.value1, this.value2);
//     }
//   };