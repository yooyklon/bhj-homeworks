const editor = document.getElementById('editor');

document.addEventListener("DOMContentLoaded", function() {
  editor.value = localStorage.getItem('editorValue');

 editor.addEventListener('input', function(event) {
  let value = event.target.value;
  localStorage.setItem('editorValue', value);
 })
});