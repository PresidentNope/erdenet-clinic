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

    class TeamFilter {
  constructor(inputSelector, teamSelector) {
    this.input = document.querySelector(inputSelector);
    this.teams = Array.from(document.querySelectorAll(teamSelector));

    this.input.addEventListener('input', () => this.applyFilter());
  }

  applyFilter() {
    const query = this.input.value.toLowerCase();

    this.teams.forEach(team => {
      const nameText = team.textContent.toLowerCase();
      const specialization = team.dataset.specialization?.toLowerCase() || '';

      const matches = nameText.includes(query) || specialization.includes(query);
      team.style.display = matches ? '' : 'none';
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new TeamFilter('#filterInput', '.team');
});