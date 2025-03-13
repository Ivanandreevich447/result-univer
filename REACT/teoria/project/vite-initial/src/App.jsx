import ReactLogo from './assets/react.svg?react'; //как компонент
import reactLogo from './assets/react.svg'; // как свг изображение

export const App = () => (
	<div>
		<h1>Hello World</h1>
		{/* как свг изображение */}
		<img src={reactLogo} alt="react logo" width={100} height={100}/>
		{/* //как компонент */}
		<ReactLogo width={200} height={200} />

	</div>
);
