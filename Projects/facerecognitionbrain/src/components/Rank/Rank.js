//Javascript component that receives no properties from App.js.
//Returns rank of user determined by the amount of images submited for face detection..
//Component with no state, so pure function is used instead of a class.
//tachyons css styles used.

import React from 'react';

const Rank = () => {
	return (
		<div>
			<div className ='white f3'>
				{`Krishan, Your current rank is ...`}
			</div>
			<div className ='white f1'>
				{`#1`}
			</div>
		</div>
	);
}

export default Rank;