let bookControlFontSize = document.querySelector('.book__control_font-size');
let bookControlColor = document.querySelector('.book__control_color');
let bookControlBackground = document.querySelector('.book__control_background');

bookControlFontSize.addEventListener('click', function(event) {
 event.preventDefault();

 let sizeControl = document.querySelectorAll('.font-size');

 sizeControl = Array.from(sizeControl).map(elem => elem.classList.remove('font-size_active'));
 event.target.closest('.font-size').classList.add('font-size_active');

 if (event.target.closest('.book').classList.contains('book_fs-small')) {
  event.target.closest('.book').classList.remove('book_fs-small');
 } else if (event.target.closest('.book').classList.contains('book_fs-big')) {
  event.target.closest('.book').classList.remove('book_fs-big');
 }

 if (event.target.dataset.size) {
  document.querySelector('.book').classList.add(`book_fs-${event.target.dataset.size}`);
 }
});

bookControlColor.addEventListener('click', function(event) {
 event.preventDefault();

 let colorControl = document.querySelectorAll('.book__control_color .color');

 colorControl = Array.from(colorControl).map(elem => elem.classList.remove('color_active'));
 event.target.closest('.color').classList.add('color_active');

 if (event.target.closest('.book').classList.contains('book_color-gray')) {
  event.target.closest('.book').classList.remove('book_color-gray');
 } else if (event.target.closest('.book').classList.contains('book_color-whitesmoke')) {
  event.target.closest('.book').classList.remove('book_color-whitesmoke');
 } else if (event.target.closest('.book').classList.contains('book_color-black')) {
  event.target.closest('.book').classList.remove('book_color-black');
 }
 
 if (event.target.dataset.textColor) {
  document.querySelector('.book').classList.add(`book_color-${event.target.dataset.textColor}`);
 }
});

bookControlBackground.addEventListener('click', function(event) {
 event.preventDefault();

 let colorBgControl = document.querySelectorAll('.book__control_background .color');

 colorBgControl = Array.from(colorBgControl).map(elem => elem.classList.remove('color_active'));
 event.target.closest('.color').classList.add('color_active');

 if (event.target.closest('.book').classList.contains('book_bg-gray')) {
  event.target.closest('.book').classList.remove('book_bg-gray');
 } else if (event.target.closest('.book').classList.contains('book_bg-whitegi')) {
  event.target.closest('.book').classList.remove('book_bg-white');
 } else if (event.target.closest('.book').classList.contains('book_bg-black')) {
  event.target.closest('.book').classList.remove('book_bg-black');
 }
 
 if (event.target.dataset.bgColor) {
  document.querySelector('.book').classList.add(`book_bg-${event.target.dataset.bgColor}`);
 }
})