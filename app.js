const introduceContainer = document.querySelector(".introduce-container");
const introduceMoreBadge = document.querySelector(".introduce-more-badge");
const background = document.querySelector(".background");
const headerMenuList = document.querySelector(".header-menu-list");
const introduceMore = document.querySelector(".introduce-more");

let moreBadgeclicked = false;

window.onload = () => {
  introduceContainer.classList.add("fade-in");
  setTimeout(() => {
    introduceMoreBadge.classList.add("show");
  }, 1100);
};

introduceMoreBadge.addEventListener("click", () => {
  moreBadgeclicked = !moreBadgeclicked;

  if (moreBadgeclicked) {
    background.classList.add("slide-in");
    headerMenuList.classList.add("to-white");
    setTimeout(() => {
      introduceMoreBadge.classList.add("clicked");
    }, 1000);

    setTimeout(() => {
      introduceMore.classList.add("show");
    }, 2000);
    introduceMoreBadge.innerHTML = "close";
  } else {
    setTimeout(() => {
      background.classList.remove("slide-in");
      introduceMoreBadge.classList.remove("clicked");
    }, 1000);

    headerMenuList.classList.remove("to-white");
    introduceMore.classList.remove("show");

    introduceMoreBadge.innerHTML = "more";
  }
});
