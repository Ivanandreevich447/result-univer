import React from 'react';
import classes from './MyButton.module.css'

const MyButton = ({children, ...props}) => {
    return (
        // ниже передал ...props - и те пропсы, которые передаю в баттон тут - буду улетать и вы АПП ,где вызвали компонент кнопки
        <button {...props} className={classes.myBtn} >
            {/* спец пропс -чилдрен/выше прописал его и иже пмогу без слова пропс писать */}
            {children}
        </button>
    );
};

export default MyButton;