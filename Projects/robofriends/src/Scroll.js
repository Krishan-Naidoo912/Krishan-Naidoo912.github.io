//React Component "Scroll" to freeze Page header and search box
//So that the robot Cards can be scrolled

import React from 'react';
import './Scroll.css';

const Scroll = (props) => {
	return (
		<div className ="scrollCards">
			{props.children}
		</div>
	);
};

export default Scroll;