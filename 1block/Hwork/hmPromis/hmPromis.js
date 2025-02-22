/* задача 1.1 */
function task1 () {


    const listUsers = 'https://jsonplaceholder.typicode.com/users'  

    const dataContainer = document.querySelector('#data-container')
    
    function createListElement (text) {
        const listElement = document.createElement('li')
        const listElementA = document.createElement('a')
        listElementA.href = '#'
        listElementA.textContent = text
        listElement.append(listElementA)
    
        return listElement
    } 
    
    const toggleLoader = () => {
    const loaderHTML = document.querySelector('#loader')
    const isHidden = loaderHTML.hasAttribute('hidden')
    if(isHidden) {
        loaderHTML.removeAttribute('hidden')
    } else {
        loaderHTML.setAttribute('hidden', '')
    }
    }
    
    const getAllUsers =() => {
        toggleLoader()
    
        const result = fetch(listUsers, {
            method: 'GET'
                })
                console.log(result);
                
                result
                .then((response) => {
            if(!response.ok) {
                throw new Error ('ошибка с запросом возникла- включи ВПН попробуй')
            } 
            return response.json() //декодер формата
                })
                // console.log(users);
                .then((users) => {
                    users.forEach(user => {
                        const userHTML = createListElement(user.username)
            dataContainer.append(userHTML)
    
                    })
                    console.log(users);
                })
                
                .catch((error) => {
                    console.log(error);
                })
                .finally(() => {
        toggleLoader()
            
                })
    }
    getAllUsers()
}
// task1()



/* задача 1.2 */
function task2 () {
    const listUsers = 'https://jsonplaceholder.typicode.com/users'  

    const dataContainer = document.querySelector('#data-container')
    
    function createListElement (text) {
        const listElement = document.createElement('li')
        const listElementA = document.createElement('a')
        listElementA.href = '#'
        listElementA.textContent = text
        listElement.append(listElementA)
    
        return listElement
    } 
    
    const toggleLoader = () => {
        const loaderHTML = document.querySelector('#loader')
        const isHidden = loaderHTML.hasAttribute('hidden')
        if(isHidden) {
            loaderHTML.removeAttribute('hidden')
        } else {
            loaderHTML.setAttribute('hidden', '')
        }
        }
    

function getUsersByIds(ids) {

const requests = ids.map((id) => fetch(`${listUsers}/${id}`))
toggleLoader()

Promise.all(requests)
.then((responses) => {
        console.log(responses);//там массив задекодирован-надо извлечь
const resultListUsers = responses.map((respons) => respons.json())
return Promise.all(resultListUsers)
    })
    .then((users) => {
        users.forEach(user => {
const userHTML = createListElement(user.name) //каждый юсер по шаблону будет по name положен сейчас в хтмл
console.log(user);
dataContainer.append(userHTML)
        })
     
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        toggleLoader()
                    
     })
}
getUsersByIds([5, 6, 2, 1, 9])

}

// task2()



/* задача 1.3 */

function task3 () {

    const urlPhoto = 'https://api.slingacademy.com/v1/sample-data/photos'

    const dataContainer = document.querySelector('#data-container')

function getFastestLoadedPhoto(ids) {
    const toggleLoader = () => {
        const louder = document.querySelector('#loader')
        const isLouder = louder.hasAttribute('hidden')
        if(isLouder) {
            louder.removeAttribute('hidden')
        } else {
            louder.setAttribute('hidden', '')//обязательно 2 параметра
        } 
        }

    const createElementPhoto =  (textImg, textSrc)=> {
        const listElement = document.createElement('li')
        listElement.classList = 'photo-item'
        
        const elementImg = document.createElement('img')
        elementImg.classList = 'photo-item__image'
        elementImg.src = textImg
        listElement.append(elementImg)
        
        const elementTitle = document.createElement('h3')
        elementTitle.classList = 'photo-item__title'
        elementTitle.textContent = textSrc
        listElement.append(elementTitle)
        
        return listElement
        }
        

const requests = ids.map(id => fetch(`${urlPhoto}/${id}`) )
console.log(requests);
toggleLoader()
Promise.race(requests)
    .then((response) => {
        console.log(response);
return response.json() 
    })
    .then((photos) => {  
        console.log(photos);
        console.log(photos.photo.title);//там есть тайтл 
        const photoTitle = photos.photo.title
        const urlPhotoSrc = photos.photo.url

    const photoHTML = createElementPhoto(urlPhotoSrc, photoTitle)
    dataContainer.append(photoHTML)
    })
   .catch((error) => {
    console.log(`${error} ошибка чтения url`);
   })
   .finally(() => {
toggleLoader()

   })

}
getFastestLoadedPhoto([60,12, 55, 11, 34, 23])

}
// task3()




    //Асинхронность (async/await)



/*17.1*/

function task4() {
    const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";
    let isLoading = false;

    const createNewPost = async () => {
        isLoading = true;

        try {
            const response = await fetch(POSTS_URL, {
                method: "POST"
            })
            console.log(response);
            const result = await response.json()
            console.log('result', result);

        } catch (error)  {
            console.log("error", error);
        } finally {
            isLoading = false
        }

    }
    // createNewPost()

}
// task4()



/*17.2*/

function task5( ) {
    const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';

    const getTodosByIds = async (ids) => {

        try {
            const requests = await ids.map((id) => fetch(`${TODOS_URL}/${id}`))
            console.log(requests);
        
                const response = await Promise.all(requests)
        console.log(response);
        
                const dataResults = await Promise.all(response.map((data) => data.json())) 
        console.log(dataResults);
        
        
        } catch(error) {
            console.log(error);
          }
       

    
    }
    getTodosByIds([43, 21, 55, 100, 10])

}

// task5()




/*17.3*/

function task6( ) {
const dataContainer = document.querySelector('#data-container')

const toggleLoader = () => {
    const loaderHTML = document.querySelector('#loader')
    const isHidden = loaderHTML.hasAttribute('hidden')
console.log(loaderHTML);

    if(isHidden) {
        loaderHTML.removeAttribute('hidden')
    } else {
        loaderHTML.setAttribute('hidden', '')
    }
    }
function createElementAlbums (text) {
    const elementLi = document.createElement ('li')
    elementLi.textContent = text
    return elementLi
}
async function renderAlbums () {

const albumsUrl = 'https://jsonplaceholder.typicode.com/albums'

toggleLoader()
try {
    const requests = await fetch(albumsUrl)
    
    const response = await requests.json()

    dataContainer.innerHTML = ''

    response.forEach((album) => {
    const albumsHTML = createElementAlbums(album.title)

    dataContainer.append(albumsHTML)

    })
} catch (error) {
dataContainer.textContent = 'Произошла ошибка в получении данных об альбомах...'
} finally {
    toggleLoader()
}
}

renderAlbums()
}
task6()


