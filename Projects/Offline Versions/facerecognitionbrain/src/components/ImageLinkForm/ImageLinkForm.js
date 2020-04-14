//Javascript component that receives destructed properties from App.js.
//by Krishan Naidoo.
//Returns input text box for user to paste image url.
//Returns detect button that passes the image to the FaceRecognition image box.
//Returns detect button that passes the user image to the Clarifai API to detect faces.
//Component with no state, so pure function is used instead of a class.
//tachyons css styles used.

import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
	return (
		<div>
			<p className ='f3 fw6 ph0 mh0 purple'>
				{'This Magic Brain will detect one face in an image you provide'}
			</p>
			<p className ='f3 fw5 ph0 mh0'>
				{'Give it a try! Paste the web url link of any web image below'}
			</p>
			<div className='center'> {/*CSS class from App.css to displayFlex*/}
				<div className='form center pa4 br3 shadow-5'> {/*Form class box text box and button with pattern background*/}
					<input
					 className='f4 pa2 w-70 center' type='text' placeholder='Paste the internet url link to an image here'
					 onChange={onInputChange} //event listner for text change
					/>
					<button
					 className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
					 onClick={onButtonSubmit}> {/*event listner for button click*/}
					 	Detect
					</button>
				</div>
			</div>
		</div>
	);
}

export default ImageLinkForm;