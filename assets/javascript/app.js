var questions = [{
	question: "What is Don Draper's real name??",
	choices: ["Dirk Woodward", "Dick Whitman", "Dave Workman", "Don Draper"],
	correctAnswer: "Dick Whitman",
}, {
	question: "Peggy felt ready to ask for her own office after landing an account for what product?",
	choices: ["Lipstick", "Cigarettes", "Popsicles", "Beer"],
	correctAnswer: "Lipstick",
}, {
	question: "What is Salvatore's position at Sterling Cooper?",
	choices: ["Art Director", "Account Executive", "Media Buyer", "Copywriter"],
	correctAnswer: "Art Director",
}, {
	question: "Why does Betty get rejected for the Coca Cola campaign?",
	choices: ["She's too old.", "She can't model.", "She won't sleep with the exec.", "Don refused to work for the ad agency."],
	correctAnswer: "Don refused to work for the ad agency.",
}, {
	question: "Ken's short story appeared in which publication?",
	choices: ["Atlantic Monthly", "The New York Times", "Pacific Weekly", "The New Yorker"],
	correctAnswer: "Atlantic Monthly",
}, {
	question: "In season one, Pete returns a wedding gift. What does he buy with the store credit?",
	choices: ["Golf Clubs", "A Rifle", "A New Suit", "A Flask"],
	correctAnswer: "A Rifle",
}, {
	question: "Who is with Roger Sterling when he has his first heart attack?",
	choices: ["Betty", "Joan", "Pete", "A Random Model"],
	correctAnswer: "A Random Model",
}, {
	question: "In season two, Joan is given some additional work doing what?",
	choices: ["Posing for ad campaigns.", "Ironing Don's shirts.", "Reading TV scripts for Harry.", "Pitching campaigns to Roger."],
	correctAnswer: "Reading TV scripts for Harry",
}, {
	question: "What fixture serves as one of Mad Men’s predominant metaphors?",
	choices: ["The Carousel", "The Elevator", "The Computer", "The Suburbs"],
	correctAnswer: "The Carousel",
}, {
	question: "What year does Mad Men start?",
	choices: ["1959", "1960", "1961", "1962"],
	correctAnswer: "1960",
}];


var currentQuestion = 0;
var correctAnswers = 0;
var incorrectAnswers = 0;



$("#timerStarts").hide();
$(".submitAnswer").hide();
$(".gameReset").hide();
$("#correctAnswers").hide();
$("#incorrectAnswers").hide();

function checkAnswer () { 
	for (var i = 0; i < questions.length; i++) {
		var userChoice = $("input[name = 'question-" + i +"']:checked");
		if (userChoice.val() == questions[i].correctAnswer) {
			correctAnswers++; 

			} else {
				incorrectAnswers++;
				
		}
	}
	$("#correctAnswers").append(" " + correctAnswers);
	$("#incorrectAnswers").append(" " + incorrectAnswers); 
};


function timer() {
	var seconds = 60;
	counter = setInterval (function() {
	$("#timerStarts").html('<h2> Time Remaining:' + seconds-- + '</h2>');
		if (seconds === -1) {
			$("#timerStarts").html("<h2> Out of Time! </h2>");
			clearInterval(counter);
			function delayScore(){
				$("#showQuestions").hide();
				$("#timerStarts").hide();
				$(".submitAnswer").hide();
				checkAnswer();
				$("#correctAnswers").show();
				$("#incorrectAnswers").show();
			}
			setTimeout(delayScore, 1000);
		}
	}, 1000);
	
};

$(".gameStart").on("click", function() {
	$(".gameStart").hide();
	displayCurrentQuestion();
	$("#timerStarts").show();
	timer();


});

function displayCurrentQuestion() {
	$(".submitAnswer").show();
	for (var i = 0; i < questions.length; i++) {
		$("#showQuestions").append("<h3>" + questions[i].question + "</h3");
		for (var j = 0; j < questions[i].choices.length; j++) {
			$("#showQuestions").append('<input type="radio" name="question'  + '-' + i + '" value="'+ questions[i].choices[j] + '"> '+ questions[i].choices[j] );

		}
	}
	$(".submitAnswer").on("click", function() {
		$("#showQuestions").hide();
		$("#timerStarts").hide();
		$(".submitAnswer").hide();
		checkAnswer();
		clearInterval(counter);
		$("#correctAnswers").show();
		$("#incorrectAnswers").show();

	});
};
