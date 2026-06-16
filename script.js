console.log("JavaScript carregado!");

// FAQ
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((item) => {
    item.addEventListener("click", () => {
        const answer = item.nextElementSibling;

        if (answer.style.display === "block") {
            answer.style.display = "none";
        } else {
            answer.style.display = "block";
        }
    });
});

// CONTADOR DE OFERTA
let hours = 21;
let minutes = 50;
let seconds = 59;

const countdownElement = document.getElementById("countdown");

if (countdownElement) {
    setInterval(() => {
        seconds--;

        if (seconds < 0) {
            seconds = 59;
            minutes--;
        }

        if (minutes < 0) {
            minutes = 59;
            hours--;
        }

        if (hours < 0) {
            hours = 21;
            minutes = 50;
            seconds = 59;
        }

        countdownElement.textContent =
            `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    }, 1000);
}

// GALERIA / CARROSSEL DOS PRODUTOS
document.querySelectorAll(".product-gallery").forEach((gallery) => {
    const mainImage = gallery.querySelector(".main-product-image");
    const thumbs = Array.from(gallery.querySelectorAll(".product-thumbs img"));
    const prevBtn = gallery.querySelector(".gallery-prev");
    const nextBtn = gallery.querySelector(".gallery-next");

    if (!mainImage || thumbs.length === 0) {
        return;
    }

    let currentIndex = thumbs.findIndex((thumb) => thumb.classList.contains("active"));

    if (currentIndex < 0) {
        currentIndex = 0;
    }

    function showImage(index) {
        currentIndex = (index + thumbs.length) % thumbs.length;

        const selectedImage = thumbs[currentIndex];

        mainImage.src = selectedImage.src;
        mainImage.alt = selectedImage.alt;

        thumbs.forEach((thumb) => thumb.classList.remove("active"));
        selectedImage.classList.add("active");
    }

    thumbs.forEach((thumb, index) => {
        thumb.addEventListener("click", () => {
            showImage(index);
        });
    });

    if (prevBtn) {
        prevBtn.addEventListener("click", () => {
            showImage(currentIndex - 1);
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener("click", () => {
            showImage(currentIndex + 1);
        });
    }

    let startX = 0;

    mainImage.addEventListener("touchstart", (event) => {
        startX = event.touches[0].clientX;
    });

    mainImage.addEventListener("touchend", (event) => {
        const endX = event.changedTouches[0].clientX;
        const distance = endX - startX;

        if (Math.abs(distance) > 40) {
            if (distance < 0) {
                showImage(currentIndex + 1);
            } else {
                showImage(currentIndex - 1);
            }
        }
    });

    showImage(currentIndex);
});

// ANIMAÇÃO AO ROLAR A PÁGINA
const cards = document.querySelectorAll(".card, .review");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

cards.forEach((card) => observer.observe(card));
