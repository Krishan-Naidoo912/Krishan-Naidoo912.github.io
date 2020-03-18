//Logo

import React from 'react';
import brain from './brain.png';
import Tilt from 'react-tilt';
import './Logo.css';

const Logo = function () {
	return (
		<div className ='ma4 mt0'>
			<Tilt className="br2 shadow-2 Tilt" options={{ max : 60 }} style={{ height: 150, width: 150 }} >
	 			<div className="Tilt-inner pa3">
	 				<img style={{paddingTop:'5px'}} alt='' src={brain}/>
	 			</div>
			</Tilt> 
		</div>
	)
}

export default Logo;