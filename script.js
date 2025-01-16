var testimonialItems = document.querySelectorAll(".item label");
var timer;

function cycleTestimonials(index) {
    timer = setTimeout(function() {
        var evt;
        if (document.createEvent) {

            evt = document.createEvent('MouseEvent');
            evt.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
        } else {

            evt = new MouseEvent("click", {
                view: window,
                bubbles: true,
                cancelable: true,
                clientX: 20
            });
        }
        var ele = "." + testimonialItems[index].className;
        var ele2 = document.querySelector(ele)
        ele2.dispatchEvent(evt);
        index++;
        if (index >= testimonialItems.length) {
            index = 0;
        }
        cycleTestimonials(index);
        document.querySelector(".testimonials").addEventListener("click", function() {
            clearTimeout(timer);
        });
    }, 2000);
}

cycleTestimonials(0);

document.addEventListener("DOMContentLoaded", () => {
    const toggleButtons = document.querySelectorAll(".toggle-btn");

    toggleButtons.forEach(button => {
        button.addEventListener("click", () => {
            const collapsibleText = button.previousElementSibling.querySelector(".collapsible-text");
            if (collapsibleText.style.display === "none" || !collapsibleText.style.display) {
                collapsibleText.style.display = "inline";
                button.textContent = "Свернуть";
            } else {
                collapsibleText.style.display = "none";
                button.textContent = "Развернуть";
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {

    const diplomaList = document.querySelectorAll('#diploma-list li');
    const images = document.querySelectorAll('.carousel-item');
    const modal = document.getElementById('diploma-modal');
    const modalImage = document.getElementById('modal-image');
    const closeModal = document.getElementById('close-modal');


    let isMobile = window.innerWidth <= 1025;


    const updateIsMobile = () => {
        isMobile = window.innerWidth <= 1025;
    };


    window.addEventListener('resize', updateIsMobile);


    diplomaList.forEach((item, index) => {
        item.addEventListener('click', () => {

            diplomaList.forEach(li => li.classList.remove('active'));
            item.classList.add('active');


            images.forEach((img, imgIndex) => {
                img.classList.remove('active');
                if (imgIndex === index) {
                    img.classList.add('active');
                }
            });


            if (isMobile) {
                const imgSrc = item.getAttribute('data-img');
                modal.style.display = 'flex';
                modalImage.src = imgSrc;
            }
        });
    });


    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });


    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});

//вопрос ответ
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const btn = item.querySelector('.toggle-btn');
        const answer = item.querySelector('.answer');

        btn.addEventListener('click', () => {

            const isVisible = answer.style.display === 'block';
            answer.style.display = isVisible ? 'none' : 'block';


            btn.textContent = isVisible ? '+' : '−';
        });
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("feedbackForm");
    const modal = document.getElementById("modal");
    const closeModal = document.getElementById("closeModal");

    // Telegram bot token и chat ID
    const BOT_TOKEN = "7513886464:AAEVVvuW-6Z69fJmxn80PnqtSOs6PgjsV6";
    const CHAT_ID = "1233898357";

    // Функция для отправки сообщения в Telegram
    const sendToTelegram = async(message) => {
        const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ chat_id: CHAT_ID, text: message }),
            });

            const data = await response.json(); // Получаем ответ от API
            if (!response.ok) {
                console.error("Ошибка при отправке:", data);
            }
            return response.ok;
        } catch (error) {
            console.error("Ошибка сети или API:", error);
            return false;
        }
    };

    // Обработчик отправки формы
    form.addEventListener("submit", async(event) => {
        event.preventDefault();

        const formData = new FormData(form);
        const name = formData.get("name");
        const email = formData.get("email");
        const text = formData.get("text");

        const message = `Новое сообщение с формы:\n\nИмя: ${name}\nEmail: ${email}\nСообщение: ${text}`;

        // Отправляем данные в Telegram
        const success = await sendToTelegram(message);

        if (success) {
            // Очищаем форму
            form.reset();

            // Показываем модальное окно
            modal.classList.remove("hidden");
        } else {
            alert("Ошибка отправки сообщения. Проверьте соединение или настройки.");
        }
    });

    // Закрытие модального окна
    closeModal.addEventListener("click", () => {
        modal.classList.add("hidden");
    });

    // Закрытие модального окна при клике вне его
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.classList.add("hidden");
        }
    });
});


/* document.addEventListener('DOMContentLoaded', function() {
    const openModalBtn = document.getElementById('openModalBtn');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const modal = document.getElementById('modal');

    
    openModalBtn.addEventListener('click', function() {
        modal.style.display = 'block';
    });

    
    closeModalBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}); */


$(".definition").hide();

function myFunction($myVar, $myVar_def) {
    $myVar.hover(function() {
        $myVar_def.show();
    }, function() {
        $myVar_def.hide();
    })
}

myFunction($(".name"), $(".name_def"));
myFunction($(".email"), $(".email_def"));
myFunction($(".message"), $(".message_def"));