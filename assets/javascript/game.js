var totalScore, randomNumbers, targetNumber;
var wins = 0;
var losses = 0;

generate();

$(".pic").on("click", function() {
	totalScore = totalScore + randomNumbers[$(this).attr("value")];
	$("#totalScore").text(totalScore);
	check();
});

function generate() {
	totalScore = 0;
	randomNumbers = [];
	targetNumber = 0;
	for(i = 0; i <= 3; i++) {
  	var rand= Math.floor(Math.random() * 12 + 1);
  	randomNumbers.push(rand);
	}
	targetNumber = Math.floor((Math.random() * 103) + 18);
	$("#target").text(targetNumber);
	$("#wins").text(wins);
	$("#losses").text(losses);
	$("#totalScore").text(totalScore);
}

function check() {
	if (totalScore > targetNumber) {
	losses++;
	generate();
	} else if (totalScore === targetNumber) {
		wins++;
		generate();
	}
}