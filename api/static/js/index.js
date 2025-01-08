window.onload = function() {
    const profileImage = document.getElementById("main-profile-pic");

    profileImage.style.opacity = "1";
    profileImage.style.transform = "translateY(0px)";
    profileImage.style.filter = "blur(0px)";
};

document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.card');
    elements.forEach(card => {
        card.addEventListener('click', function () {
            // Toggle the 'flipped' class on the clicked card only
            if (card.classList.value.includes("left-card")) {
                const subset = document.querySelectorAll('.left-card');
                subset.forEach(card => {
                    card.classList.toggle('flipped');
                });
            } else if (card.classList.value.includes("center-card")) {
                const subset = document.querySelectorAll('.center-card');
                subset.forEach(card => {
                    card.classList.toggle('flipped');
                });
            } else if (card.classList.value.includes("right-card")) {
                const subset = document.querySelectorAll('.right-card');
                subset.forEach(card => {
                    card.classList.toggle('flipped');
                });
            }
        })
    });
});