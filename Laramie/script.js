document.addEventListener("DOMContentLoaded", function () {
    const homeButton = document.getElementById("home-btn");
	const EventButton = document.getElementById("Event-btn");
    if (homeButton) {
        homeButton.addEventListener("click", function (event) {
            event.preventDefault();
            window.location.href = "../index.html"; // Ensure this path is correct
        });
	if (EventButton) {
        EventButton.addEventListener("click", function (event) {
            event.preventDefault();
            window.location.href = "./Events/events.html"; // Ensure this path is correct
        });	
    } else {
        console.error("Home button not found. Ensure #home-btn exists in the HTML.");
    }
});
