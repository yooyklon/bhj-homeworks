let xhr = new XMLHttpRequest();
let itemsBlock = document.querySelector('#items');
let loader = document.querySelector('.loader');

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');

xhr.onload = function(event) {
 let resultObj = JSON.parse(this.response);
 let valute = resultObj.response.Valute;
 let valuteKey = Object.keys(valute);

 if (xhr.status == 200) {
 if (loader.classList.contains('loader_active')) {
  loader.classList.remove('loader_active');
 }

  for (let key of valuteKey) {
   itemsBlock.insertAdjacentHTML(
    'beforeend',
    `<div class="item">
       <div class="item__code">
          ${valute[key].CharCode}
        </div>
        <div class="item__value">
           ${valute[key].Value}
        </div>
        <div class="item__currency">
           руб.
        </div>
     </div>`
   )
  }
 }
}

xhr.send();