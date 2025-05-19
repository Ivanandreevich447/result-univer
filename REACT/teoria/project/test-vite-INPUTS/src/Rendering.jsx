import React from 'react';
// Рендеринг списков
// Списки можно выводить, преобразуя данные из какого-то массива в JSX, обычно с помощью метода map().
//ДЛЯ УНИКАЛЬНОСТИ КАЖДОМУ ЭЛЕМЕНТУ СПИСКА - ДАТЬ id уникальный
// выводим список через map, где в LI выводим элемент

//<li key={id}> - присвоить ключ кажому эл-ту - иначе ошибка
const products = [
	{id: 'qwe', name: 'чайник'},
	{id: 'tre', name: 'утюг'},
]

const Rendering = () => {
	return (
		<ul>
			{products.map(({ id, name }) => (
				<li key={id}>
					{name}
				</li>
			))}
		</ul>
	);
};

export default Rendering;