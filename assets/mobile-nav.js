// Mobile Navigation Script for CyberThon
document.addEventListener('DOMContentLoaded', function() {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const closeIcon = document.getElementById('close-icon');
    
    let isMenuOpen = false;
    
    // Toggle mobile menu
    function toggleMobileMenu() {
        isMenuOpen = !isMenuOpen;
        
        if (isMenuOpen) {
            // Show menu
            mobileMenu.classList.remove('translate-x-full');
            mobileMenu.classList.add('translate-x-0');
            mobileMenuOverlay.classList.remove('opacity-0', 'pointer-events-none');
            mobileMenuOverlay.classList.add('opacity-100');
            
            // Switch icons
            hamburgerIcon.classList.add('hidden');
            closeIcon.classList.remove('hidden');
            
            // Prevent body scroll
            document.body.style.overflow = 'hidden';
        } else {
            // Hide menu
            mobileMenu.classList.remove('translate-x-0');
            mobileMenu.classList.add('translate-x-full');
            mobileMenuOverlay.classList.remove('opacity-100');
            mobileMenuOverlay.classList.add('opacity-0', 'pointer-events-none');
            
            // Switch icons
            hamburgerIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
            
            // Restore body scroll
            document.body.style.overflow = '';
        }
    }
    
    // Event listeners
    hamburgerBtn.addEventListener('click', toggleMobileMenu);
    mobileMenuOverlay.addEventListener('click', toggleMobileMenu);

    closeIcon.addEventListener('click', () => {
        toggleMobileMenu();
    });
    
    // Close menu when clicking on navigation links
    const mobileNavLinks = document.querySelectorAll('#mobile-menu a');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (isMenuOpen) {
                toggleMobileMenu();
            }
        });
    });
    
    // Close menu on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && isMenuOpen) {
            toggleMobileMenu();
        }
    });
    
    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 768 && isMenuOpen) {
            toggleMobileMenu();
        }
    });
});