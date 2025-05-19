import { useState } from "react";

const useRequestRenamePost = (refreshData) => {
	const [isRenaming, setIsRenaming] = useState(false);
	const [isReName, setIsReName] = useState("");


	//изменить пост
	const reNamePost = (id) => {
		setIsRenaming(true);
		fetch(`http://localhost:3003/posts/${id}`, {
			method: "PUT", //изменяю пост- добавить инпут
			headers: {
				"Content-Type": "application/json;charset=utf-8",
			},
			body: JSON.stringify({
				title: isReName,
			}),
		})
			.then((resp) => resp.json())
			.then((json) => {
				console.log("пост изменил", json);
				refreshData();
			})
			.finally(() => setIsReName(""));
	};

	return {
		isReName,
		isRenaming,
		reNamePost,
		setIsReName
	}

}

export default useRequestRenamePost;
