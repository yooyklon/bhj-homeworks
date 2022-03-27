let formSubmite = document.querySelector('.tasks__add');
let inputForm = document.querySelector('.tasks__input');
let taskLists = document.querySelector('.tasks__list');

formSubmite.addEventListener('click', function(event) {
 event.preventDefault();
 if (!inputForm == '') {
  let text = inputForm.value;
  taskLists.insertAdjacentHTML(
   'afterbegin',
   `<div class="task">
   <div class="task__title">
   ${text}
   </div>
   <a href="#" class="task__remove">&times;</a>
   </div>`
   )
  inputForm.value = '';
 }
})

taskLists.addEventListener('click', function(event) {
 if (event.target.closest('.task__remove')) {
  event.target.closest('.task').remove();
 }
})