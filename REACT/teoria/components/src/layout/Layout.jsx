import React from 'react';
import { useState } from 'react';
import AppLayout from './AppLayout';


// Stateful— компоненты, имеющие собственное состояние. Часто используются именно для описания логики.
// Stateful-компонент — это тот, у которого есть своё состояние, но практически нет JSX-разметки на выходе.



const Layout = () => {
	//тут задал все состояния для компонента Applayout
	const [a, setA] = useState(0);
	const [b, setB] = useState(0);

	const sum = a + b;

	return (
		<div>
{/* тут пробрасываю все состояния для компонента Applayout */}
<AppLayout a={a} b={b} setA={setA} setB={setB} sum={sum} />
		</div>
	);
};

export default Layout;
