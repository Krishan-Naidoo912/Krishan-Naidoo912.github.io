//Javascript component that receives no properties from App.js.
//Returns Sign Out link on top right of webpage.
//Component with no state, so pure function is used instead of a class.
//tachyons css styles used.

import React from 'react';

const Navigation = ({onRouteChange}) => {
	return (
		<nav style={{display: 'flex',justifyContent:'flex-end'}}>
			<p
			 className='f3 link dim black underline pa3 pointer'
			 onClick={() => onRouteChange('signIn')}> {/*Event handler to change page from Home to SignIn Card*/}
			 Sign Out
			</p>
		</nav>
	)
}

export default Navigation;