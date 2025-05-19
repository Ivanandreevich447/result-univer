import { useState } from "react";


const useRequestDeletePost = (refreshData) => {
	const [isDeleting, setIsDeleting] = useState(false);


	//передать ид в аргументах /удаление поста
	const deletePost = (id) => {
		setIsDeleting(true);
		fetch(`http://localhost:3003/posts/${id}`, {
			method: "DELETE",
		})
			.then((response) => response.json())
			.then((response) => {
				console.log("пост удалил", response);
				refreshData();
			})
			.finally(() => setIsDeleting(false));

	};

	return {
		deletePost,
		isDeleting
	}
}

export default useRequestDeletePost;
