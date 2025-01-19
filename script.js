document.addEventListener("DOMContentLoaded", () => {
    // Переключение отзывов
    const testimonialItems = document.querySelectorAll(".item label");
    const testimonialsContainer = document.querySelector(".testimonials");
    let timer;

    function cycleTestimonials(index) {
        if (!testimonialItems.length) return; // Проверка наличия элементов

        timer = setTimeout(function() {
            const currentItem = testimonialItems[index];
            if (!currentItem) return; // Проверка, что элемент существует

            const evt = new MouseEvent("click", { bubbles: true, cancelable: true });
            currentItem.dispatchEvent(evt);

            index = (index + 1) % testimonialItems.length; // Цикличный индекс
            cycleTestimonials(index);
        }, 2000);
    }

    if (testimonialsContainer) {
        testimonialsContainer.addEventListener("click", () => clearTimeout(timer));
    }

    cycleTestimonials(0);

    // Переключение текста в кнопке
    const toggleButtons = document.querySelectorAll(".toggle-btn");
    toggleButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const collapsibleText = button.previousElementSibling.querySelector(".collapsible-text");
            if (collapsibleText) {
                collapsibleText.style.display =
                    collapsibleText.style.display === "none" || !collapsibleText.style.display ?
                    "inline" :
                    "none";
                button.textContent = collapsibleText.style.display === "inline" ? "Свернуть" : "Развернуть";
            }
        });
    });

    // Модальное окно для галереи
    const diplomaList = document.querySelectorAll("#diploma-list li");
    const images = document.querySelectorAll(".carousel-item");
    const modal = document.getElementById("diploma-modal");
    const modalImage = document.getElementById("modal-image");
    const closeModal = document.getElementById("close-modal");

    let isMobile = window.innerWidth <= 1025;

    const updateIsMobile = () => {
        isMobile = window.innerWidth <= 1025;
    };

    window.addEventListener("resize", updateIsMobile);

    diplomaList.forEach((item, index) => {
        item.addEventListener("click", () => {
            diplomaList.forEach((li) => li.classList.remove("active"));
            item.classList.add("active");

            images.forEach((img, imgIndex) => {
                img.classList.toggle("active", imgIndex === index);
            });

            if (isMobile) {
                const imgSrc = item.getAttribute("data-img");
                modal.style.display = "flex";
                modalImage.src = imgSrc;
            }
        });
    });

    if (closeModal) {
        closeModal.addEventListener("click", () => {
            modal.style.display = "none";
        });

        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.style.display = "none";
            }
        });
    }

    // Вопросы и ответы
    const faqItems = document.querySelectorAll(".faq-item");
    faqItems.forEach((item) => {
        const btn = item.querySelector(".toggle-btn");
        const answer = item.querySelector(".answer");

        if (btn && answer) {
            btn.addEventListener("click", () => {
                const isVisible = answer.style.display === "block";
                answer.style.display = isVisible ? "none" : "block";
                btn.textContent = isVisible ? "+" : "−";
            });
        }
    });

    // Обработка формы
    const form = document.querySelector(".form");
    const successModal = document.getElementById("successModal");
    const closeSuccessModal = document.getElementById("closeSuccessModal");

    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault();

            fetch("https://api.web3forms.com/submit", {
                    method: "POST",
                    body: new FormData(form),
                })
                .then((response) => response.json())
                .then(() => {
                    form.reset();
                    if (successModal) {
                        successModal.classList.remove("hidden");
                    }
                })
                .catch((error) => {
                    console.error("Ошибка отправки формы:", error);
                    alert("Ошибка отправки формы. Попробуйте еще раз.");
                });
        });
    }

    if (successModal) {
        successModal.addEventListener("click", (event) => {
            if (event.target === successModal || event.target.id === "closeModal") {
                successModal.classList.add("hidden");
            }
        });
    }
});