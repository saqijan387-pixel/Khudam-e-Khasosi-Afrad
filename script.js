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

// Parallax effect for hero removed to prevent overlay

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

// Language translations
const translations = {
  en: {
    "hero-title": "Servants of Special People",
    "hero-subtitle": "A welfare organization for the welfare and well-being of special people",
    "learn-more": "Learn More",
    "contact-us": "Contact Us",
    "about-title": "About Us",
    "about-description": "Khudam-e-Khasoos Afraad is a non-profit organization that provides education, skills, and independence to special people in Hangu.",
    "registration-number": "Registration Number: 5361",
    "services-title": "Our Services",
    "service-1": "Registration of Special People",
    "service-2": "Educational Facilities",
    "service-3": "Skill Development Programs",
    "service-4": "Social Awareness Campaigns",
    "footer-text": "© 2026 Servants of Special People | All rights reserved"
  },
  ur: {
    "hero-title": "خُدامِ خصوصی افراد",
    "hero-subtitle": "خصوصی افراد کی فلاح و بہبود کے لیے ایک فلاحی تنظیم",
    "learn-more": "مزید جانیں",
    "contact-us": "ہم سے رابطہ کریں",
    "about-title": "ہمارے بارے میں",
    "about-description": "خُدامِ خصوصی افراد ایک غیر منافع بخش تنظیم ہے جو ہنگو میں خصوصی افراد کو تعلیم، ہنر اور خود مختاری فراہم کرتی ہے۔",
    "registration-number": "رجسٹریشن نمبر: 5361",
    "services-title": "ہماری خدمات",
    "service-1": "خصوصی افراد کی رجسٹریشن",
    "service-2": "تعلیمی سہولیات",
    "service-3": "ہنر مندی پروگرام",
    "service-4": "سماجی آگاہی مہمات",
    "footer-text": "© 2026 خُدامِ خصوصی افراد | تمام حقوق محفوظ ہیں"
  }
};

// Language switching function
function switchLanguage(lang) {
  const elements = document.querySelectorAll('[data-lang]');
  elements.forEach(element => {
    const key = element.getAttribute('data-lang');
    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });

  // Update HTML lang and dir attributes
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ur' ? 'rtl' : 'ltr';

  // Update typing effect for hero title
  const heroTitle = document.querySelector('.hero h1');
  if (heroTitle) {
    const titleText = translations[lang]['hero-title'];
    typeWriter(heroTitle, titleText, 150);
  }
}

// Toggle language function for the switch
function toggleLanguage() {
  const checkbox = document.getElementById('language-toggle');
  const lang = checkbox.checked ? 'en' : 'ur';
  switchLanguage(lang);
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
