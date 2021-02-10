const toggleTag = document.querySelector("a.toggle-nav");
const mainTag = document.querySelector("main");

// when users click the toggle tag, toggle a class of open onto the main tag
toggleTag.addEventListener("click", function () {
  mainTag.classList.toggle("open");

  // and if it's open make the toggle tag say closed
  if (mainTag.classList.contains("open")) {
    toggleTag.innerHTML = `<img src="/images/close.svg"> Close`;
  } else {
    // and if not, make the toggle tag say open
    toggleTag.innerHTML = `<img src="/images/menu.svg"> Menu`;
  }
});
