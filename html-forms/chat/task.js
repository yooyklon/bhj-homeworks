let chatBtn = document.querySelector('.chat-widget__side-text');
let chatWindow = document.querySelector('.chat-widget');
let chatInput = document.querySelector('.chat-widget__input');
let messages = document.querySelector('.chat-widget__messages');

function getTime() {
 let time = new Date();
 let h = time.getHours();
 let m = time.getMinutes();
 if (m < 10) {
  m = '0' + m;
 }
 if (h < 10) {
  h = '0' + h;
 }
 return h + ':' + m;
}

function messageGenerator() {
 let arr = ['Сначала купите хоть один товар!', 'Кто вы?', 'Все операторы на данный момент заняты', 'Как вы можете так говорить'];
 return arr[Math.floor(Math.random() * arr.length)];
}

chatBtn.addEventListener('click', function(event) {
 chatWindow.classList.add('chat-widget_active');
});

chatInput.addEventListener('keydown', function(event) {
 if (event.key == 'Enter' && event.currentTarget.value != '') {
  messages.insertAdjacentHTML(
   'beforeEnd',
   `<div class="message message_client">
     <div class="message__time">${getTime()}</div>
     <div class="message__text">${event.currentTarget.value}</div>
   </div>
   <div class="message">
     <div class="message__time">${getTime()}</div>
     <div class="message__text">${messageGenerator()}</div>
   </div>`
  )
 }
});