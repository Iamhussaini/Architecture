const navLinks = document.querySelectorAll('#navList li a');
const navList = document.getElementById('navList');

navLinks.forEach(link => {
  link.addEventListener('click', function () {
    navLinks.forEach(l => l.classList.remove('active'));
    this.classList.add('active');
    navList.classList.remove('show'); // hide menu after click
  });
});


const wrapper = document.getElementById('sliderWrapper');
const track = document.getElementById('sliderTrack');

let scrollAmount = 310; // image width + gap

wrapper.addEventListener('click', (e) => {
  const clickX = e.clientX;
  const middle = window.innerWidth / 2;

  if (clickX < middle) {
    // click left
    wrapper.scrollLeft -= scrollAmount;
    if (wrapper.scrollLeft <= 0) {
      wrapper.scrollLeft = track.scrollWidth / 2;
    }
  } else {
    // click right
    wrapper.scrollLeft += scrollAmount;
    if (wrapper.scrollLeft >= track.scrollWidth / 2) {
      wrapper.scrollLeft = 0;
    }
  }
});

// Auto-scroll (optional)
function autoScroll() {
  wrapper.scrollLeft += 1;
  if (wrapper.scrollLeft >= track.scrollWidth / 2) {
    wrapper.scrollLeft = 0;
  }
  requestAnimationFrame(autoScroll);
}
autoScroll();
