
// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });
    // Animate sections on scroll
    window.addEventListener('scroll', animateSections);
    // Initialize project filter
    initProjectFilter();
    // Initialize skill progress bars
    initSkillBars();
});
// Smooth scrolling function
function smoothScroll(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
// Animate sections on scroll
function animateSections() {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight * 0.75) {
            section.classList.add('animate');
        }
    });
}
// Initialize project filter
function initProjectFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projects = document.querySelectorAll('.project');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            projects.forEach(project => {
                if (filter === 'all' || project.classList.contains(filter)) {
                    project.style.display = 'block';
                } else {
                    project.style.display = 'none';
                }
            });
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });
}
function clearForm() {
  event.preventDefault(); // Prevents the form from submitting immediately
  // Submit the form using AJAX or fetch to keep the data in Gmail
  const form = document.getElementById("contact-form");
  const formData = new FormData(form);
  fetch(form.action, {
    method: 'POST',
    body: formData,
  })
  .then(response => {
    if (response.ok) {
      form.reset(); // Reset the form fields
      alert('Form submitted successfully');
    } else {
      // Handle error response
      console.error('Form submission failed');
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });
return false; // Prevent default form submission
}
// GSAP and ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);
    // Animate sections on scroll
    gsap.utils.toArray("section").forEach((section) => {
        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: "top 80%", // Start animation when the top of the section hits 80% of the viewport height
                toggleActions: "play none none reverse", // Play on enter, reverse on leave
            },
            opacity: 0,
            y: 50, // Start 50px lower
            duration: 1, // Animation duration
            ease: "power2.out", // Easing function
        });
    });
    document.addEventListener('DOMContentLoaded', () => {
      // Animate skill bars on scroll
      gsap.registerPlugin(ScrollTrigger);
      gsap.utils.toArray('.skill-progress').forEach(skill => {
        const progress = skill.getAttribute('data-progress');
        gsap.fromTo(skill, { width: '0%' }, {
          width: `${progress}%`,
          scrollTrigger: {
            trigger: skill,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        });
      });
    });
    document.addEventListener('DOMContentLoaded', () => {
      // Fade-in animation on page load
      gsap.from('header', {
        duration: 2,
        opacity: 0,
        y: -30,
        ease: 'power3.out',
      });
      // Shrink header and add shadow on scroll
      gsap.to('header', {
        scrollTrigger: {
          trigger: 'body',
          start: 'top top',
          end: '+=300', // Adjust to control how much scroll affects the header
          scrub: true,
        },
        padding: '10px 0',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        ease: 'power1.out',
      });
    });  
    // Dark mode toggle functionality
document.getElementById('dark-mode-toggle').addEventListener('click', toggleDarkMode);
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}
// Optional: Save the user's preference in local storage
if (localStorage.getItem('dark-mode') === 'enabled') {
    document.body.classList.add('dark-mode');
}
document.getElementById('dark-mode-toggle').addEventListener('click', function() {
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('dark-mode', 'enabled');
    } else {
        localStorage.setItem('dark-mode', 'disabled');
    }
});