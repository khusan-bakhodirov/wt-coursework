const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// AOS
AOS.init({
  offset: 120, // Offset from the original trigger point
  delay: 100, // Delay in milliseconds for the animation
  duration: 800, // Duration of the animation
  easing: "ease-in-out", // Easing for the animation
  once: true, // Whether animation should happen only once
  mirror: false, // Whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // Defines which position of the element regarding to window should trigger the animation
});

// Mobile Navigation
const toggle_btn = document.querySelector(".header__toggle");
const nav = document.querySelector(".header__nav");
toggle_btn.addEventListener("click", () => {
  nav.classList.toggle("active");
})

// FAQ ACCORDIONS
document.querySelectorAll(".faq__accordion").forEach((accordion) => {
  accordion.addEventListener("click", () => {
    const content = accordion.querySelector(".faq__accordion-body");
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = `${content.scrollHeight}px`;
    }
  });
});

function toast(message, className) {
  // create toast element
  const toast = document.createElement("div");
  toast.classList.add("toast");
  toast.classList.add(className);
  toast.innerHTML = message;
  // add toast to body element
  document.body.appendChild(toast);
  // it will remove toast after 3 seconds
  setTimeout(() => {
    toast.remove();
  }, 3000);
}

// CONTACT FORM SUBMISSION
const form = document.querySelector(".booking-form__form");
form?.addEventListener("submit", (e) => {
  // it prevents default behaviours of form which reloads the page
  e.preventDefault();
  // retrieving input values
  const name = document.querySelector('input[name="name"]').value;
  const email = document.querySelector('input[name="email"]').value;
  const phone = document.querySelector('input[name="tel"]').value;
  const service = document.querySelector('select[name="service"]').value;
  const date = document.querySelector('input[name="date"]').value;
  const notes = document.querySelector('textarea[name="notes"]').value;
  // checking for validation
  if (name == "" || email == "" || phone == "" || service == "" || date == "") {
    toast("All fields are required", "toast--error");
  } else {
    toast("Form submitted successfully", "toast--success");
    form.reset();
  }
});
