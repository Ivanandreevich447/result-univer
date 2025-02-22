/* 18.1*/
function task1 () {

  //первый промис будет
  const promise = new Promise((resolve) => {
    console.log('Promise');// 1
    resolve(); //2-после зен будет вызван
  });

//web api - колбэк квик - после мИкрозадач-конец
setTimeout(() => {
    console.log('setTimeout');
  }, 0);


//эт мИкрозадача в очереди главнее ,чем коллбэк квик
  promise.then(() => { 
    console.log('Promise resolve');//3 по очерди
  });
  console.log('End'); //2- тоже просто синхронный по очереди своей

  /*
  Promise
  End
Promise resolve
setTimeout
*/

}




/* 18.1*/

function task2() {


    function runCode() {
        console.log('before promise'); //  1
        return new Promise((resolve) => { 

            //тоже в конец идет
          setTimeout(() => { //последний зашел и уйдет
            console.log('Zero Promise');// 4
            resolve(); 
          }, 0);
        });
      }

//сет - коллбэк- ран код еще не доконца вызвался и это вроде как сокрее вызывается в очереди
      setTimeout(() => {
        console.log('Zero'); //3
      }, 0);

//мИкрозадача
      runCode().then(() => console.log('Zero Promise Invoked')); // после всего run!

      console.log('One'); // 2



      /*
    before promise
    One
    Zero
    Zero Promise  
    Zero Promise Invoked
    
      */
}
// task2()



/* 18.3 */

function task3 () {


    const getData = (callback) => { //тут первое выводит в функции-потом колбэк

        fetch('https://jsonplaceholder.typicode.com/users/1')
          .then((response) => response.json())
          .then((user) => {
            console.log('Success'); //  2
            callback(user);  
          })
          .catch((error) => {
            console.log(error);  //no
          });
      }


      getData(() => {
        console.log('user received');//  3
        const promise = new Promise((resolve) => {
          setTimeout(() => {
            resolve('promise resolved');//после нее 106 строка
          }, 500);
          console.log('in promise');// 4
          setTimeout(() => {
            console.log('last set timeout');  // 5
          }, 400);
       });
       promise.then((result) => {
         console.log(result);// 6
        });
      });


      console.log('End')// 1




}
task3()