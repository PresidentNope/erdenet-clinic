let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');

    function showNextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
}
    setInterval(showNextSlide, 3000);

    const form = document.getElementById('appointmentForm');

    form.onsubmit = (e) => {
        e.preventDefault(); 

        const formData = new FormData(form);
        const dataObject = {};
        formData.forEach((value, key) => {
            dataObject[key] = value;
        });

        console.log("Collected form data:", dataObject);
        alert("Спасибо! Мы получили вашу заявку. (данные не отправлены на сервер)");
        
        form.reset(); 
    };