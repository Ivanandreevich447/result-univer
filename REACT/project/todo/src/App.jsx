import React from "react";
import {useMemo, useState } from "react";
import "./styles/App.css";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";



// ВИДЕО НА 1/22

const App = () => {
	const [posts, setPosts] = useState([
		{ id: 1, title: "javaScript", body: "описание поста" },
		{ id: 2, title: "javaScript2", body: "описание поста" },
		{ id: 3, title: "javaScript3", body: "описание поста" },
	]);

	//сделаем 1 состояние ,которое следит фильтром и в начальных имеет алгоритм сортировки и поисковая строка
const [filter, setFilter] = useState({sort: '', query:''})


	//созданный пропс функция - обозначим ее- принимает в себя коллбэк (новый пост) и обновляем состояние массива постов ([...старые посты, новый пост-который принимаем на колбэк])
	const createPost = (newPost) => {
		setPosts([...posts, newPost])
	}

	//получаем post из дочернего компонента
	//функция для удаления постов-тоже приинимает клбэк- пост
	const removePost =  (post) => {
		//меняем состояние постов- фильтруем
		setPosts(posts.filter(p => p.id !== post.id))
	}


	//тут на переменную ставлю функц-где будет отсортирвоанный массив или исходный
	const sortedPosts = useMemo(() => {
		if(filter.sort) {
			//  - [...posts] создаёт копию массива posts, чтобы не менять исходный массив.
    //  - .sort((a, b) => ...) сортирует копию.
    //  - a[filter.sort] и b[filter.sort] — это доступ к значению поля, по которому нужно сортировать.
    //  - localeCompare сравнивает строки с учетом локали, что позволяет корректно сортировать буквы
return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
		}
		else {
			return posts;
		}
	},//только когда изменяется состояние после рендера-показывает состояние, а не каждый рендер обновляет его и загружает код
	[filter.sort, posts])


	const sortedAndSearchPosts = useMemo(()=> {
		// Берём уже отсортированный массив sortedPosts,
  // и фильтруем его по условию: в заголовке поста (post.title)
  // должно содержаться значение searchQuery.
  // Метод toLowerCase() используется для того, чтобы поиск был нечувствителен к регистру.
		return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query))
	}, //  означает, что фильтрация выполняется заново только если изменится строка поиска или сам отсортированный массив изменится (например, если изменился posts или selectedSort).
	[filter.query, sortedPosts])




	return (
		<div className="App">
			<PostForm
			/* передаю пропс - называю create {а функцию назову createPost}*/
			create={createPost}/>

			<hr style={{margin: '15px 0'}} />

		<PostFilter
		filter={filter}
		setFilter={setFilter}
		/>

	{/* //передадим список постов-сам массив - пропс такой - posts={posts} в {тк это обьект передаем} title принимает строку ''
			ТУТ ПРОПСЫ posts/title -ИХ УКАЗАЛИ - В КОМПОНЕНТЕ НУЖНОМ ПЕРЕДАТЬ НАДО ДЛЯ СВЯЗИ ТОЖЕ!! */}
	{/* условная отрисовка с помощью тернарного оператора */}
		{sortedAndSearchPosts.length
		?
			<PostList
			/* передаю пропс на удаление постов */
				remove={removePost}
				//тут передаю хук useMemo - где будет работать одновременно поиск и сортировка
			posts={sortedAndSearchPosts} title="Список постов" />
		:
		 <h1 style={{textAlign: 'center'}}> Список постов пуст </h1>
		}


		</div>
	);
};
export default App;
