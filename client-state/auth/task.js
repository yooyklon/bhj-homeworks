const button = document.getElementById('signin__btn');
const sign = document.querySelector('.signin');
const welcome = document.querySelector('.welcome');
const userId = document.getElementById('user_id');
let xml = new XMLHttpRequest();

xml.onloadend = function(event) {
 if (xml.status == 200) {
  let responseObj = JSON.parse(xml.response);

  if (responseObj.success == true) {
   sign.classList.remove('signin_active');
   welcome.classList.add('welcome_active');
   userId.textContent = responseObj['user_id'];
  }
 }
}

button.addEventListener('click', function(event) {
 event.preventDefault();

 let formData = new FormData(document.getElementById('signin__form'));

 xml.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
 xml.send(formData);
})