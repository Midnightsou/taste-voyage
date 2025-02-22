let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Show slides
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}

// Automatic slideshow
let slideIndexAuto = 0;
function showSlidesAuto() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndexAuto++;
    if (slideIndexAuto > slides.length) {slideIndexAuto = 1}
    slides[slideIndexAuto-1].style.display = "block";
    setTimeout(showSlidesAuto, 3000); // Change image every 3 seconds
}
showSlidesAuto();
document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("nav ul li a");

    for (const link of links) {
        link.addEventListener("click", smoothScroll);
    }

    function smoothScroll(event) {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute("href").slice(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth"
        });
    }
});
document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for navigation links
    const links = document.querySelectorAll("nav ul li a");

    for (const link of links) {
        link.addEventListener("click", smoothScroll);
    }

    function smoothScroll(event) {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute("href").slice(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth"
        });
    }

    // Slideshow functionality
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        const slides = document.getElementsByClassName("mySlides");
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}    
        slides[slideIndex-1].style.display = "block";  
        setTimeout(showSlides, 4000); // Change image every 4 seconds
    }

    // Modal functionality
    const modal = document.getElementById("myModal");
    const span = document.getElementsByClassName("close")[0];

    document.querySelectorAll(".main-image").forEach(image => {
        image.addEventListener("click", function() {
            modal.style.display = "block";
        });
    });

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Form validation
    document.querySelector("form").addEventListener("submit", function(event) {
        const name = document.querySelector("[name='name']");
        const email = document.querySelector("[name='email']");
        const message = document.querySelector("[name='message']");

        if (name.value === "" || email.value === "" || message.value === "") {
            alert("All fields are required!");
            event.preventDefault();
        }
    });

    // Filtering menu items
    const filterButtons = document.querySelectorAll(".filter-btn");
    const menuItems = document.querySelectorAll(".menu-item");

    filterButtons.forEach(button => {
        button.addEventListener("click", function() {
            const category = this.getAttribute("data-category");

            menuItems.forEach(item => {
                if (category === "all" || item.getAttribute("data-category") === category) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            });
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    // Existing code...

    // Form validation and submission
    const contactForm = document.querySelector("#contact form");
    const newsletterForm = document.querySelector("#newsletter-form");

    contactForm.addEventListener("submit", function(event) {
        const name = contactForm.querySelector("[name='name']");
        const email = contactForm.querySelector("[name='email']");
        const message = contactForm.querySelector("[name='message']");
        let isValid = true;

        if (name.value.trim() === "") {
            alert("Name is required!");
            isValid = false;
        }

        if (email.value.trim() === "") {
            alert("Email is required!");
            isValid = false;
        } else if (!/^\S+@\S+\.\S+$/.test(email.value)) {
            alert("Invalid email format!");
            isValid = false;
        }

        if (message.value.trim() === "") {
            alert("Message is required!");
            isValid = false;
        }

        if (!isValid) {
            event.preventDefault();
        } else {
            event.preventDefault();
            alert("Thank you for your message!");
            contactForm.reset();
        }
    });

    newsletterForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const email = newsletterForm.querySelector("input[type='email']");

        if (email.value.trim() === "") {
            alert("Email is required!");
        } else if (!/^\S+@\S+\.\S+$/.test(email.value)) {
            alert("Invalid email format!");
        } else {
            alert("Thank you for subscribing!");
            newsletterForm.reset();
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    // Existing code...

    // Back to top button
    const backToTopButton = document.getElementById("back-to-top");

    window.addEventListener("scroll", function() {
        if (window.scrollY > 300) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    });

    backToTopButton.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
