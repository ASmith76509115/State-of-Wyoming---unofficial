document.addEventListener("DOMContentLoaded", function () {
    // Select buttons for navigation
    const cheyenneButton = document.getElementById("cheyenne-btn");
    const laramieButton = document.getElementById("laramie-btn");
    const torringtonButton = document.getElementById("torrington-btn");
    const verticalNav = document.querySelector(".vertical-nav");
    // Add event listeners for top navigation buttons
    if (cheyenneButton) {
        cheyenneButton.addEventListener("click", function (event) {
            event.preventDefault();
            window.location.href = "Task 1 UCM2 — UCM2 Cheyenne/index.html";
        });
    } else {
        console.error("Cheyenne button not found. Ensure the button exists in the HTML.");
    }

    if (laramieButton) {
        laramieButton.addEventListener("click", function (event) {
            event.preventDefault();
            window.location.href = "Task 1 UCM2 — UCM2 Laramie/index.html";
        });
    } else {
        console.error("Laramie button not found. Ensure the button exists in the HTML.");
    }

    if (torringtonButton) {
        torringtonButton.addEventListener("click", function (event) {
            event.preventDefault();
            window.location.href = "Task 1 UCM2 — UCM2 Torrington/index.html";
        });
    } else {
        console.error("Torrington button not found. Ensure the button exists in the HTML.");
    }

    // Define navigateTo function for the city thumbnails
    function navigateTo(city) {
        const routes = {
            "Laramie": "Task 1 UCM2 — UCM2 Laramie/index.html",
            "Cheyenne": "Task 1 UCM2 — UCM2 Cheyenne/index.html",
            "Torrington": "Task 1 UCM2 — UCM2 Torrington/index.html",
            "Gillette": "Task 1 UCM2 — UCM2 Gillette/index.html",
            "Sheridan": "Task 1 UCM2 — UCM2 Sheridan/index.html"
        };

        if (routes[city]) {
            window.location.href = routes[city];
        } else {
            console.error("Page not found for city:", city);
        }
    }

    // Expose navigateTo function globally so HTML can access it
    window.navigateTo = navigateTo;

    // FORM VALIDATION: Ensure email fields match before submitting the form
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            const email = document.getElementById("email").value;
            const confirmEmail = document.getElementById("confirm-email").value;

            if (email !== confirmEmail) {
                alert("Emails do not match. Please check again.");
            } else {
                alert("Form submitted successfully!");
                form.submit(); // If no backend is handling submission, remove this line
            }
        });
    }

    // ==================================
    // DRAGGABLE VERTICAL NAVBAR
    // ==================================
    
    
    const verticalNav = document.querySelector(".vertical-nav");

    if (!verticalNav) {
        console.error("Vertical navbar (.vertical-nav) not found! Check your HTML structure.");
        return;
    }

    let isDragging = false;
    let startX, startY, startLeft, startTop;

    verticalNav.addEventListener("mousedown", (event) => {
        // Prevent dragging if clicking on a link or image
        if (event.target.tagName === "A" || event.target.tagName === "IMG") return;

        isDragging = true;
        startX = event.clientX;
        startY = event.clientY;

        const rect = verticalNav.getBoundingClientRect();
        startLeft = rect.left;
        startTop = rect.top;
file:///C:/Users/AdamPCVR/Desktop/MIsc%20WGU%20and%20more/Task%201%20UCM2%20%E2%80%94%20UCM2%20Task%201%20Low-Level%20Comprehensive%20Page%20Layout%20Document/Laramie/index.html
        verticalNav.style.position = "absolute"; // Ensure it's movable
        verticalNav.style.zIndex = "1000"; // Keep it above other elements
        verticalNav.style.cursor = "grabbing"; // Indicate dragging

        function moveAt(pageX, pageY) {
            verticalNav.style.left = pageX - startX + startLeft + "px";
            verticalNav.style.top = pageY - startY + startTop + "px";
        }

        function onMouseMove(event) {
            moveAt(event.pageX, event.pageY);
        }

        document.addEventListener("mousemove", onMouseMove);

        document.addEventListener(
            "mouseup",
            () => {
                isDragging = false;
                verticalNav.style.cursor = "grab"; // Reset cursor
                document.removeEventListener("mousemove", onMouseMove);
            },
            { once: true }
        );
    });

    verticalNav.ondragstart = function () {
        return false; // Prevent default drag behavior
    };
});

});



