$(window).on('load', () => {

	// Navigation
	$(".nav-item").click(function () {
		if ($(this).hasClass("nav-item-active")) return;
		$(".nav-item").removeClass("nav-item-active");
		$(this).addClass("nav-item-active");
		$(".app-main section").addClass("fadePage");
		setTimeout(() => $(".app-main section").removeClass("fadePage"), 200);

		let activePage = $(this).children().eq(1).text();
		if (activePage == "Home") {
			loadDashboard();
			$(".app-main").css({ transform: "translateX(0%)" });
			$("body").css({ "background-position": "0% 0%" });
		} else if (activePage == "Study") {
			$(".app-main").css({ transform: "translateX(-25%)" });
			$("body").css({ "background-position": "33% 33%" });
		} else if (activePage == "Library") {
			loadLibrary();
			$(".app-main").css({ transform: "translateX(-50%)" });
			$("body").css({ "background-position": "66% 66%" });
		} else if (activePage == "Quiz") {
			loadQuizQuestion();
			$(".app-main").css({ transform: "translateX(-75%)" });
			$("body").css({ "background-position": "100% 100%" });
		}
	});
	

	// Initiate App
	generateStudyQueue(); // study.js
	loadNextCard(); // study.js
	loadDashboard(); // dashboard.js
	loadQuizQuestion(); // quiz.js

	// Loading Done
	$('body').addClass('ready');
	setTimeout(() => $('.loading-screen').addClass('hide'), 100);
});
