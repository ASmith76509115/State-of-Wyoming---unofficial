document.addEventListener("DOMContentLoaded", function () {
    // Handle Home Button Navigation
    const homeButton = document.getElementById("home-btn");
    if (homeButton) {
        homeButton.addEventListener("click", function (event) {
            event.preventDefault();
            window.location.href = "../index.html"; // Ensure this path is correct
        });
    } else {
        console.error("Home button not found. Ensure #home-btn exists in the HTML.");
    }

    // Handle Form Submission
    const form = document.getElementById("registration-form");
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault(); // Stop form from submitting immediately

            const emailField = document.getElementById("email");
            const confirmEmailField = document.getElementById("confirm-email");

            if (!emailField || !confirmEmailField) {
                console.error("Email fields not found. Ensure 'email' and 'confirm-email' exist in the HTML.");
                return;
            }

            const email = emailField.value.trim();
            const confirmEmail = confirmEmailField.value.trim();

            console.log("Email:", email); // Debugging
            console.log("Confirm Email:", confirmEmail); // Debugging

            if (email !== confirmEmail) {
                alert("Emails do not match. Please check again.");
                return; // Prevent further execution
            } 

            alert("Form submitted successfully!");
            form.submit(); // Remove this if no backend is handling submission
        });
    } else {
        console.error("Registration form not found. Ensure #registration-form exists in the HTML.");
    }
});
