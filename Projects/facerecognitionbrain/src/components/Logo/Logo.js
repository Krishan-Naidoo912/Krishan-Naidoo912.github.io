//Javascript component that receives no properties from App.js.
//by Krishan Naidoo.
//Returns Animated Logo on top left of webpage.
//Component with no state, so pure function is used instead of a class.
//tachyons css styles used.

import React from 'react';
/*Import Tilt to create an animated logo when you hover over*/
import Tilt from 'react-tilt';
import './Logo.css';
import brain from './brain.png';

const Logo = () => {
	return (
		<div className ='ma4 mt0'>
			<Tilt className="br2 shadow-2 Tilt" options={{ max : 60 }} style={{ height: 150, width: 150 }} >
 				<div className="Tilt-inner pa3">
 					<img style={{paddingTop:'5px'}} alt='logo' src={brain}/>
 				</div>
			</Tilt> 
		</div>
	);
}

export default Logo;