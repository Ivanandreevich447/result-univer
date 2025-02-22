                     //DOM (Document Object Model) — объектная модель документа. Это технология, позволяющая представить веб-страницу в виде дерева объектов. Каждый тег HTML в этом дереве представлен в виде отдельного объекта.



                    //ВЫЗОВ ЧЕРЕЗ getElement
        //СОЗДАЕМ ПЕРЕМЕННУЮ = УКАЗЫВАЕМ КАК ПЕРЕДАЕМ И ПЕРЕДАЕМ

// // по ID getElementById  - по идентификатору ид -  id="tasks"
// const tasksBlock = document.getElementById("tasks")  //в ('тут пишем чему равен id в html к которому обращение')
// console.log(tasksBlock);

// //getElementsByClassName() -  по классу
// const allNavButtons = document.getElementsByClassName('main-navigation__button-item')
// console.log(allNavButtons);

// // document.getElementsByTagName по тегу - тут кнопка
// const allButtons = document.getElementsByTagName('button')
// console.log(allButtons);


//                         //ВЫЗОВ ЧЕРЕЗ querySelector - современный способ-работаем с ним

// //ID в ('#имя по ид') - как в сss через решетку
// const taskBlock2 = document.querySelector('#tasks')
// console.log(taskBlock2);

// // по классу ('.имя класса') -  НО БУДЕТ ПОЛУЧЕН ТОЛЬКО ПЕРВЫЙ ПО СПИСКУ ДАННЫЙ КЛАСС 
// const mainNavavigation = document.querySelector('.main-navigation')
// console.log(mainNavavigation);

// //Поиск по тегу ('тип элемента') - button / p / div - НО БУДЕТ ПОЛУЧЕН ТОЛЬКО ПЕРВЫЙ ТЕГ 
// const firstButton = document.querySelector('button')
// console.log(firstButton);

// //Поиск по значению атрибута ('[атрибут]') -включает в себя название и значение атрибута, заключенные в квадратные скобки.
// const twoNavButton = document.querySelector('[data-button-id="2"]') //вызов 2й кнопки в навигации
// console.log(twoNavButton);

// const navButton = document.querySelector('[data-button-id]')
// console.log(navButton); //вызовет 1 по списку кнопку с этим атрибутом



//                                 //querySelectorAll() 
//                                 // - работает как и querySelector() , НО ВОЗВРАЩАЕТ ВСЕ ЭЛ-ТЫ

                //const allElements = document.querySelectorAll('*')   - ВСЕ ЭЛЕМЕНТЫ НА СТРАНИЦЕ!!!!                
//
// //КЛАСС / ПО ТИПУ ЭЛЕМЕНТА ТАК ЖЕ
// const allMainNavigation = document.querySelectorAll('.main-navigation__button-item')
// console.log(allMainNavigation);  

// //МЫ ПОЛУЧАЕМ ВСЕ ДАННЫЕ ПО КЛАССУ И МОЖЕМ СДЕЛАТЬ ПЕРЕБОР ЗНАЧЕНИЙ!

// allMainNavigation.forEach((button, index) => {
// console.log(index, button); //выведет индекс и все кнопки ,которые содержит
// })


                        //КЛОНИРОВАНИЕ ЭЛ-ТА-если надо копировать только , без изм родителя - 
                        //вызвать чз квери селектор -
                        //  создать новую переменную =прошлой.CLONENODE()

// const mainNavavigation = document.querySelector('.main-navigation')
// //клонирование без дочерних эл-тов
// const cloneMaiNav = mainNavavigation.cloneNode()

// //клон вместе с содержимым - в скобках (true)
// const cloneMaiNav = mainNavavigation.cloneNode(true)





//                         //ОБРАЩЕНИЕ СНАЧАЛА К КЛАССУ - ПОТОМ В КЛАССЕ К АТРИБУТУ 
//                         //ВМЕСТО DOCUMENT - пишем переменную ,которую создали на основе класса
//                         //это нужно ЧТОБ ОБРАЩЕНИЕ ШЛО НЕ ЧЕРЕЗ -ДОКУМЕНТ-БОДИ-ДИВ-АТРИБУТ  а сразу ДОКУМЕНТ-КЛАСС-АТРБИБУТ - КОРОЧЕ ЦЕПОЧКА
// const createTaskBlock = document.querySelector('.create-task-block')
// const allsubmit = createTaskBlock.querySelector('[type="submit"]')
// console.log(allsubmit);


//         // Комбинированный поиск по селектору:
// const elements = document.querySelector("#tasks .create-task-block");
// console.log(elements);
// // В этом примере осуществляется поиск всех элементов p с классом text, вложенных внутрь элемента с идентификатором #main. Пробел указывает на поиск по потомкам 



                        //Свойства и методы HTML-элементов
                        // Любой HTML-элемент имеет следующие основные свойства:

//         // Свойство id — идентификатор элемента - вызов в консоли имя.id
// const task = document.querySelector('#tasks')
// console.log(task.id); // имя на что стоит id

//         // Свойство className — CSS-класс элемента: - вызов имя.className
// const mainNavButtonItem = document.querySelector('.main-navigation__button-item')
// console.log(mainNavButtonItem.className); // выводит имя класса


//         //Свойство innerText и свойство textContent — текстовое содержимое внутри элемента. - задать имя как обычно и в консоли имя.innerText или .textContent - выводит текст этого класса
// const taskBlock = document.querySelector('.create-task-block')
// console.log(taskBlock.textContent); //текст из класса



                // // Свойство innerHTML — содержит в себе код HTML-разметки внутри элемента - имя.innerHtml


// //переисользую переменную из id выше
// console.log(task.innerHTML); // выводит весь html код ,который включает в себя это значение

// task.innerHTML = '' //task - станет пустой 


// // Свойство children — коллекция дочерних элементов
// const taskList = document.querySelector('.tasks__wrapper') //выводит дочерние эл-ты по данному элементу 
// console.log(taskList.children);



//                         //Data-атрибуты - это атрибуты HTML-элементов, название которых начинается с data-
//                         //Data-атрибуты позволяют хранить дополнительную информацию в стандартных элементах HTML, что бывает очень полезно. То есть с их помощью можно создавать свои собственные атрибуты для элементов.

//Получить коллекцию data-атрибутов можно с помощью свойства имя.dataset
//для вывода data-button-id="1" - имя для js будет кэмл кейс как обычно - data- убираем и имя buttonId и все имена по такому принципу писать

const deleteButton = document.querySelector('.main-navigation__button-item')
console.log(deleteButton.dataset); //чему равно значение data-id выведет
console.log(deleteButton.dataset.buttonId);//выводит чисто значение этого дата ид


// //Изменить значение data-атрибута можно так же, как и обычное свойство любого объекта:
// deleteButton.dataset.buttonId = 1000 // меняем значение data-id
// console.log(deleteButton.dataset); //новое значение будет указано


//                                 //Стили
//                                 // К коллекции стилей элемента можно обратиться с помощью свойства style, например:
//                         //внимание, что названия свойств в JavaScript и CSS пишутся в разном стиле:
// // Для свойств JavaScript используется lowerCamelCase — первая буква маленькая, далее каждое слово начинается с большой буквы.
// // Для свойств CSS используется kebab-case — все буквы маленькие, слова разделяются дефисом.

// //чтоб узннать какие стили использовали к данному классу или изменить - через стили   имя.style
// const taskItem = document.querySelector('.task-item')
// console.log(taskItem.style);

// // Задать стиль можно обратившись к конкретному свойству объекта style:
// // имя.style.свойство из css = 'значение'
// taskItem.style.color = 'red' // покрасил этот текст в красный



                        //Создание HTML-элементов и добавление 

                        //Создание элемента
                //с помощью метода document.createElement()

// const newButton = document.createElement('a') // создал новый эл-т в хтмл разметку <a></a>

// //НИЖЕ БУДУ ДОБАВЛЯТЬ В НОВЫЙ <a></a> разметку, какая была уже до ,чтоб добавить новый блок на сайт и в хтмл
// newButton.className = 'main-navigation__button-item'
// newButton.href = '#tasks_expiries' //
// newButton.dataset.buttonId = '4' // задаем значение data-button-id
// newButton.innerText = 'Просроченные задачи' //задаем текст

// console.log(newButton) // тут мы увидим уже новый созданный эл-т в хтмл



                     //Добавление элемента на страницу
//После создания элемент нужно добавить на страницу. Для этого существует несколько основных методов:

// prepend() — вставляет элемент в начало заданного узла.
// append() — вставляет элемент в конец узла. 
// before() — вставляет элемент перед узлом.
// after() — вставляет элемент после узла.

// //для НАЧАЛА ПОЛУЧАЕМ ЭЛ-Т КУДА В КОТОРЫЙ НАДО ВСТАВИТЬ НОВЫЙ ЭЛ-Т 
// const mainNavavigation = document.querySelector('.main-navigation') //получил класс главный, где хранятся элементы ,куда надо положить новый
// mainNavavigation.append(newButton) // имя куда положить.append допустим(новый созданный,который добавляем) - СОЗДАЛ И ПОЛОЖИЛ НОЫЙ ЭЛ-Т - ОН ДОБАВИЛСЯ НА СТРАНИЦУ  В КОНЦЕ!!



                                //Добавление элемента с помощью insertAdjacentElement()
                                //Метод insertAdjacentElement() позволяет добавить элемент в нужную позицию в зависимости от указанных параметров.

//  elem.insertAdjacentElement(where, newElem);

//где elem — существующий элемент, внутрь или рядом с которым нужно вставить новый элемент newElem.
// Параметр where может принимать следующие значения:

// "beforebegin" – вставить newElem непосредственно перед elem,
// "afterbegin" – вставить newElem в начало elem,
// "beforeend" – вставить newElem в конец elem,
// "afterend" – вставить newElem непосредственно после elem.

// const mainNavavigation = document.querySelector('.main-navigation')
// mainNavavigation.insertAdjacentElement("afterbegin", newButton) //добавил эд-т кнопку в начало!


//                         //replaceWith()
//                 //Метод replaceWith() позволяет заменить один элемент на другой
// const taskList = document.querySelector('.tasks-list')
// taskList.replaceWith(newButton) //заменил лист задач на новую нашу кнопку



                        //Остальные методы HTML-элементов
                        //Метод remove() удаляет элемент из DOM-дерева.

// const mainNavavigation = document.querySelector('.main-navigation')
// mainNavavigation.remove() //удалил всю навигацию


//                         //Метод closest() находит ближайший родительский элемент по заданному селектору. Сам элемент тоже включается в поиск, то есть если сам элемент удовлетворяет условию селектора, то будет возвращен он:
// const taskInnerContainer = document.querySelector('.task-item__main-container')
// const parent = taskInnerContainer.closest('.tasks-list')
// console.log(parent);// выводит .tasks-list




                        //Коллекция классов classList


// У classList есть несколько методов: name.classList.метод('значение класса')

// Метод add() — добавляет класс к элементу из css
// Метод remove() — удаляет класс
// Метод toggle() — добавляет класс, если его ещё нет, иначе удаляет
// Метод replace() — заменяет один класс другим


// //add
// const mainNavavigation = document.querySelector('.main-navigation')
// mainNavavigation.classList.add('red') //добавил ред в название класса


// // //remove
// // mainNavavigation.classList.remove('main-navigation')//убрал название класса ,осталось тольк ред новое
// // console.log(mainNavavigation);


// //replace
// mainNavavigation.classList.replace('red', 'list') //заменил ред на лист
// console.log(mainNavavigation);


                                //classList - МОЖНО СДЕЛАТЬ ПЕРЕБОР ЧРЕЕЗ for..of

// const mainNavavigation = document.querySelector('.main-navigation')
// mainNavavigation.classList.add('red')
// console.log(mainNavavigation);

// //перебор
// for(let className of mainNavavigation.classList) {
//         console.log(className); //ВЫВОДИТ ВСЕ КЛАССЫ У ОБЪЕКТА
// }


                        //Работа с атрибутами


//                 //Метод hasAttribute() — имеет ли элемент указанный атрибут. Возвращает булево значение тру или фолс

// const div = document.querySelector('div') //выдаст первый -div- в коде
// console.log(div.hasAttribute('class')); //содержит ли див элемент класса? тру


//         // /Метод getAttribute() — получает значение атрибута по имени

// const div = document.querySelector('div')
// console.log(div.getAttribute('class')); //имя класса ,которое первое выдал див в коде

        // Метод setAttribute() — устанавливает значение атрибута
        //setAttribute(name, value) - name -имя атрибута,которое хотим добавить/ value-значение ,которое нужно присвоить атрибуту

// const div = document.querySelector('div')
// div.setAttribute('type', '2')
// console.log(div); // добавил в в наш див - type = 2


//                      //Метод removeAttribute() — удаляет атрибут.

// const div = document.querySelector('div')
// // console.log(div.removeAttribute('class'));
// div.removeAttribute('class') //удалил первый в списке класс "main-navigation"
// console.log(div);
// document.querySelectorAll('div')





                        //Обработчики событий. Событие "click"

                        //Событие — это любое действие пользователя, на которое веб-страница может реагировать. Существует множество событий, которые можно обработать.

                        // Обработчик события — это код на JavaScript, который срабатывает при запуске события.

         //Добавление обработчика события c помощью метода name.addEventListenter("параметр1", (параметр2) => { })  Первым параметром он принимает название события, вторым — функцию-обработчик.
                     
// событие CLICK

// const p = document.querySelector('p') //задали параграф в переменную
// p.addEventListener('click', () => { //добавили обработчик - клик 
//         p.textContent += 'сколько кликов?'//тут textContent-покажет текст элемента и к нему при каджом клике + ''   - на стр появляется текст
// })



                        //Параметр event
                        //Функция "обработчик событий" может принимать вторым параметр event, который содержит различные данные о событии.

                //обратимся к свойству event.target, которое указывает на элемент, по которому был произведен клик!!!


// обработчик для каждого элемента p в нашем документе с помощью querySelectorAll() и метода forEach():

// const paragraphs = document.querySelectorAll('p') //все эл-ты P получил
// paragraphs.forEach(p => { //перебор
//   p.addEventListener('click', (event) => { // на каждый эл-т перебора делай это
// event.target.textContent += ' клик!' // таргет добавили
// })
// });
// ЭТО ТЯЖЕЛО ЧИТАЕМО И НАДО ДЕЛАТЬ ЧЕРЕЗ ФУНКЦИИ!!!

// const paragraphs = document.querySelectorAll('p')
// paragraphs.forEach(p => {
//         p.addEventListener('click', addText) // тут указал 2параметр - название функ ,которая даст новые данные сюда
// })

// function addText(event) {  //функция отдельно для читаемости- тут создал 2параметр евент в addEventListenter
//         event.target.textContent += ' клик-клак'
// }



                        //Обработчики событий. 
                        // Событие "submit" -  Событие срабатывает при отправке <form>.
                //submitСобытие срабатывает, когда: пользователь нажимает кнопку отправить, при нажатии на интер в поле ввода , 
                
                     //event.preventDefault() - чтоб стр не обновлялась на каждом клике на кнопку- добавить в функцию это! - стандарт- КАЖДЫЙ КЛИК-ПЕРЕЗАГРУЗКА СТР

                //TARGET - эл-т на котором сработало событие
                //CURRENTTARGET - эл-т на котором сработало событие СЕЙЧАС


// // Для начала найдем элемент <form> и добавим к нему обработчик события submit:
 
// const createTaskForm = document.querySelector('.create-task-block') //FORM  на странице- его ищем
// createTaskForm.addEventListener('submit', (event) => {
// console.log(event); // ПРИ КЛИКЕ СОЗДАТЬ - ВЫВЕДЕТ ВСЕ О КНОПКЕ
// event.preventDefault()
// // const target = target.event // target- эл-т по которому был клик или кратко запись ниже

// const {target} = event
// const taskNameInput = target.taskName //taskName -это название ЭЛ-ТА ИЗ ХТМЛ name в form! - мы получаем даныне обо ВСЕМ ИНПУТ ,где инфа о кнопке создать

// const inputValue = taskNameInput.value //taskNameInput - инпут дает и через нему к value и тд
 
// if (inputValue) { //ВВЕЛ ЗНАЧЕНИЕ В СТРОКУ??
// console.log(` всё збс . новая задача ${inputValue}`);
// } else (console.log(`введите правльные данные`))

// console.log(inputValue); //выводит значение строки создать

// })





                        //События "keydown - срабатывает при НАЖАТИИ клавиши

// document.addEventListener('keydown', (event)=> {
//         const {key} = event //key - ключ клавиши показывает кукую нажимали вообще
//         console.log(key); //покажет клавишу ,котору нажали и отпустили

//         const styleTask = document.querySelector(`[data-task-id="${key}"]`) // вот такая запись! обратные ковычки для чтения ${} все [класс копируем весь = значению нажатия]
//         if(styleTask) {
//                 styleTask.style.fontWeight = 'bold' // при нажати сработает имзенение стиля на жирынй

//         }
// })

                        
                        //События "keyup - срабатывает при ОТПУСКАНИИ клавиши


// document.addEventListener('keyup', (event)=> {
//         console.log(event); //покажет клавишу ,котору нажали и отпустили
//         const {key} = event //key - ключ клавиши показывает кукую нажимали вообше
//         const deleteTask = document.querySelector(`[data-task-id="${key}"]`) // вот такая запись! обратные ковычки для чтения ${} все [класс копируем весь = значению нажатия]
//         if(deleteTask){//ЕСЛИ НАЖАЛ НА ЭТУ КНОПКУ - ВЫВЕДИ МОДАЛЬНОЕ ОКНО
// const deleteConfirmed = confirm(`Ты точно хочешь удалить задание ${key}?`)
               
// if(deleteConfirmed) { //ЕЛСИ НАЖАЛ ОК- УДАЛИ
//         deleteTask.remove() // теперь при ОПУСКАНИИ КЛАВИШИ -удаление элемента
// } else{'ок'} //ЕСЛИ НИЧЕГО- НИЧЕГО НЕ ДЕЛАЙ
//         }
// })




//                         //Событие "mouseover" -  срабатывает, когда пользователь наводит курсор мыши на элемент.

// const createTooltip = (text) => {//функция принимает текст и выводит элемент для хтмл
// // создаю и добавляю код в хтмл с окном вывода этим
//         const tooltip = document.createElement('span') //спан создал
//         tooltip.textContent = text
//         tooltip.className = 'tooltip'
//         return tooltip // выводит тултип
// }

// document.addEventListener('mouseover', (event) => {
//         const{target} = event
//         console.log(target); //покажет какой класс указан у элемента в хтмл
//         //ниже- находится над кнопкой удалить - кнопка/ 
//         const isOverDeleteButton = target.className.includes 
//         ('task-item__delete-button') //если таргет.класснейм совпадает хоть с 1 классом - тру

//         if(isOverDeleteButton) { //если тру выводи это
//                 console.log(`success`);
//                 const taskItemHTML = target.closest('.task-item')//
//                 const taskId = taskItemHTML?.dataset.taskId //опционнальная цепочка - если у нас есть task-item ? дальше- есть датасет-таскид 
//                 if(taskId) {
//                         const tooltipHTML = createTooltip(`Удалить задачу под номером ${taskId}?`) //переменная = функция с передачей текста
//                         target.append(tooltipHTML)//помещаю тултип в таргет
                        
//                 }
//         }

// })



//                         //Событие "mouseout" - когда уводим мышку с поля


// document.addEventListener('mouseout', (event) => {
//         const {target} = event
// isOutFromDeleteButton = target.className.includes
// ('task-item__delete-button') //если таргет совпадает хоты с 1 классом - тру
// if(isOutFromDeleteButton) {
//         tooltip = document.querySelector('.tooltip')
//         tooltip.remove()
// }
// })




                        //Событие "contextmenu" - срабатывает при открытии контекстного меню, то есть на клик ПКМ

                        //Это событие может пригодиться тогда, когда мы хотим сделать собственное контекстное меню вместо стандартного. Для этого нужно в обработчике отменить действие по умолчанию с помощью метода event.preventDefault():

// document.addEventListener('contextmenu', (event) => {
//         console.log(event);
//         event.preventDefault()
// })


                        //Событие "change" - срабатывает при изменении значения элемента формы, когда это изменение зафиксировано. Для текстовых элементов событие происходит не при каждом вводе, а при потере фокуса.

                        //Событие "input" - тоже самое как чендж - но срабатывает не на наведение , а просто на ввод каждого символа- при лишнем - ошибка!

//                         // просто тот же код и меняю обработчик

// checkTaskNameInputOnValidation = (value) => {//функ принимает value -строка ввода наша
//         if(!value || value.includes('@')) {//проверка на существование строки и присутствие символа @ в строке
//                 return false
//         }
//         return true
// }

// const taskNameInput = document.querySelector('.create-task-block__input')
// const createTaskBlock = document.querySelector('.create-task-block')
// const createInput = createTaskBlock.querySelector('create-task-block__input')



// // taskNameInput.addEventListener('input', (event) => {// INPUT и ниже CHANGE
// taskNameInput.addEventListener('change', (event) => {
//         // console.log(event);
//         const {target} = event// получил у евент-таргет- там есть наш value
//         const {value} = target //получаю у таргета валуе - 
//         console.log(value);//меняю строку валуе -увожу мышкой со строки(мне надо кликнуть еще) - получаю вводимые дааные в консоли
//         const isValid = checkTaskNameInputOnValidation(value)
//         const messageBlokDom = document.querySelector('.error-message-block')//вызываем созданный новый элемент про ошибку ниже


//         if(!isValid) {
//          const newMessageBlok = document.createElement('span')
//          newMessageBlok.className = 'error-message-block'//у нас в css есть уже такой класс-его и создадим в хтмл
//          newMessageBlok.textContent = 'Ошибка! Текст для задачи : не пустой и без символа @' // текст для вывода на ошибку

//          createTaskBlock.append(newMessageBlok)//добавим в форм- сообщение с ошибкой
//         } else if(isValid && messageBlokDom) {//если валидно и messageBlokDom-существует - делай удаление блока из хтмл
//                 messageBlokDom.remove()
//         }
// })




                        //Обработчики событий.
                        // https://lk.result-university.com/pl/teach/control/lesson/view?id=268066796&editMode=0
                        //  Всплытие и погружение. Прекращение всплытия.
                        //ФАЗА ЦЕЛИ - событие на цели

                        //фаза ПОГРУЖЕНИЯ - от window к ЦЕЛИ
                        //фаза ВСПЛЫТИЯ - от ЦЕЛИ к WINDOW

                                //ВСПЛЫТИЕ  и погружение сразу в 1 коде
// const allElements = document.querySelectorAll('*')     

// allElements.forEach(elem => {
// elem.addEventListener('click', (event) => {
//         alert(`всплытие ${elem.tagName} `)
// }/*,true*/)  //если ТУТ УКАЗАТЬ ТРУ - БУДЕТ ПОГРУЖЕНИЕ!!!!
// })


                        //ОСТАНОВКА ВСПЛЫТИЯ
                       // event.stopPropagation() - Остановить распространение события 
       //TAGNAME - имя тега выводит нашего 

// const allElements = document.querySelectorAll('*')     

// allElements.forEach(elem => {
// elem.addEventListener('click', (event) => { // при клике 
//         //если элемент клика(тег нэйм - выведет его название) = форм эл-ту
//         if(event.currentTarget.tagName === 'FORM') {
//                 event.stopPropagation()  //остановка распрастранения
//         }
//         alert(`всплытие ${elem.tagName} `)
// })
// })



                         //Делегирование событий - заключается в том, что вместо добавления однотипных обработчиков события для каждого элемента, мы добавляем один обработчик для родительского элемента.

                        //Найти элемент, по которому сделан клик можно с помощью event.target. Если нужный элемент найден, можно выполнить необходимые действия с ним.


const allNavButton = document.querySelectorAll('main-navigation__button-item')
const mainNav = document.querySelector('.main-navigation')


mainNav.addEventListener('click', (event) => {//событие на общий класс для КНОПОК-РОДИТЕЛЬ 
        console.log(event.target); // покажет ссылку на нажатый эл-т

const isNavButton = event.target.closest('.main-navigation__button-item') //ссылка нажатого эл-та = ближайшему родителю

if(isNavButton)  {
        // console.log(`ты нажал на кнопку с задачами`) // если равна ближ родителю- выведи консоль- если по задачам тыкаю- ок/ мимо- ничего

   allNavButton.forEach((navButton) => { //
        navButton.classList.remove('main-navigation__button-item_selected') // тут задан класс -рамка вокруг текста
        console.log(navButton);

});
event.target.classList.add('main-navigation__button-item_selected')
}
})
addEventListener()