 function task1(){

const postUrl = 'https://jsonplaceholder.typicode.com/posts'

const commentAll = document.querySelector('.post__comments')
const postTitle = document.querySelector('.post__title')
const postText = document.querySelector('.post__text')

//делаю шаблон для каждого коммента отдельно(не добавляю это в разметку html)
function createComment (email, body) {
    const elementDiv = document.createElement('div')
    elementDiv.classList.add ('post-comment')
    
          const autorElement = document.createElement('span')
          autorElement.classList.add ('post-comment__author')
            autorElement.textContent = email
    
          const commentText = document.createElement('span')
          commentText.classList.add ('post-comment__text')
            commentText.textContent = body 
    
            elementDiv.append(autorElement, commentText)
            return elementDiv
        }
    async function renderPost (postId) {

try {
//получаем данные поста
const requests = await fetch(`${postUrl}/${postId}`)

const response = await requests.json()

//добавляю данные поста 
postTitle.textContent = response.title
postText.textContent = response.body

//получаем комментарии
const commentId = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)

const responseComment = await commentId.json()

//перебор комментов
responseComment.forEach((comment) => { 
// console.log(comment);
    const emailHtml = comment.email
    const textHtml = comment.body

    const commentHtml = createComment(emailHtml, textHtml)

    commentAll.append(commentHtml)

})

} catch(error) {
    console.log(error);

}
        
 }
    renderPost(3)
    
}

task1()
