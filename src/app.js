import anime from 'animejs/lib/anime.es.js';
// console.log("app")

// anime({
// 	targets: 'div',
// 	translateX: 250,
// 	rotate: '1turn',
// 	backgroundColor: '#FFF',
// 	duration: 800
//     });

// Wrap every letter in a span
let textWrapper = document.querySelector('.ml6 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml6 .letter',
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 50 * i
  }).add({
    targets: '.ml6',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

  anime.timeline()
   .add({
    targets: '.image_item',
    translateX:750,
    scale: 1,


   })


 