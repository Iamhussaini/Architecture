const navLinks = document.querySelectorAll('#navList li a');

navLinks.forEach(link => {
  link.addEventListener('click', function () {
    // Remove active from all
    navLinks.forEach(l => l.classList.remove('active'));
    // Add active to clicked one
    this.classList.add('active');
  });
});