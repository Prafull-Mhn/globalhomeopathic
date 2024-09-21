let slideIndex = 1;
    let autoSlideInterval;
    showSlides(slideIndex);

    function showSlides(n) {
        let slides = document.querySelectorAll('.slide');
        let dots = document.querySelectorAll('.dot');
        
        if (n > slides.length) { slideIndex = 1; }
        if (n < 1) { slideIndex = slides.length; }
        
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }

        for (let i = 0; i < dots.length; i++) {
            dots[i].classList.remove('active');
        }

        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].classList.add('active');
    }

    function nextSlide() {
        showSlides(slideIndex += 1);
        resetAutoSlide();
    }

    function prevSlide() {
        showSlides(slideIndex -= 1);
        resetAutoSlide();
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
        resetAutoSlide();
    }

    function autoSlide() {
        autoSlideInterval = setInterval(() => {
            showSlides(slideIndex += 1);
        }, 3000);
    }

    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        autoSlide();
    }
