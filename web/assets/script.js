$(document).ready(function () {

	let currentWord = null;


	// Navigation
	$(".nav-item").click(function () {
		if ($(this).hasClass("nav-item-active")) return;
		$(".nav-item").removeClass("nav-item-active");
		$(this).addClass("nav-item-active");

		let activePage = $(this).children().eq(1).text();
		if (activePage == "Home") {
			loadDashboard();
			$(".app-main").css({ transform: "translateX(0%)" });
			$("body").css({ "background-position": "0% 0%" });
		} else if (activePage == "Study") {
			$(".app-main").css({ transform: "translateX(-25%)" });
			$("body").css({ "background-position": "33% 33%" });
		} else if (activePage == "Search") {
			$(".app-main").css({ transform: "translateX(-50%)" });
			$("body").css({ "background-position": "66% 66%" });
		} else if (activePage == "Quiz") {
			$(".app-main").css({ transform: "translateX(-75%)" });
			$("body").css({ "background-position": "100% 100%" });
		}
	});

	// $(".nav-item").eq(1).click();

	// Study\Review toggle

	$(".study-toggle-option").click(function () {
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
	$(".flashcard").click(function () {
		if (!currentWord) return;
		$(this).toggleClass("flipped");
	});

	// Render card
	function renderCard(word) {
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


	function loadNextCard() {
		currentWord = getNextWord();
		renderCard(currentWord);
	}


	$(".easy-btn").click(function () {
		if (!currentWord) return;
		updateWordProgress(currentWord.id, "easy");
		loadNextCard();
		loadDashboard();
	});

	$(".hard-btn").click(function () {
		if (!currentWord) return;
		updateWordProgress(currentWord.id, "hard");
		loadNextCard();
		loadDashboard();
	});

	$(".skip-btn").click(function () {
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
		loadDashboard();
	});

	// Initiate
	generateStudyQueue();
	loadNextCard();
	loadDashboard();
});
