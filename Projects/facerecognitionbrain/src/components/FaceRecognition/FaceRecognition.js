//Javascript component that receives destructed properties from App.js.
//by Krishan Naidoo.
//Returns image to display on image box
//Component with no state, so pure function is used instead of a class.
//tachyons css styles used.

import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({clarifaiImageUrl, boundingBox}) => {
	return (
		<div className='center ma'>
			{/*Fix image to 500px margin top of 2px*/}
			<div className='absolute mt2'>
				{/*Give image an id for APP calculateFaceLocation function*/}
				<img id='inputImage' src={clarifaiImageUrl} alt='ImageWithFace' width='500px' height='auto'/>
				{/*use boundingBox location values to display box on image using css styles*/}
				<div
					className='bounding-box'
					style={
						{
							top: boundingBox.topRow,
							right: boundingBox.rightCol,
							bottom: boundingBox.bottomRow,
							left: boundingBox.leftCol
						}
					}
				>
				</div>
			</div>
		</div>
	);
}

export default FaceRecognition;