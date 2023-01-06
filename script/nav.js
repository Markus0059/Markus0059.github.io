function toggleMenu () {
  const navbar = document.querySelector('.navi');
  const burger = document.querySelector('.burger');
  burger.addEventListener('click', () => {
    navbar.classList.toggle('show-nav');

  })

}

function toggleMenu2() {
  const navbar = document.querySelector('.navi');
  const link = document.querySelector('.linker');
  const link2 = document.querySelector('.linker2');
  const link3 = document.querySelector('.linker3');
  link.addEventListener('click', () => {
    navbar.classList.toggle('show-nav');
  });
  link2.addEventListener('click', () => {
    navbar.classList.toggle('show-nav');
  });
  link3.addEventListener('click', () => {
    navbar.classList.toggle('show-nav');
  });

}
toggleMenu();
toggleMenu2();
