document.addEventListener("DOMContentLoaded", function () {
    const homeButton = document.getElementById("home-btn");
    if (homeButton) {
        homeButton.addEventListener("click", function (event) {
            event.preventDefault();
            window.location.href = "../index.html"; // Ensure this path is correct
        });
    } else {
        console.error("Home button not found. Ensure #home-btn exists in the HTML.");
    }
});
