//Main App for RoboFriends React App
import React, { Component } from 'react';
import CardList from './CardList.js';
import { Robots } from './Robots.js';
import SearchBox from './SearchBox.js';
import './App.css';
import Scroll from './Scroll.js';
class App extends Component {
	//(this object describes the app in terms of what changes it, i.e Robots array and search field
	constructor () {
		super()
		this.state = { 
			Robots: Robots, 
			searchField: '',
		}
	}

	onSearchChange= (event) => {
		this.setState({searchField: event.target.value})
	}

	render() {
		 //pass the changes to seachbox to the search box.js
		const filteredRobots = this.state.Robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
		})
		return (
			<div className = "tc">
				<h1 className='f1'>Krishan RoboFriends</h1>
				<SearchBox searchChange={this.onSearchChange} />
				<Scroll>
					<CardList Robots={filteredRobots}/>
				</Scroll>
			</div>
		);
	}	
}

export default App;