//React app component 'Robot Card' template for 'CardList.js'.
//by Krishan Naidoo
//uses tachyons css styles

import React from 'react';
//get photo from web using robots.js array id as the user name
const Card = (props) => {
	return (
		<div className='tc bg-light-blue dib br3 pa3 ma2 grow shadow-5'>
			{/*for the image, use template strings and id from robots array in the src value.*/}
			<img alt='robots' src={`https://robohash.org/${props.id}?200x200`} />
			<div>
				<h2>{props.name}</h2>
				<p>{props.email}</p>
			</div>
		</div>
	);
} 

export default Card;