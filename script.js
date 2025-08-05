// Modern Taste Voyage JS

// --- Carousel (Bootstrap handles carousel, so no manual slideshow needed) ---

// --- Smooth Scroll for internal anchor links ---
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("nav ul li a[href^='#']");
  for (const link of links) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = this.getAttribute("href").slice(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // offset for header
          behavior: "smooth",
        });
      }
    });
  }
});

// --- Back to Top Button ---
document.addEventListener("DOMContentLoaded", function () {
  const backToTopButton = document.getElementById("back-to-top");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  });
  backToTopButton.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

// --- Fade-in Animation on Scroll ---
document.addEventListener("DOMContentLoaded", function () {
  const fadeEls = document.querySelectorAll(".fade-in");
  function checkFade() {
    fadeEls.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 60) {
        el.classList.add("visible");
      }
    });
  }
  window.addEventListener("scroll", checkFade);
  checkFade();
});

// --- Menu Filtering (if present) ---
document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const menuItems = document.querySelectorAll(".menu-item");
  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const category = this.getAttribute("data-category");
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");
      menuItems.forEach((item) => {
        if (category === "all" || item.getAttribute("data-category") === category) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });
});

// --- Form Validation (if present) ---
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.querySelector("form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      const name = contactForm.querySelector("[name='name']");
      const email = contactForm.querySelector("[name='email']");
      const message = contactForm.querySelector("[name='message']");
      let valid = true;
      if (name && name.value.trim() === "") valid = false;
      if (email && (email.value.trim() === "" || !/^\S+@\S+\.\S+$/.test(email.value))) valid = false;
      if (message && message.value.trim() === "") valid = false;
      if (!valid) {
        alert("Please fill in all fields with valid information.");
        event.preventDefault();
      }
    });
  }
});
