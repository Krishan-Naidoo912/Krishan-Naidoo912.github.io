let yourAnswer = prompt("Are we there yet?")

while((yourAnswer.toLowerCase()).indexOf('yes') < 0 && (yourAnswer.toLowerCase()).indexOf('yeh') < 0) {
	yourAnswer = prompt("Are we there yet?");
}
alert(`You said ${yourAnswer}, so YAH! we are here!`)