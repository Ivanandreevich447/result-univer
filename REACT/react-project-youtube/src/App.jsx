import React, { useState } from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import "./styles/app.css";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";

//ВИДЕО НА 1,10М

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "javaScript", body: "Description" },
    { id: 2, title: "javaScript", body: "Description" },
    { id: 3, title: "javaScript", body: "Description" },
  ]);


  const [selectedSort, setSelectedSort] = useState()
  //функц колбэк- принимает newPost- из компонента постФорм и  добавляет в массив постов + новый пост
  const createPost = (newPost) => {
    setPosts ([...posts, newPost]);

  };
  
  //получаем post из дочернего postItem
  //чтоб удалить- ФИЛТР - новый массив - если ид из массива равен ид с которым мы передали ид поста(кнопка удалить) - вернут массив без этого поста с ид
  const removePost = (post) => {
  setPosts (posts.filter(p => p.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort)
    setPosts ([...posts].sort((a, b ) => a[sort].localeCompare(b[sort])))
    console.log(sort);
  }

  return (
    <div className="App">
      {/* create={createPost} — передача функции createPost в проп create.
Теперь внутри компонента <PostForm /> можно использовать эту функцию через props.create.
Это делается, чтобы передавать данные от дочернего компонента (форма) обратно в родительский.
 */}
      <PostForm create={createPost} />

      {/* разделительная полоса */}
        <hr style={{margin: '15px 0'}} />

      <MySelect
      value={selectedSort}
      onChange={sortPosts}

      // список сортировки передаем сюда
      defaultValue = 'Сортировка' 
      options={[
        {value: 'title', name: 'По названию'},
        {value: 'body', name: 'По описанию'}
        ]}/>


        {/* если посты удалены все - выводим надпись/
        делаю проверку длина постов не = 0? выведи посты, равна- выводи надпись
        даже !== 0 можно не писать */}
    {posts.length 
    ?      <PostList remove={removePost} posts={posts} title="Список про JS" />
    : <div>
      <h1 style={{textAlign: "center"}} >Посты не были найдены!</h1>
    </div>
      }
      {/* передаю компонент постлист - передаю список постов -массив- пропс для него posts
      remove функция передаю как пропс без вызова */}
 
    </div>
  );
}

export default App;
