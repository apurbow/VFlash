const STORAGE_KEY = 'vflash-progress';

function loadProgress() {
	return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
}

function saveProgress(progress) {
	localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

function updateWordProgress(wordId, difficulty) {
	const progress = loadProgress();
	if (!progress[wordId]) {
		progress[wordId] = {
			score: 0,
			nextReview: 0
		};
	}

	let entry = progress[wordId];

	// Score update based on difficulty
	if (difficulty === 'easy') {
		entry.score += 1;
	} else if (difficulty === 'hard') {
		entry.score -= 1;
		entry.score = Math.max(0, entry.score); // Prevent negative score
	}
	// Skip button doesn't save data


	// Review scheduling
	const nextHours = getNextReviewHours(entry.score);
	entry.nextReview = Date.now() + (nextHours * 60 * 60 * 1000);
	saveProgress(progress);
}

function getNextReviewHours(score) {
	if (score <= 0) return 0.1; // 6 minutes
	if (score === 1) return 3; // 3 hours
	if (score === 2) return 24; // 1 day
	if (score === 3) return 72; // 3 days
	if (score === 4) return 168; // 1 week
	return 336; // 2 weeks
}