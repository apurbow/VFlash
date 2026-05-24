
let quizQueue = [];
let currentQuiz = null;
let quizCorrect = 0;
let quizTotal = 0;


/* Generate Quiz Queue */

function generateQuizQueue() {
	const progress = loadProgress();
	quizQueue = words.filter(word => {
		return progress[word.id];
	});
	quizQueue = shuffle(quizQueue);
}


/* Create Quiz */

function loadQuizQuestion() {
	if (Object.keys(loadProgress()).length < 6) { // Minimum 6 words to start quiz
		$('.quiz-card .empty-state').show();
		$('.quiz-card > :not(.empty-state)').hide();
		return;
	}
	if (quizQueue.length === 0) {
		generateQuizQueue();
	}

	$('.quiz-card .empty-state').hide();
	$('.quiz-card > :not(.empty-state)').show();
	const word = quizQueue.shift();
	currentQuiz = word;
	$('.quiz-word').text(word.word);
	const correctAnswer = word.japanese;
	const wrongAnswers = shuffle(words
		.filter(w => w.id !== word.id)
		.map(w => w.japanese)
	).slice(0, 3);

	const options = shuffle([correctAnswer, ...wrongAnswers]);
	$('.quiz-option').each(function (index) {
		$(this)
			.text(options[index])
			.removeClass('correct wrong disabled');
	});
	$('.quiz-card').removeClass("fadeShift");
}


/* Answer Click */

$('.quiz-option').click(function () {
	if (!currentQuiz) return;
	const selected = $(this).text();
	const correct = currentQuiz.japanese;
	quizTotal++;

	$('.quiz-total').text(quizTotal);
	$('.quiz-option').addClass('disabled');
	if (selected === correct) {
		quizCorrect++;
		saveQuizMetric(true); // Save as correct // progress.js
		$('.quiz-correct').text(quizCorrect);
		$(this).addClass('correct');
	} else {
		saveQuizMetric(false); // Save as incorrect // progress.js
		$(this).addClass('wrong');
		$('.quiz-option').each(function () {
			if ($(this).text() === correct) {
				$(this).addClass('correct');
			}
		});
	}

	setTimeout(() => {
		$('.quiz-card').addClass("fadeShift");
		setTimeout(() => loadQuizQuestion(), 150);
	}, 1500);
});

