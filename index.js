document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.querySelector('.burger-menu'),
          navLinks = document.querySelector('.links');

    burgerMenu.addEventListener('click', function() {
        console.log(navLinks);
        navLinks.classList.toggle('show-menu');
    })

    const swiper = new Swiper('.testimonial__wrapper.swiper', {
        speed: 400,
        spaceBetween: 20,
        loop: true,
        slidesPerView: 1,
        navigation: {
            nextEl: '.arrow-next',
            prevEl: '.arrow-prev'
        },
        breakpoints: {
            480: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            }
        }
    });
    
    const btn = document.querySelectorAll('.openModal');
    const modal = document.querySelector('.modal');
    const close = document.querySelector('.close');
    const body = document.getElementsByTagName('body')[0];
    
    btn.forEach(function(b) {
        b.addEventListener('click' , function() {
            modal.style.display = 'flex';  
            body.style.overflow = 'hidden';
        });
    });

    close.addEventListener('click' , function() {
        modal.style.display = 'none';
        body.style.overflow = 'unset';
    });

    modal.addEventListener('click', function(e) {
        if (e.target == modal) {
            modal.style.display = 'none';
            body.style.overflow = 'unset';
        }
    });

    // for (let i = 0; i < btn.length; i++) {
    //     btn[i].addEventListener('click' , () => {
    //         modal.style.display = 'flex';  
    //     })
    // }
    // close[i].addEventListener('click' , () => {
    //     modal.style.display = 'none';  
    // })

    const accHeading = document.querySelectorAll('.faq__accordeon-heading');
    
    // accHeading.forEach((el, i) => {
    //     el.addEventListener('click', function () {
    //         el.classList.toggle('active');
    //     })
    // })
    accHeading.forEach((el) => {
        el.addEventListener('click', function () {
            const isActiveEl = el.parentElement.classList.contains('active');
            accHeading.forEach((anotherEl) => {
                anotherEl.parentElement.classList.remove('active');
            });
            if(!isActiveEl) {
                el.parentElement.classList.add('active');
            };
        });  
    });
});