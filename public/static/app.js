// FukusITo Modern Website JavaScript
// Enhanced with accessibility and modern interactions

document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 FukusITo website loaded!');
    
    // Initialize all components
    initializeNavigation();
    initializeSmoothScrolling();
    initializeIntersectionObserver();
    initializeAnimations();
    initializeAccessibility();
    initializeLogoBackgroundRemoval();
    
    // Log performance metrics
    logPerformanceMetrics();
});

// ===== Navigation ===== //
function initializeNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Update ARIA attributes
            const isExpanded = navMenu.classList.contains('active');
            navToggle.setAttribute('aria-expanded', isExpanded);
        });
        
        // Close menu when clicking on nav links
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }
    
    // Header scroll effect
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add/remove scrolled class for styling
        if (scrollTop > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }, { passive: true });
}

// ===== Smooth Scrolling ===== //
function initializeSmoothScrolling() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===== Intersection Observer for Animations ===== //
function initializeIntersectionObserver() {
    // Check if intersection observer is supported
    if (!('IntersectionObserver' in window)) {
        return;
    }
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements that should animate in
    const animateElements = document.querySelectorAll(
        '.mission-card, .feature-item, .team-card, .timeline-item, .hero-card, .section-header'
    );
    
    animateElements.forEach(el => {
        el.classList.add('animate-element');
        observer.observe(el);
    });
}

// ===== Animations ===== //
function initializeAnimations() {
    // Add CSS for animations
    const style = document.createElement('style');
    style.textContent = `
        .animate-element {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        
        .animate-element.animate-in {
            opacity: 1;
            transform: translateY(0);
        }
        
        @media (prefers-reduced-motion: reduce) {
            .animate-element {
                opacity: 1;
                transform: none;
                transition: none;
            }
        }
    `;
    document.head.appendChild(style);
}

// ===== Accessibility Enhancements ===== //
function initializeAccessibility() {
    // Enhanced focus management
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const navMenu = document.getElementById('nav-menu');
            const navToggle = document.getElementById('nav-toggle');
            if (navMenu && navMenu.classList.contains('active')) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
                navToggle.focus();
            }
        }
    });
}

// ===== Performance Monitoring ===== //
function logPerformanceMetrics() {
    if ('performance' in window) {
        window.addEventListener('load', function() {
            console.log('📊 Page loaded in:', performance.now(), 'ms');
        });
    }
}

// API Health Check
async function checkAPIHealth() {
    try {
        const response = await fetch('/api/health');
        const data = await response.json();
        console.log('✅ API Health:', data);
    } catch (error) {
        console.error('❌ API Health Check Failed:', error);
    }
}

checkAPIHealth();

// Logo background removal
function initializeLogoBackgroundRemoval() {
    const logos = document.querySelectorAll('.brand-logo, .footer-logo');
    
    logos.forEach(logo => {
        // 画像が読み込まれた後に処理
        logo.addEventListener('load', function() {
            // 黒い背景を除去するための処理
            this.style.filter = 'contrast(1.2) brightness(1.1)';
            
            // ダークモードの場合は異なる処理
            if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                this.style.filter = 'brightness(1.5) contrast(1.3) invert(0.1)';
                this.style.mixBlendMode = 'screen';
            } else {
                this.style.mixBlendMode = 'multiply';
            }
        });
        
        // 既に読み込まれている場合は即座に処理
        if (logo.complete && logo.naturalHeight !== 0) {
            logo.dispatchEvent(new Event('load'));
        }
    });
    
    // ダークモードの切り替えを監視
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
        logos.forEach(logo => {
            if (e.matches) {
                // ダークモードに切り替わった
                logo.style.filter = 'brightness(1.5) contrast(1.3) invert(0.1)';
                logo.style.mixBlendMode = 'screen';
            } else {
                // ライトモードに切り替わった
                logo.style.filter = 'contrast(1.2) brightness(1.1)';
                logo.style.mixBlendMode = 'multiply';
            }
        });
    });
}

// Initialize logo background removal
initializeLogoBackgroundRemoval();