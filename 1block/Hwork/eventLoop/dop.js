

function task1(){

    function postAll (renderPost) {
        renderPost.forEach((posts) => {
    posts
        })
    }
    
    postAll([1,3,5])
    
    
    const postUrl = 'https://jsonplaceholder.typicode.com/posts'
    
    const commentAll = document.querySelector('.post__comments')
    const postTitle = document.querySelector('.post__title')
    const postText = document.querySelector('.post__text')
    
    if (!commentAll || !postTitle || !postText) {
        console.error('Один из элементов DOM не найден');
        return;
    }
    
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
    // const requests = await fetch(`${postUrl}/${postId}`)
    
    // //получаем комментарии
    // const commentId = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
    
    //сменил на такой вызов промис.алл двойной
    const[postResponse, commentsResponse] = await Promise.all([
        fetch(`${postUrl}/${postId}`),
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
    ])
    
    if(!Response.ok) {
        throw new error(error)
    }
    const post = await postResponse.json()
    const comments = await commentsResponse.json()
    
    
    //добавляю данные поста 
    postTitle.textContent = post.title
    postText.textContent = post.body
    
    //перебор комментов
    comments.forEach((comment) => { 
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
        renderPost(1)
        
    }
    
    task1()
    

    