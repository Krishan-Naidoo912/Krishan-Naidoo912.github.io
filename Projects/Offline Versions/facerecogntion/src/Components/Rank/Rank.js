//Rank

import React from 'react';

const Rank = function ({entries, name}) {
	return (
		<div>
			<div className='white f3'>
				{`${name}, your entry count is ...`}
			</div>
			<div className='white f4'>
				{`${entries}`}
			</div>
		</div>
	)
}

export default Rank;