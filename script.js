//feature 1: Alert on form submission
document.addEventListener('DOMContentLoaded', () => {
   const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Message sent! Thank you for reaching out.');
      form.reset();
    });
  }

  //feature 2: Button hover log
  const buttons = document.querySelectorAll('button');
  buttons.forEach(btn => {
    btn.addEventListener('mouseover', () => console.log('Hovered over a button'));
  });

  //Feature 3: Toggle dark mode 
  const body = document.body;
  document.addEventListener('keydown', (e) => {
    if (e.key === 'd') {
      body.classList.toggle('dark-mode');
    }
  });
});
