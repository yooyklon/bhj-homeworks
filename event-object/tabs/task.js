
let tabContent = document.querySelectorAll('.tab__content');
let tab = document.querySelectorAll('.tab');


tab.forEach(function(item) {
 item.addEventListener('click', function(event) {
  let tabActive = document.querySelectorAll('.tab_active')[0];
  let tabContentActive = document.querySelectorAll('.tab__content_active')[0];
  let tabIndex;
  
  if (!(event.target.classList.contains('tab_active'))) {
   tabActive.classList.remove('tab_active');
   tabActive = event.target;
   tabActive.classList.add('tab_active');
   tabIndex = [...tab].findIndex((item) => item.classList.contains('tab_active'));
   tabContentActive.classList.remove('tab__content_active');
   tabContentActive = tabContent[tabIndex];
   tabContentActive.classList.add('tab__content_active');
  }
 })
})