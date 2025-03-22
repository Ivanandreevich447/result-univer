import { useState } from "react";
import "./App.css";

export const App = () => {
	// 3. состояния для чисел  и знака -пустой или ноль
	const [operand1, setOperand1] = useState("");
	const [operand2, setOperand2] = useState("");
	const [operator, setOperator] = useState("");
	const [result, setResult] = useState(null);
	const [trueOperand1, setTrueOperand1] = useState(true);

	// 4. надо массив NUMS из всех цифр
	const NUMS = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

	// 5. беру prevState -для прошлого значения в state
	//состояние(прошлое) => прошлое ("" или уже цифра)+ что ввел сейчас
	//можно назвать просто prev

	const handleClick = (num) => {
		if (trueOperand1) {
			setOperand1((prevOperand) => prevOperand + num);
		} else {
			setOperand2((prevOperand) => prevOperand + num);
		}
	};

	// 6. оператор для + - и для сброса строк
	const handleOperator = (op) => {
		if (operand1) {
			// проверка на первое введенное число
			setOperator(op); //ставим оператор нужный
		}
		setTrueOperand1(false); //переключение на второе число
	};

	const rest = () => {
		console.log(rest);
		setOperand1("");
		setOperand2("");
		setOperator("");
		setResult("");
		setTrueOperand1(true);
	};

	const res = () => {
		//parseInt() или parseFloat - к числу привести
		const num1 = parseFloat(operand1);
		const num2 = parseFloat(operand2);

		if (operator === "+") {
			return num1 + num2;
		}
		if (operator === "-") {
			return num1 - num2;
		}
		if (operator === "*") {
			return num1 * num2;
		}
		if (operator === "/") {
			return num1 / num2;
		}
	};

	const handlClickResult = () => {
		const calcRes = res();
		setResult(calcRes);
	};

	return (
		<div className="container">
			{/* <h1>калькулятор</h1> */}

			<div className="displayInput">
				{operand1} {operator} {operand2}
				{/* <p > {operand1}</p>
				<p> {operator || ""}</p>
				<p> {operand2}</p>*/}
				<p> {result !== null ? result : ""}</p>
			</div>

			<div className="buttons">
				<div className="btnNums">
					{NUMS.map((num) => (
						<button
							key={num}
							onClick={() => handleClick(num)}
							disabled={!trueOperand1 && !operator === ""}
							className="btn"
						>
							{num}
						</button>
					))}

					<button className="btn" onClick={rest}>
						C
					</button>

					<button
						className="btn btnOrange"
						onClick={handlClickResult}
					>
						=
					</button>
				</div>

				<div className="operator">
					<button
						className="btn btnOrange "
						disabled={!operand1}
						onClick={() => handleOperator("+")}
					>
						+
					</button>
					<button
						className="btn btnOrange"
						disabled={!operand1}
						onClick={() => handleOperator("-")}
					>
						-
					</button>
					<button
						className="btn btnOrange"
						disabled={!operand1}
						onClick={() => handleOperator("*")}
					>
						*
					</button>
					<button
						className="btn btnOrange"
						disabled={!operand1}
						onClick={() => handleOperator("/")}
					>
						/
					</button>
				</div>
			</div>

			{/* <p>
					{operand1} {operator} {operand2} = {result}
				</p> */}
		</div>
	);
};


//там через ипунт был ввод
// <form onSubmit={handleClick1} >
// 	<label>
// 	<input
// 	 type='number'
// value={operand1}
// onChange={(e) => setOperand1(e.target.value)}
// />
// </label>
// {/* <button type='submit'> ввод1</button> */}
// </form>

{
	/* <button onClick={sum}>+</button>
<button onClick={diff}>-</button>
<button onClick={rest}>сбросить</button> */
}

// <form onSubmit={handleClick2} >
// <label>
// 	<input
// 	 type='number'
// value={operand2}
// onChange={(e) => setOperand2(e.target.value)}
// />
// </label>
// {/* <button type='submit'> ввод2</button> */}
// </form>
