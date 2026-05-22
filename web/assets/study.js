let studyQueue = [];
let reviewQueue = [];
let currentMode = 'study'; // for the mode to exist globally


function shuffle(array) {
    return [...array].sort(() => Math.random() - 0.5);
}


function generateStudyQueue() {
	const progress = loadProgress();
	studyQueue = words.filter(word => {
		return !progress[word.id];
	});
	studyQueue = shuffle(studyQueue);
}

function generateReviewQueue() {
	const progress = loadProgress();
	reviewQueue = words.filter(word => {
		const entry = progress[word.id];
		return (entry && entry.nextReview <= Date.now());
	});
	reviewQueue = shuffle(reviewQueue);
}


function getNextWord() {
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