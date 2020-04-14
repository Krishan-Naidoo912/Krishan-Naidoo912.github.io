//FaceRecoginition
//https://media.vanityfair.com/photos/59037d178daa0d404fa64cb6/master/w_1024%2Cc_limit/wonder-woman-warner-bros.jpg
//https://filmfare.wwmindia.com/content/2020/feb/priyanka-chopra-thumb-600-x-4501582292965.jpg

import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({clarifaiImageUrl, boundingBox}) => {
	return (
		<div className='center ma'>
			<div className='absolute mt2'>
				<img id='image' src={clarifaiImageUrl} alt='' width='500px' height = 'auto'/>
				<div
					className='bounding-box'
					style={{
							left:boundingBox.leftCol,
							top:boundingBox.topRow,
							right:boundingBox.rightCol,
							bottom:boundingBox.bottomRow}}
				>
				</div>
			</div>
		</div>
	);
}

export default FaceRecognition;