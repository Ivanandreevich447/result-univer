import React from "react";


const MySelect = ({options, defaultValue, value, onChange}) => {


	return(

		<select
		value={value}
		//передаю сразу значение ,которое нажал
		onChange={e => onChange(e.target.value)}
		>
			{/* дефолт- для задания состояния -сортировка ПО и дальше список  */}
			<option disabled value="">{defaultValue}</option>
			{/* отрисовка списка через мап */}
			  {options.map(option =>
          <option key={option.value} value={option.value}>
            {option.name}
				</option>
			)}
		</select>


	)
}


export default MySelect;
