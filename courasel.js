const carousel = document.querySelector(".carousel");
const items = document.querySelectorAll(".carousel-item");
const dots = document.querySelectorAll(".nav-dot");

let activeIndex = 0;

function updateCarousel() {
  items.forEach((item, index) => {
    item.classList.remove("active", "left", "right");

    if (index === activeIndex) {
      item.classList.add("active");
    } else if (index === (activeIndex - 1 + items.length) % items.length) {
      item.classList.add("left");
    } else if (index === (activeIndex + 1) % items.length) {
      item.classList.add("right");
    }
  });

  dots.forEach((dot) => dot.classList.remove("active"));
  dots[activeIndex].classList.add("active");
}

// Click event on navigation dots
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    activeIndex = index;
    updateCarousel();
  });
});

// Mouse wheel support to navigate carousel
carousel.addEventListener("wheel", (event) => {
  if (event.deltaY > 0) {
    activeIndex = (activeIndex + 1) % items.length; // Move right
  } else {
    activeIndex = (activeIndex - 1 + items.length) % items.length; // Move left
  }
  updateCarousel();
});

// Initialize the carousel on page load
updateCarousel();
