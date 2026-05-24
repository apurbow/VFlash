
let studyQueue = [];
let reviewQueue = [];
let currentWord = null;
let currentMode = 'study'; // for the mode to exist globally


const shuffle = (array) => {
	return [...array].sort(() => Math.random() - 0.5);
};


/* Generate Study Queue */
const generateStudyQueue = () => {
	const progress = loadProgress();
	studyQueue = words.filter(word => {
		return !progress[word.id];
	});
	studyQueue = shuffle(studyQueue);
}


/* Generate Review Queue */
const generateReviewQueue = () => {
	const progress = loadProgress();
	reviewQueue = words.filter(word => {
		const entry = progress[word.id];
		return (entry && entry.nextReview <= Date.now());
	});
	reviewQueue = shuffle(reviewQueue);
}


const getNextWord = () => {
	if (currentMode === 'study') {
		if (studyQueue.length === 0) generateStudyQueue();
		if (studyQueue.length === 0) {
			$('.study-actions').hide();
			return null;
		} else {
			if (!$('.study-actions').is(':visible')) $('.study-actions').show();
		}
		return studyQueue.shift();
	} else {
		if (reviewQueue.length === 0) generateReviewQueue();
		if (reviewQueue.length === 0) {
			$('.study-actions').hide();
			return null;
		} else {
			if (!$('.study-actions').is(':visible')) $('.study-actions').show();
		}
		return reviewQueue.shift();
	}
}



// Study\Review toggle

$(".study-toggle-option").click(() => {
	$(".study-toggle-option").removeClass("active");
	$(this).addClass("active");

	if ($(this).attr("id") === "toggle-review") {
		$(".study-toggle-selector").addClass("review");
		currentMode = "review";
	} else {
		$(".study-toggle-selector").removeClass("review");
		currentMode = "study";
	}
	loadNextCard();
});

// Flashcard Flip
$(".flashcard").click(() => {
	if (!currentWord) return;
	$(this).toggleClass("flipped");
});

// Render card
const renderCard = (word) => {
	$('.card-front, .card-back').addClass("dive");
	$(".flashcard").removeClass("flipped");
	setTimeout(() => {
		// Empty state
		if (!word) {
			if (currentMode === "review") {
				$(".card-front").html(`
					<div class="empty-state">
						<h3>Hurray!</h3>
						<h4>No words to review</h4>
					</div>
				`);
			} else {
				$(".card-front").html(`
					<div class="empty-state">
						<h3>All caught up!</h3>
						<h4>You've studied all new words</h4>
					</div>
				`);
			}
			$('.card-front, .card-back').removeClass("dive");
			return;
		}

		$(".card-front").html(`
			<p class="card-label">WORD</p>
			<h1 class="card-word">${word.word}</h1>
		`);

		let examplesHTML = "";
		word.examples.forEach((example) => {
			examplesHTML += `
				<div class="example">
					<p>${example.english}</p>
					<small>${example.japanese}</small>
				</div>
			`;
		});

		$(".card-back").html(`
			<p class="jp-word">${word.japanese} (${word.romaji})</p>
			<p class="meaning">${word.meaning_en}</p>
			<div class="examples">${examplesHTML}</div>
		`);
		$('.card-front, .card-back').removeClass("dive");
	}, 200);
}


const loadNextCard = () => {
	currentWord = getNextWord();
	renderCard(currentWord);
}


$(".easy-btn").click(() => {
	if (!currentWord) return;
	updateWordProgress(currentWord.id, "easy");
	loadNextCard(); 
	loadDashboard(); // dashboard.js
	loadQuizQuestion(); // quiz.js
});


$(".hard-btn").click(() => {
	if (!currentWord) return;
	updateWordProgress(currentWord.id, "hard");
	loadNextCard(); 
	loadDashboard(); // dashboard.js
	loadQuizQuestion(); // quiz.js
});

$(".skip-btn").click(() => {
	if (!currentWord) return;

	if (currentMode === "study") {
		// For studyQueue, reinsert the word at a random position
		studyQueue.splice(
			Math.floor(Math.random() * studyQueue.length),
			0,
			currentWord
		);
	} else {
		// For reviewQueue, use nextReview logic
		reviewQueue.splice(
			Math.floor(Math.random() * reviewQueue.length),
			0,
			currentWord
		);
	}
	loadNextCard(); 
	loadDashboard(); // dashboard.js
	loadQuizQuestion(); // quiz.js
});
