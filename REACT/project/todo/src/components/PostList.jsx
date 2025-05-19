import React from "react";
import PostItem from "./PostItem";



//укажу через пропс сразу объект {posts} - чтобы принимать список постов
//так могу динамически менять данные - еще название списка постов-TITLE тоже укажу в пропс
// remove для удаления постов пропс
const PostList =({posts,title, remove}) => {


	return (
<div>
<h1 style={{ textAlign: "center" }}>{title}</h1>
{posts.map((post, index) => (
	//  передаю пропс удаления сюда и В постАйтем задать обработчик по клику!!
	//еще в постАйтем надо передать в кнопку- при клике обработчик следит и удалит
	<PostItem remove={remove} number={index+1} post={post} key={post.id} />
))}


</div>

	)
}


export default PostList;
