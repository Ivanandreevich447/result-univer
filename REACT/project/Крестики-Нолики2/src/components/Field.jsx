import React from "react";
import styles from "../styles/Field.module.css";

const WIN_PATTERNS = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8], // Варианты побед по горизонтали
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8], // Варианты побед по вертикали
	[0, 4, 8],
	[2, 4, 6], // Варианты побед по диагонали
];

const Field = ({
	field,
	setField,
	currentPlayer,
	isGameEnded,
	setIsGameEnded,
	setIsDraw,
	setCurrentPlayer,
}) => {
	const checkWin = (field, currentPlayer) =>
		WIN_PATTERNS.some((winPattern) =>
			winPattern.every((cellIndex) => field[cellIndex] === currentPlayer)
		);

	const handlClick = (index) => {
		if (isGameEnded || field[index] !== "") return;

		const newField = [...field];
		newField[index] = currentPlayer;
		setField(newField);

		console.log(checkWin(newField, currentPlayer));

		const isWin = checkWin(newField, currentPlayer);
		const getIsDraw = !isWin && !newField.includes("");

		if (isWin) {
			setIsGameEnded(true);
			return
		}
		if (getIsDraw) {
			setIsDraw(true);
			setIsGameEnded(true);
			return
		} else {
			setCurrentPlayer((prev) => (prev === "X" ? "O" : "X"));
		}
		console.log(checkWin(newField, currentPlayer));
		console.log(currentPlayer);
	};

	console.log(field);
	console.log(currentPlayer);

	return (
		<div>
			{field.map((cell, index) => (
				<button
					key={index}
					// disabled={}
					className={styles.btn}
					onClick={() => handlClick(index)}
				>
					{cell}
				</button>
			))}
		</div>
	);
};

export default Field;
