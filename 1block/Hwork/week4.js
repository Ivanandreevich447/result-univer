/*12.1*/
function task1() {
    const student = {
        stack: ["html"],
        level: 1,
        improveLevel() {
        
          this.level += 1; //+1 к лвл
      
          if (this.level === 2) {
            this.stack.push("css"); //добавляем в массив стэка элемент
          }
         else if (this.level === 3) {
            this.stack.push("JavaScript");
          }
         else if (this.level === 4) {
            this.stack.push("React");
          }
         else if (this.level === 5) {
            this.stack.push("NodeJs");
          } else if (this.level > 5) {// если больше 5 ,то все выучил и конец
            console.log(`Студент выучил все технологии!`);
          }
          return this;// как вывести студента не понимаю
        },
      };
      

      student.improveLevel();
      student.improveLevel();
      student.improveLevel();
      student.improveLevel();
      student.improveLevel();
      console.log(student.stack);
}
// task1()




/*12.2*/

function task2() {
  const dog = {
    name: "Чарли",
    type: "Собака",
    makeSound() {
      return "Гав-Гав";
    },
  };

  const bird = {
    name: "Петя",
    type: "Воробей",
    makeSound() {
      return "Чик-чирик";
    },
  };

  function makeDomestic(isDomestic = "") {
    (this.isDomestic = isDomestic),
      console.log(
        `${this.type} по имени ${this.name} говорит ${this.makeSound()}`
      );
    return this;
  }

  makeDomestic.call(bird, false);
  console.log(bird);

  makeDomestic.apply(bird, [false]);
  console.log(bird);

  const infoDog = makeDomestic.bind(dog, true); //не забывать, что bind вызыавется как функция()
  console.log(infoDog());
}
// task2()



/*12.3*/

function task3 () {
    const footballer = {
        fullName: 'Cristiano Ronaldo',
        attack() { //убрал стрелочную функ для вызова функции через this
           console.log(`${this.fullName} сейчас с мячом и начинает атаку!`);
        },
        scoreGoal(sound) {
           console.log(`${this.fullName} забил гол! Вот это да!`);
           this.celebrate(sound);
        },
        celebrate(sound) {
           console.log(sound);
        },
        goToSubstitution(newPlayer) { //там было в значении - функция/ поправил
           console.log(`${this.fullName} уходит на замену. На поле выходит ${newPlayer}`);
        }
     };
    
    
    const attack = footballer.attack.bind(footballer)
    attack()
    const score = footballer.scoreGoal.call(footballer, 'Сиииии')
    footballer.goToSubstitution.apply(footballer, ['Paulo Dibala'])
    
    //в call и apply убрал переменные и параметры поместил сразу в методы/ для bind - оставил вызов фукц отдельно тк так и нужно
}
// task3()


/*13.1*/

function task4 () {
    class Student {
        constructor(name, age) {
            this.name = name,
            this.age = age,
            this.technologies = [],
            this.status = 'Junior'
        }
        setTechnologies(technologies) {
            this.technologies = [
                ...this.technologies,
                ...technologies,
              ];
        }
        setNewStatus(newStatus) {
            this.status = newStatus;
        }
    }
    
    const newStudent = new Student('Ivan', 29)  //задал имя объекту
    newStudent.setTechnologies([ 'HTML', 'CSS', 'JavaScript' ]) //добавил параметры и их занесли через спред в массив
    newStudent.setNewStatus('Midle') // задал новое значение статуса 
    console.log(newStudent); // получил новый измененный объект через класс(вызов и добавление через НОВОЕ НАЗВАНИЕ ОБЪЕКТА, А НЕ из имя класса)
}

// task4()


/*13.2*/

function task5 () {
    class Person {
        constructor(name, age) {
                 this.name = name,
                 this.age = age
         }
         compareAge(newPerson) {
            if (this.age > newPerson.age) {
             console.log(`${this.name} старше, чем ${newPerson.name}`)
            } else {
             console.log(`${this.name} млaдше, чем ${newPerson.name}`)
            } 
         } }
         
     
     
     const person1 = new Person('Максим', 24);
     const person2 = new Person('Светлана', 36);
     const person3 = new Person('Ирина', 23);
     // console.log(person2.name);
     
     person1.compareAge(person2); // Максим младше, чем Светлана 
     person2.compareAge(person3); // Светлана старше, чем Ирина 
     person3.compareAge(person1); // Ирина младше, чем Максим
     person2.compareAge(person1); 
}

// task5()


/*13.3*/

function task6() {
    class Dictionary {
        constructor(name) {
            this.name = name
            this.words = {}
        }
        add(word, description) {
            if(!this.words.hasOwnProperty(word))
           this.words[word] = {word, description}
        }
        remove(word) {
            delete this.words[word]
        }
        get(word) {
            if(this.words.hasOwnProperty(word)) {
                 console.log(word); }  // ТВК ВЫВОДИТЬ? А ТО С return пусто-все не могу их понять
                 else{console.log(`такого слова нет в словаре`)}
                }
    
        showAllWords() {
    Object.values(this.words).forEach(val => {
        console.log(`${val.word} - ${val.description}`);
    })
    } }
        
    
    
    const dictionary = new Dictionary('Толковый словарь');
    dictionary.add('JavaScript', 'популярный язык программирования');
    dictionary.add('Веб-разработчик', 'Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие');
    console.log(dictionary);
    dictionary.showAllWords()
    dictionary.get('есть нет слово?') // выводит норм консоль
    dictionary.get('JavaScript') // выводит слово 
    
}
// task6()

/*13.4*/

function task7() {
    class Dictionary {
        constructor(name) {
            this.name = name
            this.words = {}
        }
        add(word, description) {
            if(!this.words.hasOwnProperty(word))
           this.words[word] = {word, description}
        }
        remove(word) {
            delete this.words[word]
        }
        get(word) {
            if(this.words.hasOwnProperty(word)) {
                 console.log(this.words[word]); }  
                 else{console.log(`такого слова нет в словаре`)}
                }
    
        showAllWords() {
    Object.values(this.words).forEach(val => {
        console.log(`${val.word} - ${val.description}`);
    })
    }
     }
        
    //класс для сложных слов/ ЕСЛИ КОНСТУКТОР И СУПЕР ПОЛНОСТЬЮ ПОВТОРЯЮТСЯ В ДОЧЕРНЕМ  БЕЗ ДОБАВЛЕНИЯ - МОГУ НЕ ПИСАТЬ ИХ

    class HardWordsDictionary extends Dictionary {
        add(word, description,isDifficult = true ) {//isDifficult -чтоб менять мог закинул сюда- либо лучше ниже тру написать  и тут убрать
            if (!this.words.hasOwnProperty(word)) {
                super.add(word, description) //вызов родительского метода -КАК ПРО ТАКОЕ УЗНАТЬ ? ВЫДАЛ ЧАТ ИИ/ В УРОКАХ не было и гуглить не знал как
                this.words[word].isDifficult = isDifficult // не забывать вывести чему равно
    
            }
        }
    }
    
    const hardWordsDictionary = new HardWordsDictionary('Сложные слова');
    console.log(hardWordsDictionary);
        hardWordsDictionary.add('дилетант', 
            'Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями.', false);
            
        hardWordsDictionary.add('неологизм', 
            'Новое слово или выражение, а также новое значение старого слова.');
            
        hardWordsDictionary.add('квант', 
            'Неделимая часть какой-либо величины в физике.', false); 
    
            console.log(hardWordsDictionary.add());
        hardWordsDictionary.remove('неологизм');
        
        hardWordsDictionary.showAllWords();
    
    hardWordsDictionary.get('неологизм') // удалил -нет слова
    
// console.log(this.words.word[1]); //хочу вывести ,допустим ключ-слово само или значение- как могу сделать??
// console.log(val.word[1]);

}
// task7()


/*13.5*/

function task8() {

    class Developer{
        constructor(fullName, age,  position) {
            this.fullName = fullName
            this.age = age
            this.position = position
            this.technologies = []
    
        }
    code() {}
    learnNewTechnologies (technology) {
        this.technologies.push(technology)
    }
    }
    
    
    class JuniorDeveloper extends Developer{
    
        constructor(fullName, age,position = 'junior', technology){
    super(fullName, age,  position)
            this.technologies = ['HTML', 'CSS', 'JavaScript']
    
        }
        code(){
            console.log(`${this.position} разработчик пишет код...`);
        }
        learnNewTechnologies(technology) {
        this.technologies.push(technology)
        }
    }
    
    class MiddleDeveloper extends Developer{
        constructor(fullName, age,position = 'MiddleDeveloper'){
    super(fullName, age,  position)
    this.technologies = ['HTML', 'CSS', 'JavaScript', 'React']
    
        }
        code(){
            console.log(`${this.position} разработчик пишет код...`);
        }
        learnNewTechnologies(technology) {
            this.technologies.push(technology)
            }
    }
    
    class SeniorDeveloper extends Developer{
        constructor(fullName, age,position = 'SeniorDeveloper'){
            super(fullName, age,  position)
            this.technologies = ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS']
    
                }
                code(){
                    console.log(`${this.position} разработчик пишет код...`);
                }
                learnNewTechnologies(technology) {
                    this.technologies.push(technology)
                    }
            }
    
    
    const juniorDeveloper = new JuniorDeveloper('Анастасия', 20);
    const middleDeveloper = new MiddleDeveloper('Игорь', 25);
    const seniorDeveloper = new SeniorDeveloper('Максим', 30);
    
    juniorDeveloper.code(); // Junior разработчик пишет код...
    middleDeveloper.code(); // Middle разработчик пишет код...
    seniorDeveloper.code(); // Senior разработчик пишет код...
    
    console.log(juniorDeveloper.technologies); //вызов технологий у джуна
    
    
    console.log(juniorDeveloper.fullName, juniorDeveloper.age, juniorDeveloper.position, juniorDeveloper.technologies); 
    // 'Анастасия' 20 'Junior' ['HTML', 'CSS', 'JavaScript']
    console.log(juniorDeveloper.position);
    console.log(middleDeveloper.fullName, middleDeveloper.age, middleDeveloper.position, middleDeveloper.technologies); 
    // 'Игорь' 25 'Middle' ['HTML', 'CSS', 'JavaScript', 'React']
    
    console.log(seniorDeveloper.fullName, seniorDeveloper.age, seniorDeveloper.position, seniorDeveloper.technologies); 
    // 'Максим' 30 'Senior' ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS', 'Docker']
}
// task8()


/*13.1*/


function task9(){
    const attacker = {
        archer: 30,
        footSoldier: 55,
        cavalry: 10,
        artillery: 3, 
    
        checkChancesToWin(defenderObject) {
            let chance = 0
            const getKeyDeffender = Object.keys(defenderObject);
            const getMaxChance = getKeyDeffender.length
    
            getKeyDeffender.forEach(key =>{
                if(this[key] > defenderObject[key]) {
                    chance++
                }
            })
            return [chance, getMaxChance]
        },
    
        improveArmy() {
           
            for(const key in this) {// this - обращение к этому объекту
                if(typeof this[key] === 'number' && !(this[key] instanceof Function)) {
                    this[key] +=5
                }
                }
            }, //НЕ ЗАБВАТЬ РАЗДЕЛЯТЬ МЕТОДЫ И СВ-ВА ЗАПЯТЫМИ!!!
    
            attack(defender) {
                const [chance, getMaxChance] = this.checkChancesToWin(defender)
    
                    if((chance / getMaxChance) * 100 < 70 ) {
                        this.improveArmy()
                        console.log(`Наши шансы равны ${chance} / ${getMaxChance} ,необходимо укрепление!!`);
                    } else {console.log(`Мы усилились! Мы несомненно победим! Наши шансы высоки!`);
        
                    }
                }
            
               
            }
    
        
    
    
    // console.log(attacker.improveArmy()); //андефайн, но значения после вызова прибавляет
    // console.log(attacker); //++значение
     
     const defender = {
        archer: 33,
        footSoldier: 50,
        cavalry: 40,
        artillery: 10,
    
     }
    
     attacker.attack(defender); // Наши шансы равны 1/4. Необходимо укрепление! 
    attacker.attack(defender); // Наши шансы равны 2/4. Необходимо укрепление! 
    attacker.attack(defender); // Мы усилились! Мы несомненно победим! Наши шансы высоки! 
}
// task9()



