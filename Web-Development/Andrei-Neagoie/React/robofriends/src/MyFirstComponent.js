import React, { Component } from 'react';

class FirstComponent extends Component {
	render() {
		return (
			//*Class = Font 1 and tachyons style text center*//
			<div className = 'f1 tc'>
				<h1>Hi Krishan Naidoo!</h1>
				<p>{this.props.greeting}</p>
			</div>
		);
	}
}

export default FirstComponent;