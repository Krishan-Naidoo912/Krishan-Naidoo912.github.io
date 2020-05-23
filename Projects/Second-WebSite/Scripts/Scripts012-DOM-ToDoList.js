let listItem = document.querySelectorAll("li");

for(i=0; i<listItem.length; i++) {
	listItem[i].addEventListener("mouseover", function() {
		this.classList.add("hoveredOver");
	})

	listItem[i].addEventListener("mouseout", function() {
		this.classList.remove("hoveredOver");
	})
	
	listItem[i].addEventListener("click", function() {
		this.classList.toggle("selected")
	})
}