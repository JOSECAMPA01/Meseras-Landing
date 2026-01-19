 // MENU MOBILE
  document.getElementById('menuToggle').onclick = () => {
    document.querySelector('.nav').classList.toggle('active');
  };

  // BOTÓN DE IDIOMA (placeholder)
  document.getElementById('langToggle').onclick = () => {
    alert('Estas cambiando de idioma');
  };

  
const industriesBtn = document.getElementById('industriesBtn');
const industriesDropdown = document.getElementById('industriesDropdown');

// Desktop hover
industriesBtn.addEventListener('mouseenter', () => {
  industriesDropdown.classList.add('active');
});

industriesDropdown.addEventListener('mouseleave', () => {
  industriesDropdown.classList.remove('active');
});

// Mobile click
industriesBtn.addEventListener('click', (e) => {
  e.preventDefault();
  industriesDropdown.classList.toggle('active');
});





const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  item.addEventListener('click', () => {

    // cerrar todos
    faqItems.forEach(i => i.classList.remove('active'));

    // abrir el seleccionado
    item.classList.add('active');
  });
});


const dmFaqItems = document.querySelectorAll('.dm-faq-item');

dmFaqItems.forEach(item => {
  const button = item.querySelector('.dm-faq-question');

  button.addEventListener('click', () => {
    dmFaqItems.forEach(i => {
      i.classList.remove('active');
      i.querySelector('.dm-faq-icon').textContent = '+';
    });

    item.classList.add('active');
    item.querySelector('.dm-faq-icon').textContent = '−';
  });
});
