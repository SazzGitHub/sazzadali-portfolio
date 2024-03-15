// Typewriter effect here ...


var typeEffect = document.getElementById('Typewriter');

var Typewriter = new Typewriter(typeEffect, {
    loop:true,
    delay: 200,
});

Typewriter
    .pauseFor(90)
    .typeString('a Developer')
    .pauseFor(350)
    .deleteChars(11)
    .typeString('a Programmer')
    .pauseFor(350)
    .deleteChars(12)
    .typeString('a UI Designer')
    .pauseFor(350)
    .start();


    (() => {

        function openMenu() {
            document.getElementById("small-hidden").classList.remove("hidden");
            document.getElementById("hamburger-btn").classList.add("hidden");
            document.getElementById("cross-btn").classList.remove("hidden");
        }

        function closeMenu() {
            document.getElementById("small-hidden").classList.add("hidden");
            document.getElementById("hamburger-btn").classList.remove("hidden");
            document.getElementById("cross-btn").classList.add("hidden");
        }
        
        document.getElementById("hamburger-btn").addEventListener("click", openMenu);
        document.getElementById("cross-btn").addEventListener("click", closeMenu);
    })();

gsap.from(".icons-anim > img", {
    // scale: 0.92,
    rotate: 3,
    duration: 2,
    repeat: -1,
    yoyo: true, 
});

gsap.to(".icons-anim > img", {
    // scale: 1,
    rotate: -3,
    duration: 2,
    repeat: -1,
    yoyo: true,
});