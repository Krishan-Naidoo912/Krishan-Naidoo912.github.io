import React from 'react';
//get photo from web using robots.js array id as the user name
const Card = (props) => {
	return (
		<div className='tc bg-light-blue dib br3 pa3 ma2 grow shadow-5'>
			<img alt='robots' src={`https://robohash.org/${props.id}?200x200`} />
			<div>
				<h2>{props.name}</h2>
				<p>{props.email}</p>
			</div>
		</div>
		);
} 

export default Card;