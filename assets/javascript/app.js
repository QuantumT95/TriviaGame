





function check(){
	
	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var correct = 0;

		if (question1 == "honey") {
			correct++;
		}
		if (question2 == "honey") {
			correct++;
		}
		if (question3 == "honey") {
			correct++;
		}
		if (question4 == "honey") {
			correct++;
		}

	document.getElementById("after-submit").style.visibility = "visible";
	document.getElementById("number-correct").innerHTML = "You got " + correct + " correct!";
}