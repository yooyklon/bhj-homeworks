function modal() {
 let modals = document.querySelectorAll('.modal');
 let closes = document.querySelectorAll('.modal__close');
 let showSuccess = document.querySelectorAll('.show-success')[0];
 modals[0].className += ' modal_active';
 console.log(closes);
 closes[0].onclick = function() {
  modals[0].className = 'modal';
 }
 showSuccess.onclick = function() {
  modals[0].className = 'modal';
  modals[1].className += ' modal_active';
 }
 closes[2].onclick = function() {
  modals[1].className = 'modal';
 }
}

modal();