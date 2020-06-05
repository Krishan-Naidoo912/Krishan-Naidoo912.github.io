function generateRandomColor() {
		//Generate Red
		let red = Math.floor(Math.random() * 256);
		//Generate Green
		let green = Math.floor(Math.random() * 256);
		//Generate Blue
		let blue = Math.floor(Math.random() * 256);
		return(`rgb(${red}, ${green}, ${blue})`);
}