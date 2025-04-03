// Create background elements
function createBackgroundElements() {
    // Create cyber grid
    const background = document.getElementById('cyber-background');
    
    // Create floating tech elements
    for (let i = 0; i < 20; i++) {
        const element = document.createElement('div');
        element.classList.add('floating-element');
        
        // Randomly choose element type
        const type = Math.floor(Math.random() * 4);
        
        if (type === 0) {
            // Gold circle
            element.style.width = `${Math.random() * 30 + 10}px`;
            element.style.height = element.style.width;
            element.style.borderRadius = '50%';
            element.style.background = 'radial-gradient(circle, rgba(255,215,0,0.8), rgba(255,215,0,0.1))';
        } else if (type === 1) {
            // Silver square
            element.style.width = `${Math.random() * 20 + 5}px`;
            element.style.height = element.style.width;
            element.style.background = 'linear-gradient(45deg, rgba(192,192,192,0.8), rgba(192,192,192,0.1))';
            element.style.transform = `rotate(${Math.random() * 45}deg)`;
        } else if (type === 2) {
            // Code symbol
            element.innerHTML = '{&nbsp;}';
            element.style.color = 'rgba(255,215,0,0.5)';
            element.style.fontSize = `${Math.random() * 20 + 10}px`;
            element.style.fontFamily = 'monospace';
        } else {
            // Tech icon
            const icons = ['⚡', '💻', '🚀', '🔮', '⭐', '🔌', '🔋', '📱'];
            element.innerHTML = icons[Math.floor(Math.random() * icons.length)];
            element.style.fontSize = `${Math.random() * 20 + 10}px`;
            element.style.opacity = '0.5';
        }
        
        element.style.position = 'fixed';
        element.style.left = `${Math.random() * 100}vw`;
        element.style.top = `${Math.random() * 100}vh`;
        element.style.zIndex = '-1';
        element.style.animationDuration = `${Math.random() * 20 + 10}s`;
        element.style.animationDelay = `${Math.random() * 5}s`;
        
        document.body.appendChild(element);
    }
}

// Setup particle background
function setupParticleBackground() {
    particlesJS('particle-background', {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: ["#ffd700", "#c0c0c0", "#ff00ff"] },
            shape: { type: "circle" },
            opacity: { value: 0.5, random: true },
            size: { value: 3, random: true },
            line_linked: { 
                enable: true, 
                distance: 150, 
                color: "#ffd700", 
                opacity: 0.4, 
                width: 1,
                shadow: { enable: true, color: "#ff00ff", blur: 5 }
            },
            move: { 
                enable: true, 
                speed: 2, 
                direction: "none", 
                random: true, 
                out_mode: "out",
                attract: { enable: true, rotateX: 600, rotateY: 1200 }
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: { 
                onhover: { enable: true, mode: "repulse" }, 
                onclick: { enable: true, mode: "push" } 
            },
            modes: { 
                repulse: { distance: 100, duration: 0.4 }, 
                push: { particles_nb: 4 },
                bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 }
            }
        },
        retina_detect: true
    });
}

// Handle welcome overlay and animations
document.addEventListener('DOMContentLoaded', () => {
    createBackgroundElements();
    
    if (typeof particlesJS !== 'undefined') {
        setupParticleBackground();
    }
    
    const letsGoBtn = document.getElementById('lets-go-btn');
    const welcomeOverlay = document.getElementById('welcome-overlay');
    
    if (letsGoBtn && welcomeOverlay) {
        letsGoBtn.addEventListener('click', () => {
            welcomeOverlay.style.opacity = '0';
            setTimeout(() => {
                welcomeOverlay.style.display = 'none';
            }, 1000);
        });
    }
    
    // Add smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add parallax effect
    document.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        
        const deltaX = (clientX - centerX) / centerX;
        const deltaY = (clientY - centerY) / centerY;
        
        document.querySelectorAll('.interactive-box').forEach(box => {
            box.style.transform = `perspective(1000px) rotateY(${deltaX * 5}deg) rotateX(${-deltaY * 5}deg) translateZ(10px)`;
        });
    });
    
    // Add interactive effects to projects
    document.querySelectorAll('.project').forEach(project => {
        project.addEventListener('mouseenter', () => {
            project.style.transform = 'translateY(-15px) scale(1.03)';
            project.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.3), 0 0 15px rgba(255, 215, 0, 0.3)';
        });
        
        project.addEventListener('mouseleave', () => {
            project.style.transform = '';
            project.style.boxShadow = '';
        });
    });
});
