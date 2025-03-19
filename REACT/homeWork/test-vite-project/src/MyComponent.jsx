import React from 'react';


const getValue = () => 123;

const MyComponent = () => {
	const tagName = 'div'
	return (
		<div
		 className={tagName + 'Element'}
style = {{ width: '100px',  marginTop: '20px'}}>

{getValue()}

		</div>
	);
};

export default MyComponent;