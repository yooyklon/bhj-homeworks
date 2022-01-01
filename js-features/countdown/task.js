function timer() {
 let id = setInterval(() => {
  let timer = document.getElementById('timer');
  if (timer.textContent < 1) {
   alert('Вы победили в конкурсе!');
   clearInterval(id);
  } else {
   timer.textContent -= 1;
  }
 }, 1000);
}

timer();