// pick all of the images and layer them based on the z-index

// grab the div with class of slides that contains all the images
const slideArea = document.querySelector("div.slides");

// grab all the images within that the slideArea div
const images = slideArea.querySelectorAll("img");

// we want to keep track of two things
let currentSlide = 0;
let z = 1;

// ON CLICK EFFECTS

// when I click the slide area, change the slide based on z-index
slideArea.addEventListener("click", function () {
  currentSlide = currentSlide + 1;

  if (currentSlide > images.length - 1) {
    currentSlide = 0;
  }

  z = z + 1;

  // remove the animation from the style for EVERY image so when you go around the slideshow for the second time, the animation still happens
  images.forEach((image) => {
    image.style.animation = "";
  });

  // pick the correct image
  images[currentSlide].style.zIndex = z;
  // bringing in the fade keyframe from style.css
  images[currentSlide].style.animation = "fade 0.5s";
});

// MOUSEOVER EFFECTS

// When I put my mouseover the slide area, put all of the images in a random placing

slideArea.addEventListener("mouseover", function () {
  images.forEach((image) => {
    const x = 100 * Math.random() - 50;
    const y = 100 * Math.random() - 50;

    image.style.transform = `translate(${x}px, ${y}px)`;
  });
});

// MOUSEOUT EVENT

// When I move my mouse away, put the images back

slideArea.addEventListener("mouseout", function () {
  images.forEach((image) => {
    image.style.transform = "";
  });
});
