// Navigation toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when clicking on a nav link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Active link on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(`.nav-link[href*="${sectionId}"]`).classList.add('active');
        } else {
            document.querySelector(`.nav-link[href*="${sectionId}"]`).classList.remove('active');
        }
    });
});

// Sticky Header
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.padding = '10px 0';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.padding = '15px 0';
        navbar.style.boxShadow = 'none';
    }
});

// Project filtering 
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
        
        const filterValue = button.getAttribute('data-filter');
        
        projectCards.forEach(card => {
            if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Handle contact form submission
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Basic form validation
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        if (!name || !email || !message) {
            alert('Please fill in all required fields.');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        
        // Here you would typically send the form data to a server
        // For demonstration, we'll just show an alert
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
}

// Add scroll reveal animations (optional - requires ScrollReveal library)
// Uncomment and add the ScrollReveal library if you want to use this

/* 
if (typeof ScrollReveal === 'function') {
    const sr = ScrollReveal({
        origin: 'bottom',
        distance: '60px',
        duration: 2000,
        delay: 200
    });
    
    sr.reveal('.hero-content', {});
    sr.reveal('.about-image', { delay: 300 });
    sr.reveal('.about-text', { delay: 400 });
    sr.reveal('.project-card', { interval: 200 });
    sr.reveal('.skill-category', { interval: 200 });
    sr.reveal('.timeline-item', { interval: 200 });
    sr.reveal('.contact-info, .contact-form', { interval: 200 });
}
*/

// 1. Project Data Array
const projects = [
  {
    title: "Zendawa",
    description: "Enabling neighbourhood pharmacies to sell online and offer e-consultation",
    image: "images/zendawa-projects-feature.png",
    category: "web",
    tags: ["Health", "Pharmacies", "Telemedicine", "TB (AI) Cough Predictor"],
    links: [
      { url: "https://zendawa.africa", label: "Live Demo", icon: "fas fa-external-link-alt" },
      { url: "https://web.zendawa.africa", label: "Website", icon: "fas fa-globe" }
    ]
  },
  {
    title: "Super Agent Management Information System",
    description: "Empowering Super Agents with cutting-edge Software as a Service (SaaS) solution for seamless management of airtime and line activations.",
    image: "images/samis-projects-feature.png",
    category: "web",
    tags: ["Agents", "Digital Accounting", "Data Entry", "Real-time reporting"],
    links: [
      { url: "https://samisdemo.touchitlimited.com/", label: "Live Demo", icon: "fas fa-external-link-alt" }
    ]
  },
  {
    title: "Shulemall",
    description: "Empowering student centric Small to Medium Sized Businesses in Africa",
    image: "images/shulemall-projects-feature.png",
    category: "mobile",
    tags: ["Students", "eCommerce", "Marketplace"],
    links: [
      { url: "https://shulemall.com", label: "Website", icon: "fas fa-globe" }
    ]
  },
  {
    title: "Agrient",
    description: "A platform for agricultural innovation and smart farming solutions.",
    image: "images/agrient-projects-feature.png",
    category: "website",
    tags: ["Agriculture", "Innovation", "Smart Farming"],
    links: [
      { url: "https://agrient.or.ke", label: "Website", icon: "fas fa-globe" }
    ]
  },
  {
    title: "Kevs",
    description: "An electronic voting system for use in student elections at Kabarak University and any other universities to aid in reducing time consumed in counting the ballot papers and eradication of spoilt votes.",
    image: "images/kevs-projects-feature.png",
    category: "web",
    tags: ["Offline", "e-Voting", "Digital"],
    links: [
      // { url: "#", label: "Website", icon: "fas fa-globe" }
    ]
  },
  {
    title: "Mlugha",
    description: "Language learning and translation platform.",
    image: "images/mlugha-projects-feature.png",
    category: "web",
    tags: ["Language", "Learning", "Translation", "Local Dialects"],
    links: [
      { url: "https://play.google.com/store/apps/developer?id=NorthFront+Technologies", label: "Play Store", icon: "fas fa-mobile-button" }
    ]
  },
  {
    title: "Pikit",
    description: "A mobile app for on-demand delivery and logistics.",
    image: "images/pikit-projects-feature.png",
    category: "mobile",
    tags: ["Delivery", "Logistics", "Mobile App"],
    links: [
      { url: "https://play.google.com/store/apps/details?id=ke.co.mylab.pikit", label: "Website", icon: "fas fa-mobile-button" }
    ]
  },
  {
    title: "Pundamilias",
    description: "A locally hosted hotel/restaurant point of sale solution.",
    image: "images/pundamilias-projects-feature.png",
    category: "web",
    tags: ["Wildlife", "Conservation", "Research"],
    links: [
      // { url: "#", label: "Website", icon: "fas fa-globe" }
    ]
  },
  {
    title: "Toitoi",
    description: "Welcome to the home of the most, Clean and yet Affordable Mobile Toilets.",
    image: "images/toitoi-projects-feature.png",
    category: "website",
    tags: ["Portable Loos", "Website", "Wordpress"],
    links: [
      { url: "https://toitoi.co.ke", label: "Website", icon: "fas fa-mobile-button" }
    ]
  }
];

// 2. Render Projects Function
function renderProjects(filter = "all", limit = null) {
  const grid = document.querySelector('.projects-grid');
  if (!grid) return;
  grid.innerHTML = ""; // Clear previous

  const filteredProjects = projects.filter(project => filter === "all" || project.category === filter);
  const limitedProjects = limit ? filteredProjects.slice(0, limit) : filteredProjects;

  limitedProjects.forEach(project => {
    const tags = project.tags.map(tag => `<span>${tag}</span>`).join('');
    const links = project.links.map(link =>
      `<a href="${link.url}" target="_blank" class="project-link"><i class="${link.icon}"></i> ${link.label}</a>`
    ).join('');
    grid.innerHTML += `
      <div class="project-card" data-category="${project.category}">
        <div class="project-image">
          <img src="${project.image}" alt="${project.title}">
        </div>
        <div class="project-info">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <div class="project-tags">${tags}</div>
          <div class="project-links">${links}</div>
        </div>
      </div>
    `;
  });
}

// 3. Initial Render and Filter Buttons
document.addEventListener('DOMContentLoaded', () => {
  // Check if we're on the index page or projects page
  const isProjectsPage = window.location.pathname.includes('projects.html');
  
  // Render with limit of 3 on index page, no limit on projects page
  renderProjects('all', isProjectsPage ? null : 3);

  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      renderProjects(this.dataset.filter, isProjectsPage ? null : 3);
    });
  });
});
