// Slider functionality
const slides = document.getElementById("slides");
const dots = document.querySelectorAll(".slider-dot");
let current = 0;
let interval;

function showSlide(index) {
  slides.style.marginLeft = `-${index * 100}%`;
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[index].classList.add("active");
  current = index;
}

dots.forEach((dot, idx) => {
  dot.addEventListener("click", () => {
    showSlide(idx);
    resetInterval();
  });
});

function nextSlide() {
  let next = (current + 1) % dots.length;
  showSlide(next);
}

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(nextSlide, 4000);
}

showSlide(0);
resetInterval();
