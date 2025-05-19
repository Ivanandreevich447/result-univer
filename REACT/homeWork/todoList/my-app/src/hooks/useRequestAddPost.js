import { useState } from 'react';
// import {ref, push} from 'firebase/database'
// import { db } from '../firebase'


//передаю рефреш в аргументы-тк он используется везде
const useRequestAddPost = (refreshData) => {
		const [isCreating, setIsCreating] = useState(false);
		const [addNewPostTitle, setAddNewPostTitle] = useState("");


		//добавить пост
	const addNewPost = () => {
		setIsCreating(true);
		fetch("http://localhost:3003/posts", {
			method: "POST",
			headers: { "Content-Type": "application/json; charset=utf-8" }, //кодировки
			//JSON.stringify( превращаю обьект в текст формата json)
			body: JSON.stringify({
				title: addNewPostTitle,
			}),
		})
			//принимаю данные и конвертирую обратно в json()для работы дальше
			.then((response) => response.json())
			.then((response) => {
				console.log("новый пост добавлен", response);
				refreshData();
				setAddNewPostTitle("");
			})
			.finally(() => setIsCreating(false));
	};

	

return {
	isCreating,
	addNewPostTitle,
	setAddNewPostTitle,
	addNewPost
}

}

export default useRequestAddPost;
