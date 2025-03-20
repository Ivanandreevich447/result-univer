import styles from './App.module.css';
import data from '../data.json'
import { useState } from 'react';

export const App = () => {

	// Можно задать 2 состояния — steps и activeIndex
const [steps, setSteps] = useState(data)
const [activeIndex, setActiveIndex] = useState(0)


	// И определить 3 обработчика: Клик назад, Клик вперед, Начать сначала
const forwardButtonClick = () => {
	if(activeIndex < steps.length - 1){
		setActiveIndex(activeIndex + 1)
	}
}

const backButtonClick = () => {
	if(activeIndex > 0) {
		setActiveIndex(activeIndex - 1)
	}
}
const startButtonClick = () => setActiveIndex(0 )


//начало и конец
const  isLastStep = activeIndex === steps.length -1;
const isFirstStep = activeIndex === 0


	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Инструкция по готовке пельменей</h1>
				<div className={styles.steps}>
					<div className={styles['steps-content']}>
						{/* Для получения активного контента использйте steps и activeIndex */}
						{data[activeIndex].content}
					</div>

					<ul className={styles['steps-list']}>
						{/* Выводите <li> с помощью массива steps и метода map(), подставляя в разметку нужные значения и классы */}

						{steps.map(({title,id}, index) => (
							<li key={id}

							//для сложения классов  +  и условный рендеринг- так класс в `${класс}`:
							className={`
							${styles['steps-item'] }
							${index < activeIndex ? styles.done : ''}
							${index === activeIndex ? styles.active : ''}
							 `}
							 >

							<button className={styles['steps-item-button']}
							onClick={() => setActiveIndex(index)}> {index + 1} </button>{ ' '}
							{/* При клике на кнопку установка выбранного шага в качестве активного */}
							{title}
						</li>
						))}
					</ul>
					<div className={styles['buttons-container']}>
						<button
						disabled={isFirstStep}
						onClick={backButtonClick}
						className={styles.button}>Назад
						</button>

						<button
						onClick={isLastStep ? startButtonClick : forwardButtonClick} className={styles.button}>
							{isLastStep ? 'Начать с начала' : 'Далее'}
							{/* "Начать сначала", можно сделать этой же кнопкой, просто подменять обработчик и текст в зависимости от условия */}
							{/* Или заменять всю кнопку в зависимости от условия */}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
