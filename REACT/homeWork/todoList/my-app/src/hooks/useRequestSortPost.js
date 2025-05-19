import { useState } from "react";

const useRequestSortPost = () => {
	const [isSortTitle, setIsSortTitle] = useState(false)
	// const [sortedPosts, setSortedPosts] = useState([]);

	//сортировка
	const sortPostTitle = (setPostCallback) => {
		setIsSortTitle(true)

		fetch('http://localhost:3003/posts?_sort=title&_order=asc')
		.then((resp) => {
			if(!resp.ok) throw new Error('ошибка сервера');
			return resp.json()
		})
		.then((sortedPosts) =>{
		console.log('сортировка по возрастанию', sortedPosts)
		setPostCallback(sortedPosts)
		})
		.catch( error => {
			console.log('ошикбка сортировки', error);
		})
		.finally(() => setIsSortTitle(false))

	}


	return {
		sortPostTitle,
		// sortedPosts,
		isSortTitle,
		// setSortedPosts
	}
}



// const useRequestSortPost = () => {
// 	const [isSortTitle, setIsSortTitle] = useState(false)
// 	// const [posts, setPosts] = useState([]);


// 	//сортировка по уже загруженым данным без запросов
// 	//localeCompare- сортировка строк
// 	const sortPostTitle =(posts) => {
// 		setIsSortTitle(true)
// 		return [...posts].sort((a,b) => a.title.localeCompare(b.title));

// 		setIsSortTitle(false);
// 		return sortedPost
// 	}

// 		return {
// 			sortPostTitle,
// 			isSortTitle
// 		}
// 	}


export default useRequestSortPost;
