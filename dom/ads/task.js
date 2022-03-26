let rotatorCaseActive = document.querySelectorAll('.rotator__case')[0];
let newRotatorCaseActive = null;
let rotatorCaseColor = document.querySelectorAll('.rotator__case');

rotatorCaseColor.forEach(elem => {
 elem.style.color = elem.dataset.color;
})

setTimeout(function rotator() {
 rotatorCaseActive.style.color = rotatorCaseActive.dataset.color;
 
 newRotatorCaseActive = rotatorCaseActive.nextElementSibling || document.querySelectorAll('.rotator__case')[0];
 rotatorCaseActive.classList.remove('rotator__case_active');
 newRotatorCaseActive.classList.add('rotator__case_active');
 rotatorCaseActive = newRotatorCaseActive;


 setTimeout(rotator, rotatorCaseActive.dataset.speed);
}, rotatorCaseActive.dataset.speed);