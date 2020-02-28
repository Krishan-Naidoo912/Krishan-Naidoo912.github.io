//Javascript component that receives no properties from App.js.
//Returns Sign Out link on top right of webpage.
//Component with no state, so pure function is used instead of a class.
//tachyons css styles used.

import React from 'react';

const Navigation = ({onPageChange, isSignedIn}) => {
	//Create logical statement to determine what nav buttons to show based on the users ActivePage
	//i.e "SignIn", "Register" or "Home" Page
	if(isSignedIn) {
		return (
			<nav style={{display: 'flex',justifyContent:'flex-end'}}>
				<p
			 	className='f3 link dim black underline pa3 pointer'
			  	//Event handler to change page from Home to SignIn Card arrow function to pass 'home' into route state when click is triggered.
			  	// without arrow function, this will run when the app is rendered
			 	onClick={() => onPageChange('signOut')}>
			 	Sign Out
				</p>
			</nav>
		);
	} else {
		return (
			<nav style={{display: 'flex',justifyContent:'flex-end'}}>
				<p
			 	className='f3 link dim black underline pa3 pointer'
			  	//Event handler to change page from Home to SignIn Card arrow function to pass 'home' into route state when click is triggered.
			  	// without arrow function, this will run when the app is rendered
			 	onClick={() => onPageChange('signIn')}>
			 	Sign In
				</p>
				<p
			 	className='f3 link dim black underline pa3 pointer'
			  	//Event handler to change page from Home to SignIn Card arrow function to pass 'home' into route state when click is triggered.
			  	// without arrow function, this will run when the app is rendered
			 	onClick={() => onPageChange('register')}>
			 	Register
				</p>
			</nav>
		);
	}
}

export default Navigation;