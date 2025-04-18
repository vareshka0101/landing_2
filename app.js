let currentIndex = 0;
const slides = document.querySelectorAll('.carousel__slide');
const totalSlides = slides.length;
const navigation = document.getElementById('carouselNavigation');
const viewport = document.getElementById('carouselViewport');

for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('button');
    dot.classList.add('carousel__navigation-button');
    dot.setAttribute('data-index', i);
    dot.addEventListener('click', () => goToSlide(i));
    navigation.appendChild(dot);
}

const dots = document.querySelectorAll('.carousel__navigation-button');

function updateDots(index) {
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

function goToSlide(index) {
    if (index < 0) index = totalSlides - 1;
    if (index >= totalSlides) index = 0;
    currentIndex = index;
    viewport.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateDots(currentIndex);
}

function changeSlide(direction) {
    goToSlide(currentIndex + direction);
}


updateDots(currentIndex);

setInterval(() => changeSlide(1), 5000); 





    // карусель отзывов
    document.addEventListener('DOMContentLoaded', () => {
        const reviews = document.querySelectorAll('.review');
        const dots = document.querySelectorAll('.dot');

        
        function switchReview(index) {
            if (index < 0 || index >= reviews.length) return;

           
            reviews.forEach(review => review.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));

         
            reviews[index].classList.add('active');
            dots[index].classList.add('active');
        }


        dots.forEach(dot => {
            dot.addEventListener('click', () => {
                const index = parseInt(dot.getAttribute('data-index'), 12);
                switchReview(index);
            });
        });


        switchReview(0);
    });


   

//   модальное окно
document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('feedbackModal');
    const btnFeedback = document.getElementById('feedback'); 
    const btnConsultation = document.querySelector('.main_button'); 
    const span = document.getElementsByClassName('close')[0];

 
    function openModal() {
        modal.style.display = 'block';
    }


    function closeModal() {
        modal.style.display = 'none';
    }

  
    btnFeedback.onclick = openModal;
    btnConsultation.onclick = openModal;

    
    span.onclick = closeModal;

   
    window.onclick = function (event) {
        if (event.target == modal) {
            closeModal();
        }
    }
});



// модальное окно оставить отзыв

const modal = document.getElementById("myModal");
const btn = document.getElementById("openModalBtn");
const span = document.getElementsByClassName("close")[1];
const form = document.getElementById("myForm");


btn.onclick = function () {
    modal.style.display = "block";
}


span.onclick = function () {
    modal.style.display = "none";
}


window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

form.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    console.log("Имя:", name);
    console.log("Email:", email);



    modal.style.display = "none";
});
