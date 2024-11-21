var testimonialItems = document.querySelectorAll(".item label");
var timer;

function cycleTestimonials(index) {
    timer = setTimeout(function() {
        var evt;
        if (document.createEvent) {
            //If browser = IE, then polyfill
            evt = document.createEvent('MouseEvent');
            evt.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
        } else {
            //If Browser = modern, then create new MouseEvent
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
        index++; // Increment the index
        if (index >= testimonialItems.length) {
            index = 0; // Set it back to `0` when it reaches `3`
        }
        cycleTestimonials(index); // recursively call `cycleTestimonials()`
        document.querySelector(".testimonials").addEventListener("click", function() {
            clearTimeout(timer); //stop the carousel when someone clicks on the div
        });
    }, 2000); //adjust scroll speed in miliseconds
}
//run the function
cycleTestimonials(0);


//карусуль дипломы
document.addEventListener('DOMContentLoaded', function() {
    const diplomaList = document.querySelectorAll('#diploma-list li');
    const images = document.querySelectorAll('.carousel-item');

    // Добавляем обработчик событий для кликов на элементы списка
    diplomaList.forEach((item, index) => {
        item.addEventListener('click', () => {
            // Снимаем выделение со всех пунктов
            diplomaList.forEach(li => li.classList.remove('active'));

            // Подсвечиваем выбранный пункт
            item.classList.add('active');

            // Показываем соответствующее изображение и скрываем остальные
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
            // Переключение видимости ответа
            const isVisible = answer.style.display === 'block';
            answer.style.display = isVisible ? 'none' : 'block';

            // Изменение текста кнопки
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