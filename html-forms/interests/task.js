document.addEventListener('change', function(event) {
 if (event.target.type === 'checkbox') {
  let checked = event.target.checked;
  walk(event.target, function(elem) {
   elem.checked = checked;
  })
 }
});

function walk(elem, callback) {
 if (elem.type === 'checkbox') {
  callback(elem);
  let next = elem.closest('.interest').children[1];
  if (next && next.classList.contains('interests')) {
   walk(next, callback);
  }
 } else {
  [].slice.call(elem.children).forEach(child => {walk(child, callback)});
 }
}