let list = [];
let userAction = "";
let newItem = "";
let itemToDelete = "";

function validateUserOption() {
	if(userAction !== "new" && userAction !== "delete" && userAction !== "list" && userAction !=="close") {
		return false;
	} else {
		return true;
	}
}

function addItemToList() {
	newItem = prompt("Add Item: What item do you want to add?");
		if (list.some(item => item == newItem)) {
			alert("Item already in list.")
		} else { 
			list.push(newItem);
		}
}

function displayList() {
	alert("Your List: " + 
			list.forEach((item,i) => {
				console.log(`${i} : ${item}`);
				alert(`${i} : ${item}`);
			}
		)
	);
}

function removeItemFromList() {
	itemToDelete = prompt("Enter index of item to remove:");
		list.splice(itemToDelete,1);
		alert("Success!")
}


while(userAction != "close") {
	userAction = prompt("Welcome, What would you like to do? (new / delete / list / close )");
	if (!validateUserOption()) {
		alert("Please enter \"new\" to Add item to list. \"delete\" to remove item from list. \"list\" to list items in list. \"close\" to close app.");
	} else if (userAction === "new") {
		addItemToList();
	} else if (userAction === "list") {
		displayList();
	} else if (userAction === "delete") {
		removeItemFromList();
	}
}

alert("Thank you, have a great day!");