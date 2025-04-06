import React from "react";

import Label from './label/Label.jsx'

//ЧТОБ НЕ ПИСАТЬ ТУТ ПРОСТО В (props)и ниже props.mail каждый раз пропс
//тут я деструктуризировал -сразу в ({mail, phone}) - указал, что надо и их ниже кратко пишу уже без пропс
const Contacts = ({mail,phone}) => {

	return (

		<div>
			<Label color={'green'}> Контакты </Label>

				<div>mail: {mail}</div>
				<div>телeфон: {phone}</div>
			</div>
	)
}
 export default Contacts;
