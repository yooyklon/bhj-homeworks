const modal = document.querySelector('.modal');

document.addEventListener('DOMContentLoaded', function() {
 if (getCookie('modalCloseState') === null) {
  modal.classList.add('modal_active');
 }
})

modal.addEventListener('click', function(event) {
 if (event.target.closest('.modal__close')) {
  modal.classList.remove('modal_active');
  document.cookie = 'modalCloseState=true';
 }
})

function getCookie(key) {
 let couple = document.cookie.split('; ');
 let result = couple.find(elem => elem.startsWith(key + '='));
 return result ? result.substring(key.length + 1) : null;
}