function clickSize() {
 let count = document.getElementById('clicker__counter');
 let image = document.getElementById('cookie');
 count.textContent = Number(count.textContent) + 1;
 image.width = 250;
 image.height = 178;
 setTimeout(() => {
  image.width = 200;
  image.height = 128;
 }, 50);
}

let cookie = document.getElementById('cookie');
cookie.onclick = clickSize;