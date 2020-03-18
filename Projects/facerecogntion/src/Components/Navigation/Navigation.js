//Navigation

import React from 'react';

const Navigation = ({isUserSignedIn, onPageChange}) => {
	if(isUserSignedIn) {
		return (
			<nav style={{display:'flex',justifyContent:'flex-end'}}>
				<p className='light-grey pa2 white f2 ma2'
					onClick={()=>onPageChange('signout')}>
					Sign Out
				</p>
			</nav>
		)
	}
	else {
		return (
			<nav style={{display:'flex',justifyContent:'flex-end'}}>
				<p className='light-grey pa2 white f2 ma2'
					onClick={()=>onPageChange('signin')}>
				Sign In
				</p>
				<p className='light-grey pa2 white f2 ma2'
					onClick={()=>onPageChange('register')}>
				Register
				</p>
			</nav>
		);
	}
}

export default Navigation;