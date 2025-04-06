import React, { useState } from "react";
import styles from './styles/App.module.css'
import Field from './components/Field';
import Information from './components/Information'

const App = () => {

	const arrField =['', '', '', '', '', '', '', '', '']


	const [currentPlayer , setCurrentPlayer] = useState('X')
	const [isGameEnded, setIsGameEnded] = useState(false)
	const [isDraw,  setIsDraw] = useState(false)
	const [field, setField] = useState(arrField)

const handlClickReset = ()=> {
	setCurrentPlayer('X')
	setIsGameEnded(false)
	setIsDraw(false)
	setField(arrField)
}


	// currentPlayer, setCurrentPlayer, isGameEnded, setIsGameEnded, isDraw, setIsDraw, field, setField
	return (
		<div
className={styles.container}
		>
<button
className={styles.btn}
onClick={()=> handlClickReset()}
>
	Начать занова
</button>


<Field
setIsDraw={setIsDraw}
isDraw={isDraw}
field={field}
setField={setField}
isGameEnded={isGameEnded}
currentPlayer={currentPlayer}
setIsGameEnded={setIsGameEnded}
setCurrentPlayer={setCurrentPlayer}

/>

<Information
isDraw={isDraw}
isGameEnded={isGameEnded}
currentPlayer={currentPlayer}
/>

		</div>
	)
}


export default App;
