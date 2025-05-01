const menuBtn = document.querySelector('.menu-btn');
const navLinksWrapper = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li a');
const homeSection = document.querySelector('#hero');

function toggleMenu() {
  menuBtn.classList.toggle('active');
  navLinksWrapper.classList.toggle('active');
}

menuBtn.addEventListener('click', toggleMenu);

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (navLinksWrapper.classList.contains('active')) {
      toggleMenu();
    }
  });
});

window.addEventListener('scroll', pageScrollFunction);
window.addEventListener('load', pageScrollFunction);

function pageScrollFunction() {
  if (window.scrollY > 120) {
    homeSection.classList.add('active');
  } else {
    homeSection.classList.remove('active');
  }
}
const buttons = document.querySelectorAll('.ripple');

buttons.forEach(button => {
  button.addEventListener('click', function (e) {
    const x = e.clientX;
    const y = e.clientY;

    const buttonTop = e.target.offsetTop;
    const buttonLeft = e.target.offsetLeft;

    const xInside = x - buttonLeft;
    const yInside = y - buttonTop;

    const circle = document.createElement('span');
    circle.classList.add('circle');
    circle.style.top = yInside + 'px';
    circle.style.left = xInside + 'px';

    this.appendChild(circle);

    setTimeout(() => circle.remove(), 500);
  });
});

// If you previously added this for parallax, comment it out or delete:
/*
window.addEventListener('scroll', function () {
  const images = document.querySelectorAll('.service-image');
  images.forEach(function (img) {
    const speed = 0.4;
    const offset = window.scrollY * speed;
    img.style.backgroundPositionY = `${offset}px`;
  });
});
*/


const slides = [
  {
    title: "Registrations & Certifications",
    content: "Registered with CIDB Malaysia. Other certifications such as ISO, SPAN, MOF, etc.",
    image: "certificate.jpg"
  },
  {
    title: "Our Team",
    content: "BINAKITEK SDN BHD has a team of trained and experienced project managers, technicians, and site workers capable of handling various scales of projects efficiently and professionally.",
    image: "team.jpg"
  },
  {
    title: "Our Commitment",
    content: "We believe that quality, integrity, and safety are the core pillars of the construction industry. Therefore, BINAKITEK SDN BHD upholds these values in every aspect of work to achieve the best results for all stakeholders.",
    image: "commitment.jpg"
  }
];

let currentSlide = 0;

const slideContent = document.getElementById('slide-content');
const infoImage = document.getElementById('info-image');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function renderSlide(index) {
  const slide = slides[index];
  slideContent.innerHTML = `
    <h3>${slide.title}</h3>
    <p>${slide.content}</p>
  `;
  infoImage.style.backgroundImage = `url('${slide.image}')`;
}

prevBtn.addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  renderSlide(currentSlide);
});

nextBtn.addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % slides.length;
  renderSlide(currentSlide);
});

// Initial render
renderSlide(currentSlide);

// Auto-slide every 2 seconds
setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  renderSlide(currentSlide);
}, 4000);

