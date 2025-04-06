
import React from 'react';
import MyButton from './UI/button/MyButton';

const PostItem = (props) => {
	return (
		<div className='post'>
			<div className='post__content'>
				{/* тут пропс принимаю -те данные ,которые укажу в <PostItem   тут у нам мап и в нем пишем там post(1пост из массива постов) />   к ним обращение PROPS.POST. что вытаскиваем */}
				{/* в мап задали намбер={index+1} + каждый пост новый -новый индекс+1 - тут передаем его */}
				<strong>{props.number}.  {props.post.title}</strong>

				<div>
				{props.post.body}
			</div>
			</div>


			<div className='post__btn'>
			<MyButton
			// задаю обработчик на клик-функция пропс.удаления(получение поста через пропс)
			onClick = {() => props.remove(props.post)}
			className='btn'>Удалить</MyButton>

			</div>

		</div>
	);
};

export default PostItem;
