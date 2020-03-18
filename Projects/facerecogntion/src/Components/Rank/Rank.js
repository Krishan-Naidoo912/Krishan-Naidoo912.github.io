//Rank

import React, {Component} from 'react';

class Rank extends Component {
	constructor() {
		super();
		this.state = {
		}
	}

	render() {
		return (
			<div>
				<div className='white f3'>
					{`Krishan, your entry count is ...`}
				</div>
				<div className='white f4'>
					{`#1`}
				</div>
			</div>
		)
	}
}

export default Rank;