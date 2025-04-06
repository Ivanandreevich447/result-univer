import React from "react";
import styles from './Label.module.css'


//CHILDREN в пропсах - принимает значение,которое указываем между > текст < / как бы обмен данными и пропс чилдрен всегда
const Label = ({children, color}) => {

	return (

		<label className={`
			${styles.label}
			${styles[color]}
			`}
			 >
				{children} :
			</label>
	)
}


export default Label;
