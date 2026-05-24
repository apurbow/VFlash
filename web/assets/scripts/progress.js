
const QUIZ_METRIC_KEY = 'vflash-quiz-metrics';
const PROGRESS_STORAGE_KEY = 'vflash-progress';

function loadProgress() {
	try {
		return JSON.parse(localStorage.getItem(PROGRESS_STORAGE_KEY)) || {};
	} catch {
		return {};
	}
}

function saveProgress(progress) {
	localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(progress));
}


function updateWordProgress(wordId, difficulty) {
	const progress = loadProgress();
	if (!progress[wordId]) {
		progress[wordId] = {
			score: 0,
			nextReview: 0,
			successCount: 0,
			failCount: 0
		};
	}
	let entry = progress[wordId];

	// Score update based on difficulty
	if (difficulty === 'easy') {
		if (currentMode === 'review') entry.successCount++;
		entry.score += 1;
	} else if (difficulty === 'hard') {
		if (currentMode === 'review') entry.failCount++;
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
	if (score === 5) return 336; // 2 weeks
	if (score === 6) return 672; // 4 weeks
	return 2160; // 3 months
}





// For Quiz Metrics
function saveQuizMetric(correct) {
	let quizMetrics = JSON.parse(localStorage.getItem(QUIZ_METRIC_KEY)) || [];
	quizMetrics.push({
		correct,
		time: Date.now()
	});

	// Keep latest 40 only
	quizMetrics = quizMetrics.slice(-40);
	localStorage.setItem(
		QUIZ_METRIC_KEY,
		JSON.stringify(quizMetrics)
	);
}

function getQuizMetrics() {
	const quizMetrics = JSON.parse(localStorage.getItem(QUIZ_METRIC_KEY)) || [];
	const total = quizMetrics.length;
	if (total === 0) {
		return {
			accuracy: 0,
			total: 0
		};
	}
	const correct = quizMetrics.filter(
			item => item.correct
		).length;

	return {
		accuracy: Math.round(
			(correct / total) * 100
		),
		total
	};
}