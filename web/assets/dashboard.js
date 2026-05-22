

$('.overview-btn').click(() => {
	if ($('.review-link').length) $('#toggle-review, .nav-list > li:nth-child(2)').click();
	else $('#toggle-study, .nav-list > li:nth-child(2)').click();
});



function loadDashboard() {
	const progress = loadProgress();
	const progressArray = Object.values(progress);

	// Basic Stats
	const studyingCount = progressArray.length;
	const reviewCount = progressArray.filter(entry => entry.nextReview <= Date.now()).length;
	const reviewingCount = progressArray.filter(entry => entry.score <= 2).length;
	const learnedCount = progressArray.filter(entry => entry.score > 2).length;
	const totalSuccess = progressArray.reduce((sum, entry) => sum + (entry.successCount || 0), 0);
	const totalFail = progressArray.reduce((sum, entry) => sum + (entry.failCount || 0), 0);
	const totalAttempts = totalSuccess + totalFail;
	const memoryMetric = totalAttempts > 0 ? Math.round((totalSuccess / totalAttempts) * 100) : 0;


	// Overview Card
	if (reviewCount > 0) {
		$('.overview-title').text(`${reviewCount} Reviews Ready`);
		$('.overview-subtitle').text('Keep your memory fresh with a quick review session.');
		$('.overview-btn').text('Start Review').addClass('review-link');
	} else {
		$('.overview-title').text('All Caught Up');
		$('.overview-subtitle').text('No reviews waiting right now.');
		$('.overview-btn').text('Study New Words').removeClass('review-link');
	}


	// Stat Cards
	$('.stat-card').eq(0).find('h2').text(studyingCount);
	$('.stat-card').eq(1).find('h2').text(reviewingCount);
	$('.stat-card').eq(2).find('h2').text(learnedCount);
	$('.stat-card').eq(3).find('h2').text(memoryMetric + '%');


	// Next Review
	if (reviewCount > 0) {
		$('.next-review h3').text("Available Now");
	} else {
		const nextReviewTime = getNextReviewTime(progress);
		if (nextReviewTime === null) $('.next-review h3').text('No upcoming reviews');
		else $('.next-review h3').text(formatTimeUntil(nextReviewTime));
	}

	// Motivation Text
	const motivations = [
		"Small reviews every day beat cramming once a week.",
		"Consistency builds long-term memory.",
		"Even 5 minutes daily makes a difference.",
		"Vocabulary grows through repetition.",
		"One review session is better than none.",
		"Progress is built one word at a time.",
		"Strong memory comes from small habits.",
		"Every review strengthens recall speed.",
		"Learning slowly is still learning.",
		"Missing one day does not erase progress.",
		"Repetition turns confusion into instinct.",
		"Daily exposure matters more than intensity.",
		"Your future fluency starts with today's review.",
		"Short sessions are easier to sustain long term.",
		"Understanding grows through repeated contact.",
		"Consistency beats motivation.",
		"The brain remembers what it sees often.",
		"Reviewing today saves relearning tomorrow.",
		"Steady practice creates automatic recall.",
		"Learning compounds over time.",
		"Frequent recall builds stronger neural connections.",
		"The best study system is the one you continue using.",
		"Small improvements become noticeable over time.",
		"Each correct recall reinforces memory pathways.",
		"Language ability grows through active usage"

	];
	const randomText = motivations[Math.floor(Math.random() * motivations.length)];
	$('.motivation-card p').text(randomText);

}


/* Next Review Time */
function getNextReviewTime(progress) {
	const upcomingReviews =
		Object.values(progress)
			.map(entry => entry.nextReview)
			.filter(time => time > Date.now());

	if (upcomingReviews.length === 0) return null;
	return Math.min(...upcomingReviews);
}


/* Time Formatter */

function formatTimeUntil(timestamp) {
	const diff = timestamp - Date.now();
	const minutes = Math.floor(diff / 1000 / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

	if (minutes < 60) return `In ${minutes} Minutes`;
	if (hours < 24) return `In ${hours} Hours`;
	return `In ${days} Days`;
}