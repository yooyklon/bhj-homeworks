let reveal = document.querySelectorAll('.reveal')[0];

document.addEventListener('scroll', function() {
 if (reveal.getBoundingClientRect().top <= window.innerHeight) {
  reveal.classList.add('reveal_active');
 }
});