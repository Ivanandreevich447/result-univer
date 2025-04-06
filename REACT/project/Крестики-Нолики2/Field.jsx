import React from "react";
import styles from "../styles/Field.module.css";
// import WinPatterns from "./WinPatterns";

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

const FieldLayout = ({
	field,
	isGameEnded,
	currentPlayer,
	setCurrentPlayer,
	setField,
	setIsGameEnded,
	setIsDraw,
}) => {

//проверка на победу-приниамает массив и кто ходит
// some() — чтобы хватило одной выигрышной линии.
// every() — чтобы все три клетки в линии совпадали.
	const checkWin = (field, currentPlayer) =>
		//делим весь массив на под массивы
		WIN_PATTERNS.some((winPattern) =>
			//проверка каждого массива внутри с нашим
		//все ли символы в массиве ===игроку?-да-победа его
			winPattern.every((cellIndex) => field[cellIndex] === currentPlayer)
		);

	const handleClick = (index) => {
		//  // Сначала проверяем, закончена ли игра или клетка занята
		if (isGameEnded || field[index] !== "") return;

		//создам копию нашего массива
		const newField = [...field];
		//меняю значение по индексу,который передаю в запись на кнопку с кликом
		newField[index] = currentPlayer;
		//меняю сост
		setField(newField);

		//задаю переменные на победу и ничью
		const isWin = checkWin(newField, currentPlayer);
		const isDraw = !newField.includes("") && !isWin;

		//сначала проверка - нет ходу после конца игры и перезаписи клеток
		if (isWin) {
			setIsGameEnded(true);
			return; //возращаем после смены состояния!!
		}
		if (isDraw) {
			setIsDraw(true);
			setIsGameEnded(true);
			return;
		}

		//prev - сост сейчас - до обновления
		setCurrentPlayer((prev) => (prev === "X" ? "O" : "X"));

		console.log(checkWin(newField, currentPlayer));
		console.log(newField);
	};

	return (
		<div>
			{/* cell-клетка для ввода */}
			{field.map((cell, index) => (
				<button
				//блокировка кнопок,е сли нет пустых полей или игра закончена
					disabled={cell !== "" || isGameEnded}
					className={styles.btn}
					key={index}
					onClick={() => handleClick(index)}
				>
					{cell}
				</button>
			))}
		</div>
	);
};

export default FieldLayout;
