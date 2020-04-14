//Javascript component that receives load user properties from App.js.
//Returns rank of user determined by the amount of images submited for face detection..
//Component with no state, so pure function is used instead of a class.
//tachyons css styles used.

import React from 'react';

const Rank = ({name,entries}) => {
	return (
		<div>
			<div className ='white f3'>
				Welcome {`${name}!`}
			</div>
			<div className ='white f3'>
				Your current face detection entry count is ...
			</div>
			<div className ='blue fw4 f1'>
				{entries}
			</div>
		</div>
	);
}

export default Rank;