// ============================================================================
// DR DANIEL SCHMUCKLER - CONSULTANT ANAESTHETIST
// CONSOLIDATED JAVASCRIPT CODE
// ============================================================================

// Current active page
let currentPage = 'home';

// ============================================================================
// PAGE NAVIGATION FUNCTIONS
// ============================================================================

/**
 * Shows the specified page and hides all others
 * @param {string} pageId - The ID of the page to show
 */
function showPage(pageId) {
  // Hide all pages
  document.querySelectorAll('.page-section').forEach(page => page.classList.remove('active'));
  
  // Show selected page
  document.getElementById(pageId + '-page').classList.add('active');

  // Update navigation active states (desktop + mobile)
  updateNavigation(pageId);

  // Close mobile menu
  const mm = document.getElementById('mobile-menu');
  if (mm) mm.classList.remove('show');

  // Scroll to top
  window.scrollTo(0, 0);
  currentPage = pageId;
}

/**
 * Updates the navigation to show which page is currently active
 * @param {string} activePageId - The ID of the currently active page
 */
function updateNavigation(activePageId) {
  // Remove active classes & aria-current from all navigation elements
  document.querySelectorAll('.nav-link, .nav-link-mobile, [data-nav]').forEach(link => {
    link.classList.remove('text-blue-600', 'border-b-2', 'border-blue-600', 'bg-blue-50');
    link.removeAttribute('aria-current');
  });

  // Add active classes to all elements that navigate to this page
  document.querySelectorAll(`[onclick="showPage('${activePageId}')"]`).forEach(link => {
    if (link.classList.contains('nav-link')) {
      link.classList.add('text-blue-600', 'border-b-2', 'border-blue-600');
      link.setAttribute('aria-current', 'page');
    }
    if (link.classList.contains('nav-link-mobile')) {
      link.classList.add('text-blue-600', 'bg-blue-50');
      link.setAttribute('aria-current', 'page');
    }
  });
}

// ============================================================================
// MOBILE MENU FUNCTIONS
// ============================================================================

/**
 * Toggles the mobile menu visibility
 */
function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  menu.classList.toggle('show');
}

// ============================================================================
// FAQ FUNCTIONS
// ============================================================================

/**
 * Toggles the visibility of FAQ answers
 * @param {number} n - The FAQ number to toggle
 */
function toggleFAQ(n) {
  const answer = document.getElementById('faq-answer-' + n);
  const icon = document.getElementById('faq-icon-' + n);
  
  answer.classList.toggle('show');
  
  // Update the icon to show plus or minus
  icon.innerHTML = answer.classList.contains('show')
    ? '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6"></path>'
    : '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>';
}

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Prevents default behavior for hash links
 */
function preventHashLinks() {
  document.querySelectorAll('a[href="#"]').forEach(link => {
    link.addEventListener('click', e => e.preventDefault());
  });
}

/**
 * Initializes the page with default settings
 */
function initializePage() {
  // Mark home as current initially
  updateNavigation('home');
  
  // Prevent default for hash links
  preventHashLinks();
}

// ============================================================================
// EVENT LISTENERS
// ============================================================================

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  initializePage();
});

// ============================================================================
// EXPORT FOR MODULE USE (if needed)
// ============================================================================

// Uncomment the following lines if you want to use this as a module
/*
export {
  showPage,
  updateNavigation,
  toggleMobileMenu,
  toggleFAQ,
  initializePage
};
*/

// ============================================================================
// USAGE INSTRUCTIONS
// ============================================================================

/*
TO USE THIS FILE:

1. Include it in your HTML file:
   <script src="consolidated-code.js"></script>

2. Make sure your HTML has the required elements:
   - Elements with class "page-section" for each page
   - Elements with onclick="showPage('pageName')" for navigation
   - Elements with class "nav-link" and "nav-link-mobile" for styling
   - Elements with id "mobile-menu" for mobile navigation
   - Elements with class "faq-answer" and onclick="toggleFAQ(n)" for FAQs

3. The file will automatically initialize when the DOM loads

4. Available functions:
   - showPage(pageId) - Navigate to a specific page
   - toggleMobileMenu() - Toggle mobile menu visibility
   - toggleFAQ(n) - Toggle FAQ answer visibility

5. CSS classes that should be defined:
   - .page-section { display: none; }
   - .page-section.active { display: block; }
   - .mobile-menu { display: none; }
   - .mobile-menu.show { display: block; }
   - .faq-answer { display: none; }
   - .faq-answer.show { display: block; }
*/