import React from "react";
import Select from "react-select/base";


const SelectOption = () => {

const optionsProduct =[
		{value: 'tv', label: 'телек'},
		{value: 'laptop', label: 'макбук'},
		{value: 'phone', label: 'айфон'},
		{value: 'alisa', label: 'алиса'},
	]
const optionsColor =[
		{value: 'red', label: 'красный'},
		{value: 'blue', label: 'голубой'},
		{value: 'black', label: 'черный'},
		{value: 'silver', label: 'серебристый'},
	]

	return (

	<div>
		<Select
		options={optionsProduct}
		defaultValue={optionsProduct[0]}

		/>
		<Select
		isMulti={true}
		defaultValue={[ optionsColor[1], optionsColor[0]]}
		options={optionsColor}
		/>
	</div>
	)
}
export default SelectOption;
