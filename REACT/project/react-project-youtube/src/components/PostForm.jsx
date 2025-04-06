import React, { useState } from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";


const PostForm = ({create}) => {
  const [post, setPost] = useState({ title: "", body: "" });

  const addNewPost = (e) => {
    //чтоб страница каждый раз не обновлялась по дефолту- не передавала значения на сервер
    e.preventDefault();

    //создаю новый пост - туда входит пост -задавал выше + уникальный айдишник для поста
    //выше задал в post значения -тайтл и боди - тут передаю их + ид новый
    const newPost = {
      ...post,
      id: Date.now(),
    };

    //диструкутризация пропсов-вызвать функцию и передать новый пост
    create(newPost)

    //для обнуления инпутов после ввода и нажатии добавить
    setPost({ title: "", body: "" });
  };

  return (
    <form>
      <MyInput
        //связываю value инпута с тайтлом - управляемый компонент
        value={post.title}
        //onChange - функция для отслеживания ,что ввожу в инпут
        // e (event) — объект события, который передаётся обработчику.
        // e.target — сам элемент, вызвавший событие (в данном случае <input>).
        // e.target.value — текущее значение внутри <input>.
        //передаю объект {...развернул старый пост,title: e.target.value -перезатираю эти поля в старом посте-вывожу новые данные }
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        type="text"
        placeholder="назвние поста"
      />

      <MyInput
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
        type="text"
        placeholder="описание поста"
      />

      {/*onClick={addNewPost} - добаавил слушателя - при нажатии вызываю функц аддНевПост */}
      <MyButton onClick={addNewPost}>создать пост</MyButton>
    </form>
  );
};

export default PostForm;
