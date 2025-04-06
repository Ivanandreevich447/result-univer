import React from "react";
import classes from './MyInput.module.css'

const MyInput = (props) => {


	return (
		//все что укажу тут в пропсах- улетит ,где пишем компонент из-за {...props}
		<input className={classes.myInput}  {...props}/>



	)
}


export default MyInput;
