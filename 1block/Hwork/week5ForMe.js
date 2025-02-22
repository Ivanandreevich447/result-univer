
  
  /*15.4*/

  
  function task5() {
    let tasks = [
      {
        id: "1138465078063",
        completed: false,
        text: "Выполнить ДЗ после урока",
      },
      {
        id: "11384650780613",
        completed: false,
        text: "понять как это работает",
      },
      {
        id: "11384650780633",
        completed: false,
        text: "повторить еще раз",
      },
    ];
  
    //тут отдельно задаю названия
    const body = document.body;
    const tasksListContainer = document.querySelector(".tasks-list"); // получаю по классу элемент дом - список задач, который наполняем новыми
    const createTaskBlock = document.querySelector(".create-task-block"); // форм
    let isDarkTheme = false;

  
    createTaskBlock.addEventListener("submit", addTask); // на форм навесил обработчик сабмит/ евент функц вынес отдельно тут передаю вместо евент - имя функц addTask
  
    function createId() {
      return String(new Date().getTime());
    }
  
    function addTask(event) {
      event.preventDefault(); //убрал рестарт стр на каждый клик
  
      const { target } = event; //покажет форм код хтмл по target.класс - из форм для вызова класса
  
      const taskNameInput = target.taskName; //taskName -название из name в from,получу данные об о всем инпут
      const inputValue = taskNameInput.value.trim(); // покажет value - строка,которую надо помещать в текст в массиве с задачами
  
      const spanMessage = document.createElement("span");
      spanMessage.className = "error-message-block";
      createTaskBlock.append(spanMessage);
      spanMessage.innerHTML = "";
  
      if (validCheck(inputValue)) {
        const newTask = {
          id: createId(), //дата сейчас
          completed: false, // стандарт
          text: inputValue, // получаем из строки
        };
        console.log(newTask.id);
        tasks.push(newTask); // добавил new obj - в массив задач
     
  
        console.log(tasks); // проверка всех задач
        // console.log(inputValue); // проверка инпут -вывод строки
        // spanMessage.innerHTML = "";
        spanMessage.remove(); //ЕСЛИ ОК- ЗАДАЧА НОВАЯ СОЗДАЕТСЯ - СПАН С ОШИБКАМИ УДАЛЯЕТСЯ ИЗ ХТМЛ!!!
        renderTask(); //вызываю функ создания новых задач- добавит этот объект в массив
  
      }
  
      return inputValue;
    }
  
    function validCheck(inputValue) {
      if (inputValue === "") {
        //если ввели значение в строку , то добавяляем в объект новые данные
        console.log(`название задачи не должно быть пустым`);
      } else if (tasks.some((inTask) => inTask.text === inputValue)) {
        console.log(`задача с таким название уже есть`);
      } else {
        return true;
      }
    }
  
    function createTaskElement(task) {
      //парметр из рендера главный - task - с ним работаю и его вставляю-это
      //в этой функции я хочу записать весь хтмл код через js и хранится все это дело в главном див - taskItem!!!!
  
      //создам все дивы
      const taskItem = document.createElement("div");
      const taskContainer = document.createElement("div");
      const taskContent = document.createElement("div");
  
      //class для div
  
      taskItem.className = "task-item";
      // taskItem.dataset.taskId =('1') //в задании надо указать ид сюда и в фор / инпут
      taskItem.dataset.taskId = task.id;
  
      taskContainer.className = "task-item__main-container";
      taskContent.className = 'task-item__main-content"';
  
      //form
      const formCheckbox = document.createElement("form");
      formCheckbox.className = "checkbox-form";
  
      //input
      const inputCheckbox = document.createElement("input");
      inputCheckbox.className = "checkbox-form__checkbox";
      inputCheckbox.type = "checkbox";
      inputCheckbox.id = `task-${task.id}`; //в `` НАДО получить task-id / id могу получить через task.id и чтоб чтоб получить task-id изменяемый 1ой строкой пишу ТАК `task-${task.id}`
  
      //label
      const labelTask = document.createElement("label");
      // labelTask.htmlFor = ('task-1')//тоже ид как лебел в задаче
      labelTask.htmlFor = `task-${task.id}`;
  
      //form и label - одинаковые значения имеют ВСЕГДА! нужно подставить по задаче наш ID!
  
      //span
      const spanTask = document.createElement("span");
      spanTask.className = "task-item__text";
      spanTask.textContent = task.text;
  
      const buttonDelete = document.createElement("button");
      buttonDelete.className =
        "task-item__delete-button default-button delete-button";
      buttonDelete.textContent = "удалить";
  
      //разместить созданные объекты
  
      taskItem.insertAdjacentElement("afterbegin", taskContainer);
  
      taskContainer.insertAdjacentElement("afterbegin", taskContent);
      taskContainer.insertAdjacentElement("beforeend", buttonDelete);
  
      taskContent.insertAdjacentElement("afterbegin", formCheckbox);
  
      //form и ниже
      formCheckbox.insertAdjacentElement("afterbegin", inputCheckbox);
      formCheckbox.insertAdjacentElement("beforeend", labelTask);
  
      //span
      labelTask.insertAdjacentElement("afterend", spanTask);
  
      taskContent.insertAdjacentElement("afterbegin", formCheckbox);
  
      return taskItem; // там вся стурктура хтмл лежать должна у меня в итоге и я ее создаю в функции этой..
      //передать параметр должен из рендера - таск из перебора
    }
  
    function renderTask() {
      tasksListContainer.innerHTML = ""; //ВАЖНО!! ОБНОВЛЯЕТ ХТМЛ КАЖДЫЙ РАЗ- А ТО ЗАДАЧИ БУДУТ КАЖДЫЙ КРУГ ПО НОВОЙ ЗАПИСЫВАТЬСЯ!!
  
      tasks.forEach((task) => {
        const taskItem = createTaskElement(task); //пишу переменную для функции
        if (isDarkTheme) {
          blackThemeNew(taskItem);
        }
        tasksListContainer.append(taskItem); //
      //   taskItemGetClass = document.querySelectorAll(".task-item");
      //   buttonClass = document.querySelectorAll("button");
  
        return task; 
      });
  
      
    }
  
    renderTask();
  
    function modalDelete() {
      const divModal = document.createElement("div");
      divModal.className = "modal-overlay modal-overlay_hidden";
  
      const deleteModal = document.createElement("div");
      deleteModal.className = "delete-modal";
      divModal.append(deleteModal);
  
      const deleteModalQuestion = document.createElement("h3");
      deleteModalQuestion.className = "delete-modal__question";
      deleteModalQuestion.textContent =
        "Вы действительно хотите удалить эту задачу?";
      deleteModal.append(deleteModalQuestion);
  
      const deleteModalButtons = document.createElement("div");
      deleteModalButtons.className = "delete-modal__buttons";
      deleteModal.append(deleteModalButtons);
  
      const deleteButtonChanel = document.createElement("button");
      deleteButtonChanel.className =
        "delete-modal__button delete-modal__cancel-button";
      deleteButtonChanel.textContent = "отмена";
      deleteModalButtons.append(deleteButtonChanel);
  
      const deleteButtonModal = document.createElement("button");
      deleteButtonModal.className =
        "delete-modal__button delete-modal__confirm-button";
      deleteButtonModal.textContent = "Удалить";
      deleteModalButtons.append(deleteButtonModal);
  
      document.body.appendChild(divModal);
  
      return divModal;
    }
    modalDelete();
  
    const modalOverlay = document.querySelector(".modal-overlay");
    const deleteModal = document.querySelector(".delete-modal");
  
    tasksListContainer.addEventListener("click", (event) => {
      // console.log(event.target);
  
      const isTask = event.target.closest(".task-item");
      const inTaskId = isTask.dataset.taskId;
      // console.log(inTaskId);
  
      const delBtn = event.target.closest(".delete-button");
      console.log(delBtn);
      if (delBtn) {
        console.log("клик на удалить в задаче");
        modalOverlay.classList.remove("modal-overlay_hidden");
  
        deleteModal.addEventListener("click", (event) => {
          console.log(event.target);
          const isButtonDelete = event.target.closest(
            ".delete-modal__confirm-button"
          );
          const isButtonCancel = event.target.closest(
            ".delete-modal__cancel-button"
          );
  
          if (isButtonCancel) {
            console.log("клик на отмена");
            modalOverlay.classList.add("modal-overlay_hidden"); //появится класс хайдн - закроет модалку
          }
          if (isButtonDelete) {
            console.log("клик по удалить в мадальном");
            tasks = tasks.filter((task) => task.id !== inTaskId);
  
            renderTask();
            modalOverlay.classList.add("modal-overlay_hidden");

          }
        });

      }
    });
  


    document.addEventListener('keydown', event => {
      if(event.key === 'Tab') {
        event.preventDefault()
        isDarkTheme = !isDarkTheme
        body.classList.toggle('dark-theme')
        updateTheme()
      }
    })

    function updateTheme () {
      const taskItems = document.querySelectorAll('.task-item')
      const buttons = document.querySelectorAll ('button')

      if(isDarkTheme){
        body.style.backgroundColor = "#24292E";
        taskItems.forEach((item) => item.style.color = "#ffffff");
        buttons.forEach((btn) => btn.style.border = "1px solid #ffffff");
      } else {
        body.style.backgroundColor = "";
        taskItems.forEach((item) => item.style.color = "");
        buttons.forEach((btn) => btn.style.border = "none");
      }
    }



  
    // doc.addEventListener("keydown", (event) => {
    //   // console.log(event.keyCode);//покажет код клавиши
    //   console.log(event); //покажет любую/ кнопку нажатую со всей инфой
    //   // event.cod 'Tab'
    //   event.preventDefault();
    //   body.classList.toggle("dark-theme");
    //   updateTheme();
    //   // if (event.keyCode === 9) {
  
    //   //   isDarkTheme = !isDarkTheme; // если не темная тема стоит  
    //   //   updateTheme()
  
    //   //   console.log(`Тема переключена: ${isDarkTheme} тру- темная`);
    //   // }
    // });
  
    // function updateTheme () {
    //   if (isDarkTheme) {
    //       // blackTheme(); // Применяем тёмную тему
    //     } else {
    //       lightTheme(); // Применяем светлую тему
    //     }
    // }
  
    // function blackTheme() {
    //   body.style.backgroundColor = "#24292E";
  
    //    taskItemGetClass = document.querySelectorAll(".task-item");//обновил данные - все равно только старое
    //    buttonClass = document.querySelectorAll("button");
  
    //   taskItemGetClass.forEach((elem) => {
    //     elem.style.color = "#ffffff";
    //     // console.log(taskItemGetClass);
  
    //     buttonClass.forEach(btn => btn.style.border = '1px solid #ffffff');
        
    //   });
    // }
  

  //   function lightTheme() {
  //     taskItemGetClass = document.querySelectorAll(".task-item");//обновил данные - все равно только старое
  //     buttonClass = document.querySelectorAll("button");
  
  //     body.style.backgroundColor = "";
  
  //     taskItemGetClass.forEach((elem) => {
  //       elem.style.color = "";
  //       console.log(elem);
  //     });
  // buttonClass.forEach(btn => {
  //     btn.style.cssText = 'border: none'
  // })
  //   }
  // }
  
  
  //НУЖНО ДЛЯ НОВЫХ ЗАДАЧ СДЕЛАТЬ ПОКРАСКУ ТЕМНОЙ ТОЖЕ- А ТО ТОЛЬКО СТАРЫЕ КРАСИТ СКА!
  
  function blackThemeNew (newElement) {
      newElement.style.color = "#ffffff";
  
      //надо еще кнопки обновлять!
     const buttonClassNew = newElement.querySelectorAll('button')
     buttonClassNew.forEach(btn => {
      btn.style.cssText = 'border: 1px solid #ffffff'
  })
  }
  
}
  
  
  // task5();
  
  //меняем тему на теменую по кнопке ТАБ, если темная то:
  
  //у темной - боди имеет свойство бэкграунд меняться, иначе инишиал
  //из таск айтем все его эл-ты - в колор замена  цвета
  //ко всем баттон надо добавить рамку,иначе убрать
  
  //сделал смену темы на таб/ нудно добавлять новые щадачи туда и обновлять
  //  всегда сразу при добавлении нового в код- на каждой функции ,
  //  где новое - нужна проверка на тему какая сейчас/
  // если темная - новое сразу прогнать на темную и вывести
  