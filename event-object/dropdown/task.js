let dropdownBtn = document.querySelectorAll('.dropdown__value')[0];
let dropdownItems = document.querySelectorAll('.dropdown__item');

dropdownItems.forEach(function(item) {
 item.onclick = function(event) {
  let itemValue = event.target.innerText;
  if (event.target.closest('.dropdown__list').previousElementSibling) {
   dropdownBtn.textContent = itemValue;
   if (event.target.closest('.dropdown__list').classList.contains('dropdown__list_active')) {
    event.target.closest('.dropdown__list').classList.toggle('dropdown__list_active')
   }
  }
  event.preventDefault();
 };
})

dropdownBtn.addEventListener('click', function(event) {
 if (event.target.nextElementSibling) {
  let menuBody = document.querySelectorAll('.dropdown__list')[0];
  menuBody.classList.toggle('dropdown__list_active');
 };
 
});