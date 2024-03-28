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


    // mobile menu ...
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

// gsap.from(".icons-anim > img", {
//     // scale: 1.1,
//     // rotate: 5,
//     duration: 1.5,
//     repeat: -1,
//     yoyo: true, 
// });

gsap.to(".icons-anim > img, .sazzad-image", {
    scale: 1.1,
    // rotate: -5,
    duration: 1.5,
    repeat: -1,
    yoyo: true,
});