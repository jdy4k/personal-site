document.addEventListener('DOMContentLoaded', function() {
  const chevron = document.getElementById('scroll-chevron');
  const resumeSection = document.getElementById('resume-section');
  
  if (!chevron || !resumeSection) return;
  
  // Function to handle scroll behavior
  function handleScroll() {
    const scrollY = window.scrollY || window.pageYOffset;
    const resumeSectionTop = resumeSection.offsetTop;
    const windowHeight = window.innerHeight;
    
    // Hide chevron when scrolled past the author section or when resume section is visible
    if (scrollY > windowHeight * 0.5 || scrollY > resumeSectionTop - windowHeight) {
      chevron.classList.add('hidden');
    } else {
      chevron.classList.remove('hidden');
    }
  }
  
  // Scroll to resume section when chevron is clicked
  chevron.addEventListener('click', function() {
    resumeSection.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  });
  
  // Listen for scroll events
  window.addEventListener('scroll', handleScroll);
  
  // Initial check
  handleScroll();
});

