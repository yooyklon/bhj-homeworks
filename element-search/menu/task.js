// function homeMenu() {
//  let menuLinks = document.querySelectorAll('.menu__link');
//  menuLinks = Array.from(menuLinks);
 
//  for (let i = 0; i < menuLinks.length; i++) {
//   menuLinks[i].onclick = function() {
//    if (menuLinks[i].nextElementSibling) {
//     let menuSub = menuLinks[i].nextElementSibling;
 
//     if (menuSub.className.includes('menu_active')) {
//      menuSub.className = 'menu menu_sub';
//      return false;
//     } else {
//       let menuSub = menuLinks[i].nextElementSibling;
 
//        menuSub.className += ' menu_active';
//        return false;
//     }
//    }
//   }
//  }
// }

function homeMenu() {
  let menuLinks = document.querySelectorAll('.menu__link');
  let menuSub;
  menuLinks = Array.from(menuLinks);
  
  for (let i = 0; i < menuLinks.length; i++) {
   menuLinks[i].onclick = function() {
    if (menuLinks[i].nextElementSibling) {
     menuSub = menuLinks[i].nextElementSibling;
  
     if (menuSub.className.includes('menu_active')) {
      menuSub.classList.toggle('menu_active');
      return false;
     } else {
        menuSub = menuLinks[i].nextElementSibling;
  
        menuSub.classList.toggle('menu_active');
        return false;
     }
    }
   }
  }
 }

homeMenu();


