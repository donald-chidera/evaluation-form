function redirectOnRadioClick() {
    const radios = document.querySelectorAll('input[type="radio"]');
  
    radios.forEach(radio => {
      radio.addEventListener('click', () => {
        const nextPageUrl = radio.getAttribute('data-next-page');
        window.location.href = nextPageUrl;
      });
    });
  }
  
  redirectOnRadioClick();
  
  