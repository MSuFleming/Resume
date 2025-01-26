const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
  
    navLinks.forEach((link, index) => {
      link.addEventListener('click', (e) => {
        burger.classList.toggle('toggle');
        nav.classList.toggle('nav-active');
        navLinks.forEach(setStyleLink)
      })
    });
  
    burger.addEventListener('click', () => {
      nav.classList.toggle('nav-active');
      navLinks.forEach(setStyleLink);
      burger.classList.toggle('toggle');
    });
  }
