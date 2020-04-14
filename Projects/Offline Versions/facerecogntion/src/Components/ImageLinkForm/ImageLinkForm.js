//ImageLinkForm

import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({onChangeInputUrl, onButtomSubmit}) => {
	return (
		<div className='form center pa4 br3 shadow-5 ma3'>
			<div className='center'>
				<input 
					type='text'
					placeholder="enter image url"
					className='w-70 h-100  blue'
					onChange={onChangeInputUrl}
				/>
				<button
					className='w-30 h-100'
					onClick={onButtomSubmit}>
					Detect Face
				</button>
			</div>
		</div>
	)
}

export default ImageLinkForm;