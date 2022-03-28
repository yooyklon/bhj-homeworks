let xml = new XMLHttpRequest();
let pool = document.querySelector('.poll');
let poolTitle = document.querySelector('.poll__title');
let pollAnswers = document.getElementsByClassName('poll__answers')[0];

xml.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');

xml.onload = function() {
 if (xml.status == 200) {
  let responseObj = JSON.parse(xml.response);
  let title = responseObj.data.title;
  let answers = responseObj.data.answers;
  
  poolTitle.append(title);
  for(let answer of answers) {
   pollAnswers.insertAdjacentHTML(
    'beforeend',
    `<button class="poll__answer">
       ${answer}
     </button>`
   );
  }

  pollAnswers.addEventListener('click', function(event) {
   if (event.target.closest('.poll__answer')) {
    alert('Спасибо ваш голос засчитан!');

    let xml = new XMLHttpRequest();
    xml.open('POST', 'https://netology-slow-rest.herokuapp.com/poll.php');
    let value = event.target.innerText;
    let index = answers.findIndex(item => item == value);
    xml.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    xml.send(`vote=${responseObj.id}&answer=${index}`);

   xml.onload = function(event) {
    pool.removeChild(pollAnswers);
    let responseObj = JSON.parse(xml.response);
    let value = responseObj.stat;
    let count = value.reduce((acc, elem) => acc += elem.votes, 0);
    for (let elem of value) {
     pool.insertAdjacentHTML(
      'beforeend',
      `<div style="margin-bottom: 15px">${elem.answer}: <span style="font-weight: 700;">${(elem.votes * 100 / count).toFixed()}%</span></div>`
     );
    }
   }
   }
  });
 }
};

xml.send();