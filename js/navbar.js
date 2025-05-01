window.addEventListener('scroll', function() {
    let navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
      navbar.classList.add('navcolor');
    } else {
      navbar.classList.remove('navcolor');
    }
  });