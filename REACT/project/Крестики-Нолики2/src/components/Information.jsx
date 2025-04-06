import React from "react";


const Information =({isDraw, isGameEnded, currentPlayer}) => {

	const status = () => {
		if(isDraw) {
			return 'Ничья'
		}
		if (isGameEnded) {
			return `Победа: ${currentPlayer}`
		}
		if(!isDraw && !isGameEnded) {
	return `Ходит ${currentPlayer}`
		}
	}


	return(
		<div>
<p>{status()}</p>

		</div>
	)
}

export default Information;
