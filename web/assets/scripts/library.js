
let libraryCache = [];

const getLibraryWords = () => {
	const progress = loadProgress();
	const studied = [];
	const newWords = [];

	words.forEach(word => {
		const entry = progress[word.id];
		if (entry) {
			studied.push({ ...word, progress: entry });
		} else {
			newWords.push({ ...word, progress: null });
		}
	});

	studied.sort((a, b) => a.word.localeCompare(b.word));
	newWords.sort((a, b) => a.word.localeCompare(b.word));
	return [...studied, ...newWords];
}

const getMasteryLabel = (score) => {
	if (score <= 1) return "Beginner";
	if (score === 2) return "Learning";
	if (score === 3) return "Familiar";
	if (score === 4) return "Strong";
	return "Mastered";
}

const formatReviewTime = (nextReview) => {
	if (!nextReview) return "Review: N/A";
	const diff = nextReview - Date.now();
	if (diff <= 0) return "Review now";

	const minutes = Math.ceil(diff / 60000);
	const hours = Math.ceil(diff / 3600000);
	const days = Math.ceil(diff / 86400000);

	if (minutes < 60) return `Review in ${minutes} min`;
	if (hours < 24) return `Review in ${hours} hrs`;
	return `Review in ${days} days`;
}

const renderLibrary = (query = "") => {
	const list = $(".library-list");
	const searchValue = query.trim().toLowerCase();
	libraryCache = getLibraryWords();

	const filtered = searchValue
		? libraryCache.filter(word =>
			word.word.toLowerCase().includes(searchValue) ||
			word.japanese.toLowerCase().includes(searchValue) ||
			word.romaji.toLowerCase().includes(searchValue)
		) : libraryCache;

	if (filtered.length === 0) {
		list.html(`
			<div class="library-empty glass-card">
				<h3>No matching words</h3>
				<p>Try a different search term.</p>
			</div>
		`);
		return;
	}

	let html = "";
	filtered.forEach(word => {
		html += `
			<div class="library-item" data-id="${word.id}">
				<p class="library-item-word">${word.word}</p>
				<p class="library-item-jp">${word.japanese}</p>
			</div>
		`;
	});

	list.html(html);
}

const openLibraryDetail = (wordId) => {
	const word = words.find(w => String(w.id) === String(wordId));
	if (!word) return;

	const progress = loadProgress();
	const entry = progress[word.id];

	$(".library-detail-word").text(word.word);
	$(".library-detail-jp").text(`${word.japanese} (${word.romaji})`);

	if (entry) {
		$(".library-detail-mastery").text(`Mastery: ${getMasteryLabel(entry.score)}`);
		$(".library-detail-review").text(formatReviewTime(entry.nextReview));
	} else {
		$(".library-detail-mastery").text("Mastery: Not studied");
		$(".library-detail-review").text("Review: N/A");
	}
	$(".library-detail-meaning").text(word.meaning_en);

	let examplesHTML = "";
	(word.examples || []).forEach(example => {
		examplesHTML += `
			<div class="library-example">
				<p>${example.english}</p>
				<small>${example.japanese}</small>
			</div>
		`;
	});

	$(".library-detail-examples").html(examplesHTML || `
		<div class="library-example">
			<p>No examples available.</p>
		</div>
	`);

	$(".library-detail-overlay").addClass("show");
}

const closeLibraryDetail = () => {
	$(".library-detail-overlay").removeClass("show");
}

const loadLibrary = () => {
	renderLibrary($(".library-search-input").val() || "");
}


$(".library-search-input").on("input", function () {
	renderLibrary($(this).val());
});

$(document).on("click", ".library-item", function () {
	openLibraryDetail($(this).data("id"));
});

$(".library-detail-close, nav").on("click", closeLibraryDetail);

$(".library-detail-overlay").on("click", function (e) {
	if (e.target === this) closeLibraryDetail();
});

$(".library-detail-card").on("click", function (e) {
	e.stopPropagation();
});