// Initialize Lucide icons
document.addEventListener('DOMContentLoaded', function() {
    lucide.createIcons();
    
    // Mobile menu functionality
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');
    
    let isMenuOpen = false;
    
    mobileMenuBtn.addEventListener('click', function() {
        isMenuOpen = !isMenuOpen;
        
        if (isMenuOpen) {
            mobileMenu.classList.remove('hidden');
            menuIcon.classList.add('hidden');
            closeIcon.classList.remove('hidden');
        } else {
            mobileMenu.classList.add('hidden');
            menuIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
        }
    });
    
    // File upload functionality
    const fileInput = document.getElementById('outfit-upload');
    const selectedImageContainer = document.getElementById('selected-image-container');
    const selectedImage = document.getElementById('selected-image');
    
    if (fileInput) {
        fileInput.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                const url = URL.createObjectURL(file);
                selectedImage.src = url;
                selectedImageContainer.classList.remove('hidden');
            }
        });
    }
    
    // Newsletter form functionality
    const newsletterForm = document.getElementById('newsletter-form');
    const nameInput = document.getElementById('name-input');
    const emailInput = document.getElementById('email-input');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = nameInput.value.trim();
            const email = emailInput.value.trim();
            
            // Basic validation
            if (!name || !email) {
                alert('Please fill in all fields.');
                return;
            }
            
            if (!isValidEmail(email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // Success message (in a real app, this would send to a server)
            alert('Thank you for subscribing! We\'ll be in touch soon.');
            
            // Clear form
            nameInput.value = '';
            emailInput.value = '';
        });
    }
    
    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add scroll effect to navbar
    const navbar = document.querySelector('nav');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            navbar.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
    
    // Add intersection observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all sections for animations
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
    
    // Product card hover effects
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const productImage = this.querySelector('.product-image');
            const productImageHover = this.querySelector('.product-image-hover');
            
            if (productImage && productImageHover) {
                productImage.style.transform = 'scale(1.05)';
                productImageHover.style.opacity = '1';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const productImage = this.querySelector('.product-image');
            const productImageHover = this.querySelector('.product-image-hover');
            
            if (productImage && productImageHover) {
                productImage.style.transform = 'scale(1)';
                productImageHover.style.opacity = '0';
            }
        });
    });
    
    // Instagram grid hover effects
    const instagramItems = document.querySelectorAll('.instagram-grid-item');
    
    instagramItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // Button click handlers
    document.addEventListener('click', function(e) {
        // Quick Add buttons
        if (e.target.closest('button') && e.target.textContent.includes('Quick Add')) {
            e.preventDefault();
            alert('Product added to cart! (This is a demo)');
        }
        
        // Wishlist buttons
        if (e.target.closest('.wishlist-btn')) {
            e.preventDefault();
            const heartIcon = e.target.closest('.wishlist-btn').querySelector('[data-lucide="heart"]');
            if (heartIcon) {
                // Toggle wishlist state (in a real app, this would save to user's wishlist)
                alert('Added to wishlist! (This is a demo)');
            }
        }
        
        // Shop Look buttons
        if (e.target.textContent.includes('Shop Look')) {
            e.preventDefault();
            alert('Redirecting to complete look... (This is a demo)');
        }
        
        // Navigation buttons
        if (e.target.textContent.includes('View Full Collection')) {
            e.preventDefault();
            alert('Redirecting to collection page... (This is a demo)');
        }
        
        if (e.target.textContent.includes('Discover Collections')) {
            e.preventDefault();
            alert('Redirecting to collections... (This is a demo)');
        }
        
        if (e.target.textContent.includes('Custom Orders')) {
            e.preventDefault();
            alert('Redirecting to custom orders... (This is a demo)');
        }
    });
    
    // Add loading state to buttons
    function addLoadingState(button) {
        const originalText = button.textContent;
        button.textContent = 'Loading...';
        button.disabled = true;
        
        setTimeout(() => {
            button.textContent = originalText;
            button.disabled = false;
        }, 1000);
    }
    
    // Hero section parallax effect
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroSection = document.querySelector('section');
        if (heroSection) {
            const rate = scrolled * -0.5;
            heroSection.style.transform = `translateY(${rate}px)`;
        }
    });
});

// Utility functions
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Add some additional interactivity
window.addEventListener('load', function() {
    // Add staggered animation to grid items
    const gridItems = document.querySelectorAll('.stagger-children > *');
    gridItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
        item.classList.add('fade-in-up');
    });
    
    // Initialize any tooltips or additional UI components
    console.log('Tomike Couture website loaded successfully!');
});

    // Carousel functionality
    function initCarousel(carouselId, prevBtnId, nextBtnId) {
        const carousel = document.getElementById(carouselId);
        const prevBtn = document.getElementById(prevBtnId);
        const nextBtn = document.getElementById(nextBtnId);
        
        if (!carousel || !prevBtn || !nextBtn) return;
        
        let currentIndex = 0;
        const items = carousel.children;
        const totalItems = items.length;
        
        // Calculate how many items to show at once based on screen size
        function getVisibleItems() {
            const containerWidth = carousel.parentElement.offsetWidth;
            const itemWidth = items[0] ? items[0].offsetWidth : 320;
            const gap = 32; // 2rem gap
            return Math.floor((containerWidth - gap) / (itemWidth + gap));
        }
        
        function updateCarousel() {
            const visibleItems = getVisibleItems();
            const maxIndex = Math.max(0, totalItems - visibleItems);
            
            // Constrain current index
            currentIndex = Math.max(0, Math.min(currentIndex, maxIndex));
            
            // Calculate transform
            const itemWidth = items[0] ? items[0].offsetWidth : 320;
            const gap = 32;
            const translateX = -(currentIndex * (itemWidth + gap));
            
            carousel.style.transform = `translateX(${translateX}px)`;
            
            // Update button states
            prevBtn.disabled = currentIndex === 0;
            nextBtn.disabled = currentIndex >= maxIndex;
        }
        
        prevBtn.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateCarousel();
            }
        });
        
        nextBtn.addEventListener('click', () => {
            const visibleItems = getVisibleItems();
            const maxIndex = Math.max(0, totalItems - visibleItems);
            if (currentIndex < maxIndex) {
                currentIndex++;
                updateCarousel();
            }
        });
        
        // Touch/swipe support
        let startX = 0;
        let isDragging = false;
        
        carousel.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            isDragging = true;
        });
        
        carousel.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            e.preventDefault();
        });
        
        carousel.addEventListener('touchend', (e) => {
            if (!isDragging) return;
            
            const endX = e.changedTouches[0].clientX;
            const diff = startX - endX;
            
            if (Math.abs(diff) > 50) { // Minimum swipe distance
                if (diff > 0) {
                    // Swipe left - next
                    nextBtn.click();
                } else {
                    // Swipe right - prev
                    prevBtn.click();
                }
            }
            
            isDragging = false;
        });
        
        // Mouse drag support for desktop
        let mouseStartX = 0;
        let isMouseDragging = false;
        
        carousel.addEventListener('mousedown', (e) => {
            mouseStartX = e.clientX;
            isMouseDragging = true;
            carousel.style.cursor = 'grabbing';
        });
        
        document.addEventListener('mousemove', (e) => {
            if (!isMouseDragging) return;
            e.preventDefault();
        });
        
        document.addEventListener('mouseup', (e) => {
            if (!isMouseDragging) return;
            
            const endX = e.clientX;
            const diff = mouseStartX - endX;
            
            if (Math.abs(diff) > 50) {
                if (diff > 0) {
                    nextBtn.click();
                } else {
                    prevBtn.click();
                }
            }
            
            isMouseDragging = false;
            carousel.style.cursor = 'grab';
        });
        
        // Initialize
        updateCarousel();
        
        // Update on resize
        window.addEventListener('resize', updateCarousel);
    }
    
    // Initialize carousels
    initCarousel('featured-carousel', 'featured-prev', 'featured-next');
    initCarousel('community-carousel', 'community-prev', 'community-next');
    
    // Handle responsive behavior
    window.addEventListener('resize', function() {
        const mobileMenu = document.getElementById('mobile-menu');
        const menuIcon = document.getElementById('menu-icon');
        const closeIcon = document.getElementById('close-icon');
        
        // Hide mobile menu on desktop
        if (window.innerWidth >= 768) {
            mobileMenu.classList.add('hidden');
            menuIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
        }
    });