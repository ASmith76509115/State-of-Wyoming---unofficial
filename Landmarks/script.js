document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".image-grid img");

    images.forEach(img => {
        img.addEventListener("mousedown", function (event) {
            let shiftX = event.clientX - img.getBoundingClientRect().left;
            let shiftY = event.clientY - img.getBoundingClientRect().top;

            img.style.position = "absolute";
            img.style.zIndex = 500;
            img.classList.add("grabbed"); // Enlarges image when grabbed

            // Set a reasonable scale to avoid massive enlargement
            img.style.transform = "scale(1.1)"; 

            function moveAt(pageX, pageY) {
                img.style.left = pageX - shiftX + "px";
                img.style.top = pageY - shiftY + "px";
            }

            function onMouseMove(event) {
                moveAt(event.pageX, event.pageY);
            }

            document.addEventListener("mousemove", onMouseMove);

            img.addEventListener("mouseup", function () {
                document.removeEventListener("mousemove", onMouseMove);
                img.style.zIndex = 5;

                // Restore normal size smoothly
                img.style.transform = "scale(0.3)"; 
                img.classList.remove("grabbed");
            }, { once: true }); // Ensures event runs only once per grab
        });

        img.ondragstart = function () {
            return false; // Prevents default dragging behavior
        };
    });
});
