// Project links configuration
const projectLinks = {
    'betswave': 'https://www.betswave.io',
    'trakor': '#', // Replace with actual link
    'gtd-healup-life': 'https://gtd-healup-life.onrender.com/',
    'railway-dropgate': 'https://kgtsolutions-my.sharepoint.com/:p:/g/personal/sanyam_gaba_kgt_solutions/EXT58S9opB1DviRqDrrpq8IBEycGtlWNbExkjT3AtTzqug?e=OY72Fx', // Replace with actual link
    'wagon-detection': '#', // Replace with actual link
    'iron-ore-monitoring': 'https://kgtsolutions-my.sharepoint.com/:p:/g/personal/sanyam_gaba_kgt_solutions/EUc8EZTGKERNtDT-PhjP2JsBOa1xxKkNtaE9BgiGaysRHQ?e=EQemKJ', // Replace with actual link
    'crane-monitoring': 'https://kgtsolutions-my.sharepoint.com/:p:/g/personal/sanyam_gaba_kgt_solutions/EUTCT84Fq3VKkyOXsEnALhIBIzBFYST-PvHBzZbTpVxnQw?e=9bPskO', // Replace with actual link
    'ai-trading-bot': 'https://kgtsolutions-my.sharepoint.com/:b:/g/personal/sanyam_gaba_kgt_solutions/ETyz112QedJEnmZoFjwozO8Bi7PUbk6OQIBPm68n-AdkyA?e=nXoftJ', // Replace with actual link
    'fithire': 'https://kgtsolutions-my.sharepoint.com/:v:/g/personal/sanyam_gaba_kgt_solutions/EWX6ePXcBB1IrS2l-VqjrQ8B1J1bpDXAIDz2OQjbcZvzqw?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=wjkEsh`', // Replace with actual link
    'nerds-website': 'https://nerdsllc.io/projects/', // Replace with actual link
    'ai-ad-detection': 'https://kgtsolutions-my.sharepoint.com/:v:/g/personal/sanyam_gaba_kgt_solutions/IQBqltJnmTFcSbvfMEraAfmiAf3q-5oUxT204dRwJTVOLwI?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=4gjuE5'
};

// Add click functionality to project cards
document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            const projectId = this.getAttribute('data-project');
            const link = projectLinks[projectId];
            
            if (link && link !== '#') {
                window.open(link, '_blank');
            } else {
                // Add visual feedback for cards without links
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 150);
                
                // Show notification
                showNotification('Link coming soon!');
            }
        });
        
        // Add keyboard accessibility
        card.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
        
        // Make cards focusable
        card.setAttribute('tabindex', '0');
    });
});

// Notification system
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, rgba(79, 195, 247, 0.9), rgba(33, 150, 243, 0.9));
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        box-shadow: 0 5px 20px rgba(79, 195, 247, 0.3);
        z-index: 1000;
        font-family: 'Exo 2', sans-serif;
        font-weight: 600;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Add CSS animations for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);

// Smooth scrolling for any anchor links
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

// Add loading animation
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});
