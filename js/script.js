/*========== Vanta.js Background Specifications ==========*/
VANTA.FOG({
            el: "#vanta-bg",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            highlightColor: 0x939393,
            midtoneColor: 0x484848,
            lowlightColor: 0x50505,
            baseColor: 0x000000,
            blurFactor: 0.25,
            speed: 2.00,
            zoom: 1.60
        });

/*========== Typewriter Text ==========*/

document.addEventListener("DOMContentLoaded", function () {
  const boxOverlay = document.querySelector(".box-overlay");

  const typed = new Typed(".typed-text", {
    strings: ["a mathematician.", "an artist.", "an explorer.", "a researcher"],
    typeSpeed: 70,
    backSpeed: 40,
    backDelay: 1500,
    startDelay: 500,
    loop: true,
    showCursor: true,
    cursorChar: "|",
    preStringTyped: function () {
      // Restart the swipe animation on each new string
      boxOverlay.classList.remove("animate");
      void boxOverlay.offsetWidth; // trigger reflow to restart animation
      boxOverlay.classList.add("animate");
    }
  });
});

