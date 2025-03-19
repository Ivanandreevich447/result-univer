import React from 'react';
import MyButton from './UI/button/MyButton';

const PostItem = (props) => {

    return (
        <div>
              <div className="post">
        <div className="post__content">

            {/* обращаюсь через пропс из app, их передал в данные postitem */}
            {/*props.number - это из postlist передал через index - number и тут использовал для номер поста  */}
          <strong> {props.number}.{props.post.title} </strong>
          <div>
          {props.post.body}
          </div>
        </div>
        <div className="post__btns">

            {/* вешаю слушатель событий - при наджатии на кнопку
            у  props.post - будет ид - и по нему пост будет удален */}
          <MyButton onClick={() => props.remove(props.post)} >Удалить</MyButton>
        </div>
      </div>
        </div>
    );
};

export default PostItem;