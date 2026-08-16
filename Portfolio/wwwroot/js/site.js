document.addEventListener("DOMContentLoaded", function () {

    const typingText = document.getElementById("typing-text");

    const roles = [
        "Software Developer",
        "Web Developer",
        "Blockchain DApp Developer",
        "AI Enthusiast"
    ];

    let roleIndex = 0;
    let characterIndex = 0;
    let deleting = false;

    function typeEffect() {

        const currentRole = roles[roleIndex];

        if (!deleting) {

            typingText.textContent =
                currentRole.substring(0, characterIndex + 1);

            characterIndex++;

            if (characterIndex === currentRole.length) {

                deleting = true;

                setTimeout(typeEffect, 1800);

                return;
            }

        } else {

            typingText.textContent =
                currentRole.substring(0, characterIndex - 1);

            characterIndex--;

            if (characterIndex === 0) {

                deleting = false;

                roleIndex++;

                if (roleIndex === roles.length) {
                    roleIndex = 0;
                }

            }
        }

        const speed = deleting ? 45 : 90;

        setTimeout(typeEffect, speed);
    }

    typeEffect();

    // ========================================
    // SCROLL REVEAL ANIMATION
    // ========================================

    const revealElements =
        document.querySelectorAll(".scroll-reveal");

    const revealObserver = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                } else {

                    entry.target.classList.remove("visible");

                }

            });

        },
        {
            threshold: 0.15
        }
    );

    revealElements.forEach(function (element) {

        revealObserver.observe(element);

    });
});