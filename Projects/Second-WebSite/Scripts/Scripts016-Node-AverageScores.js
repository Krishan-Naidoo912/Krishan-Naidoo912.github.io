//Node.js file to accept an array of scores and return the average of the scores
function averageOfScores(scores) {
	let sumOfScores = 0;
	for(i=0; i<scores.length; i++) {
		sumOfScores = sumOfScores + scores[i];
	}
	return Math.round(sumOfScores / scores.length);
}

const scores1 = [90,98,89,100,100,86,94];
console.log('Average of Scores 1 is: ' + averageOfScores(scores1));