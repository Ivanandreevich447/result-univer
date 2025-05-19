import { useState, useEffect } from "react";

const useRequestGetPost = (refreshFlag) => {
	const [lastSearch, setLastSearch] = useState('')
	const [searchPostTitle, setSearchPostTitle] = useState('')
	const [isSearch, setIsSearch] = useState(false)
	const [posts, setPosts] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	// const [refreshFlag, setRefreshFlag] = useState(false);


		useEffect(() => {
			// if(lastSearch.trim()) {
			// 		fetch(`http://localhost:3003/posts?title_like=${searchPostTitle}`)
			// 		.then((resp) => resp.json())
			// 		.then((json) => {
			// 			console.log('поиск по фразе', json);
			// 			setPosts(json)
			// 		})
			// 		.finally(() => {
			// 			setIsSearch(false)
			// 			setSearchPostTitle('')

			// 		})
			// } else {
			// 	setIsLoading(true);
			// 	fetch("http://localhost:3003/posts")
			// 		.then((loadedPosts) => loadedPosts.json())
			// 		.then((loadedPosts) => {
			// 			setPosts(loadedPosts);
			// 			console.log(loadedPosts);
			// 		})
			// 		.finally(() => setIsLoading(false));
			// }

				//вместо if else - так короче прописать
				const url = lastSearch === 'sorted'
				? 'http://localhost:3003/posts?_sort=title&_order=asc'
				: lastSearch
				  ? `http://localhost:3003/posts?title_like=${lastSearch}`
				  : 'http://localhost:3003/posts';

			  fetch(url)
				.then(res => res.json())
				.then(data => setPosts(data))



		}, [refreshFlag, lastSearch]);

		return {
			setSearchPostTitle,
			setLastSearch,
			searchPostTitle,
			posts
		}
}

export default useRequestGetPost;
