import React, { useState } from "react";
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

//передаю пропс - объект
const PostForm =({create}) => {
	const [post, setPost] = useState({title: '', body: ''})


	const addNewPost = (e) => {
		//убираем перезегрузку стр на нажатие кнопки
		e.preventDefault();

		// новый пост{...старый пост , и меняем айди на новый})
		const newPost = {
			...post,
			id: Date.now()
		}

		//диструктуризация пропсов - вызываем функцию create и туда передаем новый пост
		create(newPost)
	//очитска строк после ввода - преедаю значение ,которое было в начальных прописано у состояния
	setPost({title: '', body: ''})

	};


	return (

		<form>
				<MyInput

					//состояние инпута -value связываем с нашим новыйм состоянием
					value={post.title}
					//делаем управляемый компонент
					//чтоб отслеживать, как вводим что-то в инпут
					//создаю состояние - {там передаю объект ...пост , и меняю там тайтл на вводисое значение- получаю с эвента.тарргет.вэлью}
					onChange={(e) => setPost({...post, title: e.target.value})}
					type="text"
					placeholder="название поста "
				/>
				<MyInput
					value={post.body}
					onChange={(e) => setPost({...post, body: e.target.value})}
					type="text"
					placeholder="описание поста "
				/>

				<MyButton onClick={addNewPost}>Создать пост</MyButton>
			</form>
	)
}

export default PostForm;
