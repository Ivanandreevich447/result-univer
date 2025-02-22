//                 // Асинхронный код


// console.log(1);
// setTimeout(() => console.log(2), 1000);//сетТаймаут - выведи через это время в мс
// console.log(3);
// //выведет 1 3 2(тк через сукунду, а 1 и 3 сразу)



//                 //В JavaScript есть специальный объект Promise - обещание(с биг буквы), который используется для отложенных и асинхронных вычислений. 

// /*Promise может находиться в трёх состояниях:

// ожидание (pending) - начальное состояние, не исполнен и не отклонён.
// исполнено (fulfilled) - операция завершена успешно.
// отклонено (rejected) - операция завершена с ошибкой. */


// /*Конструктор Promise принимает один аргумент – функцию, которую нужно выполнить. У этой функции есть два параметра-функции resolve() и reject(), которые вызываются в зависимости от результата выполнения.*/

// /*const promise = new Promise(function(resolve, reject) {
// //тело
// })  */

// /*Если код выполнен успешно, для возврата значения нужно вызвать функцию resolve() с результатом. Если неуспешно – функцию reject() с описанием ошибки */



// const car = {
//     name: 'bmw x5',
//     fuel : 10
// }

// const promise = new Promise((resolve, reject) => {
//     if(car.fuel > 0) {
//         resolve('все ок , можно ехать')
//     }
//     else {
//         reject('надо срочно на заправку!')
//     }
// })

// /*ДАЛЬШЕ НАМ НАДО ПОЛУЧАТЬ РЕЗУЛЬТАТ ПРОМИСА , ДЛЯ ЭТОГО ЕСТЬ:

// then() - удачный рез-т
// catch() - для ошибки промиса
// finally() - выполняется вне зависимомти от рез-та промиса! */

// promise
//     .then((result) => { // стрелочные функц и result - любое слово можно
// console.log(result); //все ок , можно ехать
//     })
//     .catch((error) => {
//         console.log(error);//надо срочно на заправку!
//     })
//     .finally(() => {
// console.log('finally'); // всегда нужен
//     })
//     //МОЖНО КОРОЧЕ ТУТ ЗАПИСАТЬ БЕЗ ПРОМЕЖУТКА
// promise.
//     then(console.log)//все ок , можно ехать
//     .catch(console.log) //надо срочно на заправку!




                //Метод fetch() - позволяет получать данные по сети асинхронно (то есть он возвращает объект Promise).
                // fetch(url, parameters)
    /*параметр url принимает строку HTTP-запроса
parameters содержит объект с параметрами запроса
метод возвращает Promise*/

            //Response в JS — объект, который представляет ответ от сервера в Fetch API. Функция fetch() возвращает объект Promise, функция-коллбек в котором в качестве параметра получает объект Response с полученным от сервера ответом

            //throw new Error ('текст выведет при ошибке') - Выбросили ошибку с помощью throw. Инструкция throw генерирует исключение, при этом выполнение функции останавливается и управление передается в ближайший блок catch() - если его нет- завершится

           

// const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';


// function createTodoElement (text) { //для получения из юрл в массив туду с выводом в код
// const todoElement = document.createElement('li')
// const todoElementA = document.createElement('a')
// todoElementA.href = '#'
// todoElementA.textContent = text
// todoElement.append(todoElementA)
// return todoElement
// }

// const toggleLoader = () => { //в хтмл есть слово hidden-скрыть/ если оно есть- загрузка на сайте есть слово- и наоборот
// const loaderHTML = document.querySelector('#loader')
// const isHidden = loaderHTML.hasAttribute('hidden') //есть ли аттрибут такой
// if(isHidden) {
//     loaderHTML.removeAttribute('hidden') //удалить аттрибут
// } else {
//     loaderHTML.setAttribute('hidden', '') // добавить аттрибут - нужно 2 параметра - тут 2й пустой просто
// }
// }

// const dataContainer = document.querySelector('#data-container')
// // const dataLoader 


// const getAllTodos = () => {
//     toggleLoader() //вызвал функц загрузки
//     const result = fetch(TODOS_URL, {// фетч назвали ресульт и к нему как к промису обращатсья будем
//         method : 'get' 
//     })
//     console.log(result);
    
//     result
//         .then ((response) => {
//             if (!response.ok) { //у объекта response - есть свойтво ОК - проверка -если не это - ошибка
//                 throw new Error('ошибка запроса')
//             }
//     return response.json() //декодируем данные с сайта - получаем массив тудушек
//         }) 
//         .then((todos) => {//получаем тудушки из юрл в массиве
//             todos.forEach(todo => { //переброр
//                 const todoHTML = createTodoElement(todo.title) //функц для размещения массива в код/ title- в массиве указан и работаем с ним
//                 dataContainer.append(todoHTML)// добавим в хтмл контейнер наши тудушки 

//             })
//             console.log(todos);
//         })
//         .catch((error) => { //если не обработается запрос - кинет на эту ошибку
//             console.log(error);
//         })
//         .finally(() => {// финали вызывается в конце и тут убирает слово загрузка
//             toggleLoader()
//         })
// }

// getAllTodos()



                    //Метод Promise.all() позволяет дождаться выполнения нескольких промисов и получить результат в виде массива.

  /*      Promise.all([ //возвращает промисы в виде массива и будет выполнен, когда все промисы будут выполнены успешно или хотя бы 1 будет rejected
            new Promise(),
            new Promise(),
            new Promise(),
        ])

        Promise.all- возвращает  :
        fulfied - все промис успешно
        rejected(была ошибка) - хотя бы 1 со статусом rejected - промисс.алл -rejected
        */

// / * 
// const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';
// console.log(TODOS_URL);

// const todosIds = [4, 3, 103, 44, 53] //список ид из массива юрл, с которыми будем работать
// const dataContainer = document.querySelector('#data-container')


// function createTodoElement (text) { //для получения из юрл в массив туду с выводом в код
// const todoElement = document.createElement('li')
// const todoElementA = document.createElement('a')
// todoElementA.href = '#'
// todoElementA.textContent = text
// todoElement.append(todoElementA)
// return todoElement
// }

// const getTodosByIds = (ids) => {
//     //массив промисов/массив идишников(ids).фильтруем чрез мап и получаем нев массив с обращением к конкретному эл-ту массива
// const requests = ids.map((id) => fetch(`${TODOS_URL}/${id}`));

// Promise.all(requests)//передаю данный массив в промис и работабю как с промисом
//     .then((responses) => {  //мы получали массив из ответов-надо декодировать
//         console.log(responses);
// const dataResult = responses.map((response) => response.json() )
//        return Promise.all(dataResult)//передаю декодированный массив в промис.ал
//     })
//     .then((todos) => {
//         // обработка нашего массива уже
//         console.log(todos);
//         todos.forEach(todo => {
//            const todoHTML = createTodoElement(todo.title) //для каждой тутшки- свой хтмл эл-т / креате- шаблон для вывода туду(перебор.имя)
//            dataContainer.append(todoHTML) //добавил в контейнер шаблона - новый хтмл массив туду
//         })
//     })
//     .catch ((error) => {
//         console.log(error);
//     })
// }

// getTodosByIds(todosIds) 



                        //Метод Promise.race() запускает несколько промисов, как и Promise.all(). Но возвращает он только один результат — того промиса, который выполнился быстрее всех.
// const promise = Promise([promise1, promise2,  и тд])


//reject не писал для ошибки 
// Promise.race([
//     new Promise((resolve, reject) => setTimeout(() => resolve("первый промис"), 3000)),
//     new Promise((resolve, reject) => setTimeout(() => resolve('второй промис'), 2000)),
//     new Promise((resolve, reject) => setTimeout(() => resolve('тертий промис'), 1000))
//   ]).then(console.log); // Выведет 3




// если reject не используем- удалить могу
// const promise1 = new Promise((resolve, reject) => {
// setTimeout(() => {
//     resolve('быстрый самый - первый')
// }, 2000)
// }) 

// const promise2 = new Promise((resolve, reject) => {
// setTimeout(() => {
//     resolve('быстрый самый - второй')
// }, 4400)
// }) 

// const promise3 = new Promise((resolve, reject) => {
// setTimeout(() => {
//     resolve('быстрый самый - третий')
// }, 1200)
// }) 

// Promise.race([promise1, promise2, promise3])
//     .then((result) => {
// console.log(result);
//     })
//     .catch((error) => {
//         console.log('ошибка ');
//     })




                    //Асинхронность (async/await)

                    // Ключевое слово async позволяет удобным способом создавать асинхронные функции. Такие функции всегда возвращают объект Promise. - ПИШЕТСЯ ПЕРЕД ФУНКЦИЕЙ( СТРЕЛОЧНАЯ ПЕРЕД () ,ОБЫЧН ДЕКЛАРЕЙШЕН - ПЕРЕД function )

                    // Ключевое слово await используется, чтобы дождаться выполнения асинхронной операции справа от await и вернуть его результат:

            //Поскольку асинхронная функция всегда возвращает промис, для обработки результата используется конструкция then:

//Ключевое слово async

// async function sum() { //значит даст промис
//     return 2+2
// }

// //СТРЕЛОЧНАЯ ФУНКЦ

// const sum = async () => {
//     return 2+2
// }


//Ключевое слово await

// async function test() {
//     const promise = new Promise(resolve => {
//         setTimeout(() => resolve('успех'), 1000)
//     })
//     const result = await promise
//     console.log(result);
// }
// test() //успех


            //Аналогичный результат можно получить и с помощью Promise.then(), однако await позволяет получить результат промиса более компактным и наглядным способом.

//             //Обработка ошибок
// Обработать ошибки внутри async функций можно двумя способами:
// С помощью блоков try/catch внутри самой функции.
// С помощью метода Promise.catch() на верхнем уровне при обработке результата функции.

    //ЧЕРЕЗ try/catch- все пишем в теле в try{ } catch

// async function getData() {
//     try {
// const result = await promise 
// return result
//     }
//     catch(error) {
//         console.error(error);
//     }
// }


// // С помощью метода Promise.catch()

// async function getData() { // acync - дает промис
//     const result = await promise
//     return result
// }
// getData()
// .then (()=> {
//     //дейсвия с промис
// })
// .catch (error => {
//     console.error(error);
// })



        //для сравнения Promise.then() и ключевых слов async/await можно реализовать один и тот же функционал.

// const url ='https://api.github.com/users'

// function getUsers () {
//     return fetch(url)
//     .then((Response) => {
//         return Response.json()
//     })
//     .catch(error => {
//         console.error(error);
//     })
// }

// Способ с async/await

// async function getUsers() {// получаем промисы
//    try {
//     const response = await fetch(url) // await -заставляет ждать функцию ее выполнения
//     console.log(response);
//     const user = await response.json()
//     return user

//     }
//   catch(error) {
//     console.error( error);
//   }
// }

// getUsers()//промис дает тк выше async пепед функцией
//     .then((result) => {
//         console.log(result);
//     })



 



            //ЗАДАЧА

// const userUrl = 'https://jsonplaceholder.typicode.com/users'
// const todoUrl = 'https://jsonplaceholder.typicode.com/todos'

// fetch(userUrl)
//     .then((repsonse) => repsonse.json())
//     .then((user) => {
//         console.log(user);
//         const firstUserId = user[0]?.id
//         console.log(firstUserId);
//         fetch(`${todoUrl}?userId=${firstUserId}`)
//         .then ((response) => response.json())
//         .then((todos) => {
//             console.log(todos);
//         })
//         .catch((error) => {
//             console.log(error);
//         })
//     })
//     .catch((error) => {
//         console.log(error);
//     })


            //ЗАДАЧА С РЕШЕНИЕМ ASYNC AWAIT-ждать
             //ЕСЛИ АСИНХ ФУНКЦ БУДЕТ - ПИШЕМ await
        //TRY CATCH FINALLY - там перед ними не надо ТОЧКИ ставить уже
        //так записывается код с тру катч
     /*   try {
      
     } catch (error) {
         console.log(error);
     } finally {
         console.log('finally');
     }  */ 


const userUrl = 'https://jsonplaceholder.typicode.com/users'
const todoUrl = 'https://jsonplaceholder.typicode.com/todos'

    const getTodoWithUserData = async () => {

        try {
            //вызов функции ассинхронный тут -фетч - получаем промисы
               const respons = await fetch(userUrl) 
                console.log(respons); 
                
                // работаем с прошлой переменной и декодируем
                const users =  await respons.json() 
                console.log(users);

                //awaint не нужно тк не ассинхронный вызов
                 const firstUserId = users[0]?.id 

                 //новый феч
                const todosResponse = await fetch(`${todoUrl}?userId=${firstUserId}`)
                const todos = await todosResponse.json()
                console.log(todos);
            
        } catch (error) {
            console.log(error);
        } finally {
            console.log('finally');
        }


  

} 
getTodoWithUserData()
// const promise = getTodoWithUserData()
// console.log(promise);//промис
