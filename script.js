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

//карусуль дипломы
document.addEventListener('DOMContentLoaded', function() {
    const diplomaList = document.querySelectorAll('#diploma-list li');
    const images = document.querySelectorAll('.carousel-item');


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
        });
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

//модальное окно

document.addEventListener('DOMContentLoaded', function() {
    const openModalBtn = document.getElementById('openModalBtn');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const modal = document.getElementById('modal');

    // Открытие модального окна
    openModalBtn.addEventListener('click', function() {
        modal.style.display = 'block';
    });

    // Закрытие модального окна
    closeModalBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Закрытие модального окна при клике вне его
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});


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