import React from "react";



//Stateless-компоненты — компоненты, не имеющие собственного состояния и использующие данные из props. Часто используются именно для описания разметки.


// тут принимаю пропсы из КАУНТЕР все
const AppLayout =({a, b, sum, setA, setB}) => (

	<div>

<div>сложение чисел</div>
{/* тут работаю м пропсами из каунтера */}
			<div>A: {a}</div>
			<button onClick={() => setA(a + 1)}>прибавить +1 к а</button>

			<div>B: {b}</div>
			<button onClick={() => setB(b + 1)}>прибавить +1 к в</button>
			<div>сумма : {sum}</div>
	</div>
)

export default AppLayout;
