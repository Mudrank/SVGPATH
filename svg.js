var textPath = document.querySelector("#text-path");

function updateTextPathOffset(offset) {
  textPath.setAttribute("startOffset", offset);
}

function onScroll() {
  requestAnimationFrame(function () {
    updateTextPathOffset(window.scrollY * 1.5);
  });
}

window.addEventListener("scroll", onScroll);

const titles = document.querySelectorAll('.anim')

observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
console.log(entry);
if (entry.isIntersecting) {
    entry.target.classList.add("animate");
  } else {
    entry.target.classList.remove("animate");
  }
})
})

titles.forEach(title => {
observer.observe(title);
})
