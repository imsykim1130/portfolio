const projectContainer = document.querySelector(".project-container");
let projectcontainerHeight = projectContainer.getBoundingClientRect().height;

let start = 0;
let end = 0;
const ease = 0.1;

function lerp(start, end, ease) {
  return start + (end - start) * ease;
}

function smoothScrollAnimation() {
  requestAnimationFrame(smoothScrollAnimation);
  start = lerp(start, end, ease);
  start = parseFloat(start.toFixed(2));
  projectContainer.style.transform = `translateY(-${start}px)`;
  end = window.scrollY;
  document.body.style.height = projectcontainerHeight + "px";
}

addEventListener("resize", () => {
  projectcontainerHeight = projectContainer.getBoundingClientRect().height;
  document.body.style.height = projectcontainerHeight + "px";
});

projectContainer.addEventListener("click", (e) => {
  if (e.target.classList[0] === "project-representative-image") {
    localStorage.setItem("projectNumber", e.target.dataset.number);
    console.log(e.target);
  }
});

setTimeout(() => {
  smoothScrollAnimation();
}, 0);
