var questions = {
	question1: 'honey',
	question2: 'blue',
	question3: '1492',
	question4: 'austin',
	question5: '8'
};
var time = 10;
var correct = 0;
var incorrect = 0;


function check(event) {
	clearInterval(window.timer); // stop countdown

	if ( event ) event.preventDefault(); // prevent window from refreshing
	
	var question_amount = Object.keys(questions).length; // how many questions there are
	var answered = $('form input:checked').length; // how many the user answered
	var inputs = $('form input:checked');
	// var arr = [0, 1, 2, 7, 4]

	// console.log(arr[3]) // 7
	// console.log(questions['question2']);
	inputs.each(function() {
		var question = $(this).attr('name');

		if ( questions[question] == $(this).val() ) {
			correct++;
		} else incorrect++;
	});

	$('#after-submit p').text('You answered ' + answered + ' questions. You got ' + correct + ' questions right and ' + incorrect + ' wrong.');
	$('#after-submit').show();
	$('form').hide();
}

function startCountDown() {
	// intervals, timeouts
	window.timer = setInterval(function() {
		time--;

		if ( time < 10 ) {
			$('#display').text('00:0' + time);
		} else $('#display').text('00:' + time);
		
		// 0, NaN, undefined, false, ect
		if ( !time ) {
			// time has run out
			check();
		}
	}, 1000);
}	

function startGame() {
	$(this).hide();
	$('form, #display').show();
	startCountDown();
}

$('#submit').on('click', check);
$('#start').on('click', startGame);