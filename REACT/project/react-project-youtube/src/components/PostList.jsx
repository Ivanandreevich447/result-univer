import React from 'react';
import PostItem from './PostItem';


// указываем пропс- там надо получить мне посты из АПП- это объекты и тайтл - указываю в пропс объекты постов значит
const PostList = ({posts, title, remove}) => {
    return (
        <div>
            {/* так писать стили css */}
<h1 style={{textAlign: "center"}}>
        {title}
    </h1>

 {/* //для вывода списка постов и тд - МАП использую! */}
 {/* так же добавил индекс- для вывода номера у новых постов    */}
  {posts.map((post, index) => 
<PostItem remove={remove} number={index+1} post={post} key={post.id} />
  )
}

        </div>
    );
};

export default PostList;