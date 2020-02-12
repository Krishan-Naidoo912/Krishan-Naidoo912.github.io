//Javascript for simply HTML embedded calculator

function calculate() {
	let val1 = parseInt(document.querySelector("#Value1").value);
	let val2 = parseInt(document.querySelector("#Value2").value);
	let op = document.querySelector("#Operator").value;
	let result = 0;

	if (op == "Add") {
		result = val1 + val2;
	} else if (op == "Subtract") {
		result = val1 - val2;
	} else if (op == "Mutliply") {
		result = val1 * val2;
	} else if (op == "Divide") {
		result = val1 / val2;
	}
	document.querySelector("#Result").innerHTML = result;
}