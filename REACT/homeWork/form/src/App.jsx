import React from 'react';
// import Form from './components/Form/Form' //1 часть
import styles from './App.module.css'
import InputFormik from './components/formik/FormikYup' // 2 часть

const App = () => {
	return (
		<div className={styles.container}>
{/* <Form/> */}
<InputFormik/>
		</div>
	);
};

export default App;
