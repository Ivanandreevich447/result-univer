import React from 'react';

const Todolist = () => {
	return (
		<div>
<h3>что учил</h3>
<div>
	<input type="text">
	<button>+</button>
	</input>
</div>

<ul>
	<li><input type="checkbox" checked={true} /> <span>css&&html</span> </li>
	<li><input type="checkbox" checked={true} /> <span>js</span> </li>
	<li><input type="checkbox" checked={false} /> <span>react</span> </li>

</ul>
<button>All</button>
<button>Active</button>
<button>Completed</button>
		</div>
	);
};

export default Todolist;
