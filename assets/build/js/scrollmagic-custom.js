// init controller
var controller = new ScrollMagic.Controller({});

var fadeInTop = document.getElementsByClassName("fadeInTop");
for (var i = 0; i < fadeInTop.length; i++) {
  // create a scene for each element
  new ScrollMagic.Scene({
    triggerElement: fadeInTop[i], // y value not modified, so we can use element as trigger as well
    offset: 40, // start a little later
    triggerHook: 0.85,
  })
    .setClassToggle(fadeInTop[i], "visible") // add class toggle
    //.addIndicators({ name: "fadeInTop " + (i + 1) })
    .addTo(controller);
}

var fadeInBottom = document.getElementsByClassName("fadeInBottom");
for (var i = 0; i < fadeInBottom.length; i++) {
  // create a scene for each element
  new ScrollMagic.Scene({
    triggerElement: fadeInBottom[i], // y value not modified, so we can use element as trigger as well
    offset: 40, // start a little later
    triggerHook: 0.85,
  })
    .setClassToggle(fadeInBottom[i], "visible") // add class toggle
    //.addIndicators({ name: "fadeInBottom " + (i + 1) })
    .addTo(controller);
}

var fadeIn = document.getElementsByClassName("fadeIn");
for (var i = 0; i < fadeIn.length; i++) {
  // create a scene for each element
  new ScrollMagic.Scene({
    triggerElement: fadeIn[i], // y value not modified, so we can use element as trigger as well
    offset: 40, // start a little later
    triggerHook: 0.85,
  })
    .setClassToggle(fadeIn[i], "visible") // add class toggle
    //.addIndicators({ name: "fadeIn " + (i + 1) })
    .addTo(controller);
}

var slideInLeft = document.getElementsByClassName("slideInLeft");
for (var i = 0; i < slideInLeft.length; i++) {
  // create a scene for each element
  new ScrollMagic.Scene({
    triggerElement: slideInLeft[i], // y value not modified, so we can use element as trigger as well
    offset: 40, // start a little later
    triggerHook: 0.85,
  })
    .setClassToggle(slideInLeft[i], "visible") // add class toggle
    //.addIndicators({ name: "slideInLeft " + (i + 1) })
    .addTo(controller);
}

var slideInRight = document.getElementsByClassName("slideInRight");
for (var i = 0; i < slideInRight.length; i++) {
  // create a scene for each element
  new ScrollMagic.Scene({
    triggerElement: slideInRight[i], // y value not modified, so we can use element as trigger as well
    offset: 40, // start a little later
    triggerHook: 0.85,
  })
    .setClassToggle(slideInRight[i], "visible") // add class toggle
    //.addIndicators({ name: "slideInRight " + (i + 1) })
    .addTo(controller);
}
