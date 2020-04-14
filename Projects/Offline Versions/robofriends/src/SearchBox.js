//Seach Box Component for RoboFriends React App
import React from 'react';

const SearchBox = ({searchField, OnSearchChange}) => {
	return (
		<div className = 'pa2'>
			<input
				className = 'pa3 ba b--green bg-lightest-blue'
				type='search'
				placeholder='Search Robots'
				onChange={OnSearchChange}
			/>
		</div>
	);
}

export default SearchBox;