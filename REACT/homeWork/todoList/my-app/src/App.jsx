// import { useEffect, useState } from "react";
import {  useState } from "react";
import useRequestAddPost from "./hooks/useRequestAddPost";
import useRequestDeletePost from "./hooks/useRequestDeletePost";
import useRequestGetPost from "./hooks/useRequestGetPost";
import useRequestRenamePost from "./hooks/useRequestRenamePost";
import useRequestSortPost from "./hooks/useRequestSortPost";

//ЗАКОМЕНТИРОВАННОЕ- ПЕРВЫЙ ЭТАП ЗАДАНИЯ, 
//npx json-server --watch db.json --port 3003 - чтоб следить за созданным сервером


function App() {

	// const [posts, setPosts] = useState([]);
	// const [isLoading, setIsLoading] = useState(false);
	// const [isRenaming, setIsRenaming] = useState(false);
	// const [isCreating, setIsCreating] = useState(false);
	// const [isDeleting, setIsDeleting] = useState(false);
	// const [isSortTitle, setIsSortTitle] = useState(false)
	// const [isSearch, setIsSearch] = useState(false)
	// const [addNewPostTitle, setAddNewPostTitle] = useState("");
	// const [isReName, setIsReName] = useState("");
	// const [searchPostTitle, setSearchPostTitle] = useState('')
	// const [lastSearch, setLastSearch] = useState('')
	const [refreshFlag, setRefreshFlag] = useState(false);

	const refreshData = () => setRefreshFlag((prev) => !prev);

	const { isCreating,
		addNewPostTitle,
		setAddNewPostTitle,
		addNewPost } = useRequestAddPost(refreshData)

	const { deletePost,
		isDeleting } = useRequestDeletePost(refreshData) //(из аргумента флаг)

		const { posts,setPosts, searchPostTitle, setSearchPostTitle, setLastSearch, isLoading } = useRequestGetPost(refreshFlag)

		const { isReName,
			isRenaming,
			reNamePost, setIsReName } = useRequestRenamePost(refreshData)

			const {
				sortPostTitle, isSortTitle } = useRequestSortPost()


	// useEffect(() => {
	// 	if(lastSearch.trim()) {
	// 			fetch(`http://localhost:3003/posts?title_like=${searchPostTitle}`)
	// 			.then((resp) => resp.json())
	// 			.then((json) => {
	// 				console.log('поиск по фразе', json);
	// 				setPosts(json)
	// 			})
	// 			.finally(() => {
	// 				setIsSearch(false)
	// 				setSearchPostTitle('')

	// 			})
	// 	} else {
	// 		setIsLoading(true);
	// 		fetch("http://localhost:3003/posts")
	// 			.then((loadedPosts) => loadedPosts.json())
	// 			.then((loadedPosts) => {
	// 				setPosts(loadedPosts);
	// 				console.log(loadedPosts);
	// 			})
	// 			.finally(() => setIsLoading(false));
	// 	}

	// }, [refreshFlag, lastSearch]);

	// //добавить пост
	// const addNewPost = () => {
	// 	setIsCreating(true);
	// 	fetch("http://localhost:3003/posts", {
	// 		method: "POST",
	// 		headers: { "Content-Type": "application/json; charset=utf-8" }, //кодировки
	// 		//JSON.stringify( превращаю обьект в текст формата json)
	// 		body: JSON.stringify({
	// 			title: addNewPostTitle,
	// 		}),
	// 	})
	// 		//принимаю данные и конвертирую обратно в json()для работы дальше
	// 		.then((response) => response.json())
	// 		.then((response) => {
	// 			console.log("новый пост добавлен", response);
	// 			refreshData();
	// 			setAddNewPostTitle("");
	// 		})
	// 		.finally(() => setIsCreating(false));
	// };

	// //передать ид в аргументах /удаление поста
	// const deletePost = (id) => {
	// 	setIsDeleting(true);
	// 	fetch(`http://localhost:3003/posts/${id}`, {
	// 		method: "DELETE",
	// 	})
	// 		.then((response) => response.json())
	// 		.then((response) => {
	// 			console.log("пост удалил", response);
	// 			refreshData();
	// 		})
	// 		.finally(() => setIsDeleting(false));

	// };

	// //изменить пост
	// const reNamePost = (id) => {
	// 	setIsRenaming(true);
	// 	fetch(`http://localhost:3003/posts/${id}`, {
	// 		method: "PUT", //изменяю пост- добавить инпут
	// 		headers: {
	// 			"Content-Type": "application/json;charset=utf-8",
	// 		},
	// 		body: JSON.stringify({
	// 			title: isReName,
	// 		}),
	// 	})
	// 		.then((resp) => resp.json())
	// 		.then((json) => {
	// 			console.log("пост изменил", json);
	// 			refreshData();
	// 		})
	// 		.finally(() => setIsReName(""));
	// };


	// const searchPost = () => {
	// 	if (!searchPostTitle.trim()) return;
	// 	setLastSearch(searchPostTitle.trim());
	// 	setSearchPostTitle('');
	//   };



	// //поиск по фразе
	// const searchPost = (searchPostTitle) => {
	// 	if(!searchPostTitle.trim()) return //пустую строку не ищем
	// 	setLastSearch(searchPostTitle) //чтоб юзэффект сам обработал
	// 	setSearchPostTitle('')
	// 	// fetch(`http://localhost:3003/posts?title_like=${searchPostTitle}`)
	// 	// .then((resp) => resp.json())
	// 	// .then((json) => {
	// 	// 	console.log('поиск по фразе', json);
	// 	// 	setPosts(json)
	// 	// })
	// 	// .finally(() => {
	// 	// 	setIsSearch(false)
	// 	// 	setSearchPostTitle('')
	// 	// })
	// };


	// //сортировка
	// const sortPostTitle =  () => {
	// 	setIsSortTitle(true)
	// 	fetch('http://localhost:3003/posts?_sort=title&_order=asc')
	// 	.then((resp) => resp.json())
	// 	.then((json) =>{
	// 	console.log('сортировка по возрастанию', json)
	// 	setPosts(json)}

	// 	)

	// }


	return (
		<>
			<ul>
				{posts.map((post) => (
					<li key={post.id}>
						{post.title}
						{/* чтоб на каждую лишку была своя кнопка удаление */}
						<button onClick={() => deletePost(post.id)}>
							удалить пост
						</button>
						<button onClick={() => reNamePost(post.id)}>
							изменить пост
						</button>

					</li>
				))}
			</ul>
			<button onClick={addNewPost}>добавить пост</button>
			<input
				placeholder="введи новый пост"
				value={addNewPostTitle}
				onChange={(e) => setAddNewPostTitle(e.target.value)}
				type="text"
			/>

			<input
				placeholder="изменить пост"
				value={isReName}
				type="text"
				onChange={(e) => setIsReName(e.target.value)}
			/>
			<input type="text"
			placeholder="введи текст для поиска"
			value={searchPostTitle}
			onChange={(e) => setSearchPostTitle(e.target.value)}
			/>
				<button onClick={() => setLastSearch(searchPostTitle)}>
							найти пост
						</button>
				<button onClick={() => setLastSearch('')} > сброс поиска</button>
				<button onClick={() => {
			 setLastSearch('sorted')
			 refreshData()
				} } disabled={isSortTitle} >сортировка по алфавиту</button>


		</>
	);
}

export default App;
