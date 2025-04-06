import React from 'react';
import classes from './MyInput.module.css'  //импорт css


const MyInput = (props) => {
    return (
        // так же пропсы созданные тут по {...props} -будут улетать ,где развернем этот компонент инпут
        // css классы задаю тут через className={classes.myInput} -  myInput- не как в названии css! надо
        <input className={classes.myInput} {...props} />
            

    );
};

export default MyInput;