// Typing effect for hero title
function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.innerHTML = '';
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

// Scroll-triggered animations
function revealOnScroll() {
  const sections = document.querySelectorAll('.section');
  const scrollTop = window.pageYOffset;

  sections.forEach(section => {
    const offset = section.offsetTop - window.innerHeight + 100;
    if (scrollTop > offset) {
      section.classList.add('visible');
    }
  });
}

// Parallax effect for hero
function parallax() {
  const hero = document.querySelector('.hero');
  const scrollTop = window.pageYOffset;
  hero.style.transform = `translateY(${scrollTop * 0.5}px)`;
}

// Smooth scrolling for navigation
function smoothScroll(target) {
  const element = document.querySelector(target);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

// Form submission with enhanced feedback
function thanks() {
  const button = document.querySelector('#contactForm button');
  const originalText = button.textContent;
  button.textContent = 'پیغام بھیج دیا گیا! ✅';
  button.style.background = '#de1e14';
  setTimeout(() => {
    button.textContent = originalText;
    button.style.background = '';
  }, 3000);
  alert("خُدامِ خصوصی افراد کی سپورٹ کرنے کا شکریہ 💚\nبراہِ کرم ہم سے فون پر رابطہ کریں۔");
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Typing effect
  const heroTitle = document.querySelector('.hero h1');
  if (heroTitle) {
    typeWriter(heroTitle, heroTitle.textContent, 150);
  }

  // Scroll animations
  window.addEventListener('scroll', revealOnScroll);
  window.addEventListener('scroll', parallax);

  // Smooth scrolling for hero buttons
  const heroButtons = document.querySelectorAll('.hero-buttons a');
  heroButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      smoothScroll(this.getAttribute('href'));
    });
  });

  // Form submission
  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    thanks();
  });

  // Initial check for visible sections
  revealOnScroll();
});
