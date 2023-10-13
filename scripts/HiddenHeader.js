document.addEventListener("DOMContentLoaded", function() {
    var header = document.getElementById("mainHeader");

    window.addEventListener("scroll", function() {
        if (window.scrollY > header.offsetHeight) {
            header.style.opacity = "0"; 
        } else {
            header.style.opacity = "1"; 
        }
    });

    header.style.transition = "opacity 0.3s ease-in-out";
});
