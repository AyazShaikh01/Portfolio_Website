// ============================== WEBPROJECT_page's animation ==============================
// Define the animation for the first part (handshake image)
gsap.from("#part1 img", {
  opacity: 0,
  y: 100,
  duration: 2,
  scrollTrigger: {
      trigger: "#part1",
      start: "top bottom-=200",
      end: "top center",
      scrub: true
  }
});

// Define the animation for the second part (text content)
gsap.from("#part2, h6", {
  opacity: 0,
  x: -100,
  duration: 2,
  scrollTrigger: {
      trigger: "#part2",
      start: "top bottom-=200",
      end: "top center",
      scrub: true
  }
});

// Define the animation for the button
gsap.from("#about_content button", {
  opacity: 0,
  y: 50,
  duration: 1,
  scrollTrigger: {
      trigger: "#about_content",
      start: "top bottom-=200",
      end: "top center",
      scrub: true
  }
});

// ============================== WEBPROJECT_page's animation ==============================


document.querySelectorAll(".elem").forEach(function (elem) {
  var rotate = 0;

  elem.addEventListener("mousemove", function (dets) {
    var diffrotate = dets.clientX - rotate;
    rotate = dets.clientX;

    var diff = dets.clientY - elem.getBoundingClientRect().top;

    gsap.to(elem.querySelector("img"), {
      opacity: 1,
      ease: "power7",
      duration: 0.75,
      top: diff,
      left: dets.clientX,
      rotate: gsap.utils.clamp(-10, 10, diffrotate),
    });
  });

  elem.addEventListener("mouseleave", function (dets) {
    gsap.to(elem.querySelector("img"), {
      opacity: 0,
      duration: 0.75,
      ease: "power3",
    });
  });
});
