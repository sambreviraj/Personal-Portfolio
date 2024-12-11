document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Rotating text
    const rotatingText = document.getElementById('rotating-text');
    const texts = [
        "Know a bit of Korean thanks to my interest in K-pop and K-dramas",
        "My phone gallery is filled with pictures of pretty things",
        "I love playing FIFA and watching Manchester United",
        "I clean my room three times a days",
        "I have a high tolerance for spicy food"
    ];
    let currentIndex = 0;

    function changeText() {
        rotatingText.style.opacity = 0;
        setTimeout(() => {
            rotatingText.textContent = texts[currentIndex];
            rotatingText.style.opacity = 1;
            currentIndex = (currentIndex + 1) % texts.length;
        }, 300);
    }

    setInterval(changeText, 3000);

    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});

// New interaction 1: Scroll Progress Bar
const createScrollProgress = () => {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        width: 0;
        background: #FFA500;
        z-index: 1001;
        transition: width 0.2s ease;
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        progressBar.style.width = `${scrollPercent}%`;
    });
};

// New interaction 2: Project Card Hover Effects
const addProjectInteractions = () => {
    const projects = document.querySelectorAll('.project-item');
    
    projects.forEach(project => {
        project.addEventListener('mouseenter', () => {
            project.style.transform = 'translateY(-10px)';
            project.style.transition = 'transform 0.3s ease';
        });
        
        project.addEventListener('mouseleave', () => {
            project.style.transform = 'translateY(0)';
        });
        
        // Double tap to zoom on mobile
        let lastTap = 0;
        project.addEventListener('touchend', (e) => {
            const currentTime = new Date().getTime();
            const tapLength = currentTime - lastTap;
            
            if (tapLength < 500 && tapLength > 0) {
                project.style.transform = 'scale(1.05)';
                setTimeout(() => {
                    project.style.transform = 'scale(1)';
                }, 300);
                e.preventDefault();
            }
            lastTap = currentTime;
        });
    });
};

// New interaction 3: Mobile Device Orientation Effect for Skills Section
const addSkillsOrientationEffect = () => {
    if (window.DeviceOrientationEvent) {
        const skillsSection = document.querySelector('.skills');
        
        window.addEventListener('deviceorientation', (e) => {
            if (skillsSection) {
                const tilt = Math.min(Math.max(e.gamma, -15), 15); 
                const shift = (tilt + 15) * (100 / 30); 
                
                skillsSection.style.background = `
                    linear-gradient(
                        ${90 + tilt}deg, 
                        #f9f9f9 ${shift}%, 
                        #f0f0f0 ${shift + 50}%
                    )
                `;
            }
        });
    }
};

// Initialize all interactions when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    createScrollProgress();
    addProjectInteractions();
    addSkillsOrientationEffect();
});