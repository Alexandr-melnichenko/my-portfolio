const menu = document.querySelector('.mobile-menu-header');
const menuItems = document.querySelectorAll('.menuItem-header');
const hamburger = document.querySelector('.btn-menu');
const closeIcon = document.querySelector('.close-btn-icon');
const menuIcon = document.querySelector('.btn-menu-icon');

function toggleMenu() {
  if (menu.classList.contains('showMenu')) {
    menu.classList.remove('showMenu');
    closeIcon.style.display = 'none';
    menuIcon.style.display = 'block';
    document.body.classList.remove('modal-open');
  } else {
    menu.classList.add('showMenu');
    closeIcon.style.display = 'flex';
    // closeIcon.style.position = 'fixed';
    closeIcon.style.zIndex = '1000';
    closeIcon.style.width = '25px';
    closeIcon.style.height = '25px';
    menuIcon.style.display = 'none';
    document.body.classList.add('modal-open');
  }
}

hamburger.addEventListener('click', toggleMenu);

menuItems.forEach(function (menuItem) {
  menuItem.addEventListener('click', toggleMenu);
});
