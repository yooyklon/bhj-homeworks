let reveal = document.querySelectorAll('.reveal');

document.addEventListener('scroll', function() {
 reveal.forEach(reveal => {
  if (reveal.getBoundingClientRect().top <= window.innerHeight) {
   reveal.classList.add('reveal_active');
  }
 })
});