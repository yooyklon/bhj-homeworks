let tooltip = document.querySelector('.tooltip');

document.addEventListener('click', function(event) {
 event.preventDefault();
 let positionTarget;
 let positionTooltip;

 if (event.target.closest('.has-tooltip')) { 
 tooltip.classList.toggle('tooltip_active');
  
 positionTarget = event.target.getBoundingClientRect();
 tooltip.innerText = event.target.title;
 positionTooltip = tooltip.getBoundingClientRect();

  switch(event.target.dataset.position) {
   case 'bottom': 
    tooltip.style.top = positionTarget.height + positionTarget.top + 'px';
    tooltip.style.left = positionTarget.left + 'px';
   break;
   case 'top':
    tooltip.style.top = positionTarget.top - positionTarget.height - 10 + 'px';
    tooltip.style.left = positionTarget.left + 'px';
    break;
   case 'right':
    tooltip.style.top = positionTarget.top  + 'px';
    tooltip.style.left = positionTarget.left + positionTarget.width + 'px';
    break;
   case 'left':
    tooltip.style.top = positionTarget.top  + 'px';
    tooltip.style.left = positionTarget.left - positionTooltip.width + 'px';
    break;
   default: 
    tooltip.style.top = positionTarget.height + positionTarget.top + 'px';
    tooltip.style.left = positionTarget.left + 'px';
    break;
  }
 } else {
  tooltip.classList.remove('tooltip_active');
 }
});