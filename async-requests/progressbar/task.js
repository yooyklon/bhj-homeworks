let button = document.querySelector('#send');
let progress = document.querySelector('#progress');
let inputFile = document.querySelector('#file');

button.addEventListener('click', function(event){
 event.preventDefault();
 let xhr = new XMLHttpRequest();
 let file = inputFile.files[0];

 xhr.upload.onprogress = function(event) {
  progress.value = +(((event.loaded * 100) / event.total) / 100).toFixed(1);
 };

 xhr.onload = function() {
  console.log('Файл загружен на сервер');
 };

 xhr.onerror = function(event) {
  console.log('Произошла ошибка ' + event.status);
 };
  
 xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
 xhr.send(file);
}); 


