//тут передаю пропсом состояние и меняю его в компоненте тут же!
import AppLayout from "./layout/AppLayout";

//эти пропсы пробросил чрез АПП сюда
const Counter = ({ value, setValue }) => {



	return (
		<>
			<div>{value}</div>
			<button
				//КЛИК - ПЕРЕДЕТСЯ ФУНКЦИЯ ИЗМЕНЕНИЯ СОСТОЯНИЯ СЧЕТЧИКА(ЗНАЧЕНИЕ+1)
				onClick={() => setValue(value + 1)}
			>
				+1
			</button>

		</>
	);
};

export default Counter;
