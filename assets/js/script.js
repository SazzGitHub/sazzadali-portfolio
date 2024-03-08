// Typewriter effect here ...
var typeEffect = document.getElementById('Typewriter');

var Typewriter = new Typewriter(typeEffect, {
    loop:true,
    delay: 200,
});

Typewriter
    .pauseFor(90)
    .typeString('a Web Developer')
    .pauseFor(350)
    .deleteChars(15)
    .typeString('a Programmer')
    .pauseFor(350)
    .deleteChars(12)
    .typeString('a UI Designer')
    .pauseFor(350)
    .start();