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

/* 
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
myFunction($(".message"), $(".message_def")); */


/* window.onload = function() {
 
    document.getElementById("form").reset();
}; */



document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".form");
    const modal = document.getElementById("successModal");
    const closeModal = document.getElementById("closeModal");
    const closeSuccessModal = document.getElementById("closeSuccessModal");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Останавливает стандартное поведение отправки формы

        // Отправляем форму через fetch
        fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: new FormData(form),
            })
            .then(response => response.json())
            .then(data => {
                // Очищаем форму после успешной отправки
                form.reset();

                // Показать модальное окно с благодарностью
                modal.classList.remove("hidden");
            })
            .catch(error => {
                console.error('Ошибка отправки формы:', error);
                alert('Ошибка отправки формы. Попробуйте еще раз.');
            });
    });

    // Закрыть модальное окно при клике на "закрыть"
    closeModal.addEventListener("click", function() {
        modal.classList.add("hidden");
    });

    // Закрыть модальное окно при клике на кнопку "Закрыть"
    closeSuccessModal.addEventListener("click", function() {
        modal.classList.add("hidden");
    });

    // Закрыть модальное окно, если кликнули вне его
    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.classList.add("hidden");
        }
    });
});