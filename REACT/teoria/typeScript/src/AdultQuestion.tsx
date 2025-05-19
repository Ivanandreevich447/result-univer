import { FC, ChangeEvent, MouseEvent } from "react"; // для того,чтоб показать ,что функция возращает разметку
//ChangeEvent предназначен для типизации события onChange в различных элементах:

type AdultOrNot = {
	setIsAdult: (value: boolean)=> any | void

}


const AdultOrNot: FC<AdultOrNot> = ({ setIsAdult } ) => {
    const yesHandler = () => {
        setIsAdult(true);
    };
    const noHandler = (e : MouseEvent<HTMLButtonElement>) => {
        // setIsAdult(false);
		console.log(e.clientY);
    };

	//ChangeEvent<HTMLInputElement> - говорю что тип хтмл Инпут
	const onChangeHandler =({target}: ChangeEvent<HTMLInputElement>) => {
		console.log(target.value);
	}

    return (
        <div>
            Вам Есть 18?
            <button onClick={yesHandler}>Да</button>
            <button onClick={noHandler}>Нет</button>

			<input type="text" onChange={onChangeHandler} />
        </div>
    )
  }

  export default AdultOrNot;
