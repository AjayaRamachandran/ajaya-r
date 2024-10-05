window.onload = function() {
    const profileImage = document.getElementById("main-profile-pic");

    profileImage.style.opacity = "1";
    profileImage.style.transform = "translateY(0px)";
};

document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.unflipped').forEach(function(element) {
        element.addEventListener('click', function() {
            console.log(this.classList);
            this.classList.add("flipped");
            if (this.classList[1] === "left-card") {
                this.textContent = "I'm a freshman at Northeastern University, originally from North Andover, MA. From childhood, my parents fostered in me a love for all things science and tech. As my interests developed, my passions clustered around computers, programming, and designing digital systems. By high school, I was fluent in many basic programming techniques, but I was eager to learn more.";
            } else if (this.classList[1] === "center-card") {
                this.textContent = "I'm an avid computer nerd with a need for design perfection. My interests fall right in between designing systems that are functional and systems that are a work of art. In my opinion, the designed experience goes hand in hand with the functional purpose. I am excited to bring this standard of quality to my future endeavors.";
            } else if (this.classList[1] === "right-card") {
                this.textContent = "Skilled in both front-end and back-end development, UI/UX design, as well as Algorithm Design, my skill set can be applied in almost any SWE environment. On top of the skills I already bring to the table, I'm a rapid learner with the capability to pick up new abilities on the fly, with strong communication and idea-marketing skills as a cherry on top.";
            }
            this.classList.replace("unflipped", "flipped");  // Replace class from "unflipped" to "flipped"
        });
    });
    document.querySelectorAll('.journey-point').forEach(point => {
        point.addEventListener('click', () => {
            // alert(`You clicked: ${point.dataset.milestone}`);
        });
    });
});
