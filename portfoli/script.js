// DOM Elements
const bgVideo = document.getElementById('bg-video');
const backgroundAudio = document.getElementById('background-audio');
const playAudioBtn = document.getElementById('play-audio');
const toggleVideoBtn = document.getElementById('toggle-video');
const toggleAudioBtn = document.getElementById('toggle-audio');
const statNumber = document.getElementById('stat-number');

// State variables
let isAudioPlaying = false;
let isVideoPlaying = true;
let currentLikes = 278;

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Auto-play background video (with user interaction fallback)
    initializeVideo();
    
    // Setup event listeners
    setupEventListeners();
    
    // Start animations
    animateStatsCounter();
    
    // Auto-increment likes periodically
    setInterval(incrementLikes, 30000); // Every 30 seconds
});

// Initialize video with fallback for autoplay restrictions
function initializeVideo() {
    const playPromise = bgVideo.play();
    
    if (playPromise !== undefined) {
        playPromise
            .then(() => {
                console.log('Background video started successfully');
            })
            .catch(error => {
                console.log('Auto-play was prevented, user interaction required');
                // Show a click-to-play overlay if needed
                showClickToPlayOverlay();
            });
    }
}

// Show overlay for browsers that prevent autoplay
function showClickToPlayOverlay() {
    const overlay = document.createElement('div');
    overlay.className = 'click-to-play-overlay';
    overlay.innerHTML = `
        <div class="play-prompt">
            <i class="fas fa-play"></i>
            <p>Click to start experience</p>
        </div>
    `;
    
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        cursor: pointer;
    `;
    
    overlay.querySelector('.play-prompt').style.cssText = `
        text-align: center;
        color: white;
        font-size: 1.5rem;
    `;
    
    overlay.addEventListener('click', () => {
        bgVideo.play();
        document.body.removeChild(overlay);
    });
    
    document.body.appendChild(overlay);
}

// Setup all event listeners
function setupEventListeners() {
    // Audio control
    playAudioBtn.addEventListener('click', toggleAudio);
    
    // Video control
    toggleVideoBtn.addEventListener('click', toggleVideo);
    
    // Background audio control
    toggleAudioBtn.addEventListener('click', toggleBackgroundAudio);
    
    // Control buttons hover effects
    const controlBtns = document.querySelectorAll('.control-btn');
    controlBtns.forEach(btn => {
        btn.addEventListener('mouseenter', playHoverSound);
        btn.addEventListener('click', playClickSound);
    });
    
    // Social icons
    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach(icon => {
        icon.addEventListener('click', handleSocialClick);
    });
    
    // Profile image click
    const profileImg = document.getElementById('profile-img');
    profileImg.addEventListener('click', changeProfileImage);
    
    // Keyboard shortcuts
    document.addEventListener('keydown', handleKeyboardShortcuts);
    
    // Stats counter click
    statNumber.addEventListener('click', incrementLikes);
}

// Toggle background audio
function toggleAudio() {
    if (isAudioPlaying) {
        backgroundAudio.pause();
        playAudioBtn.innerHTML = '<i class="fab fa-spotify"></i>';
        playAudioBtn.style.background = '#1DB954';
        isAudioPlaying = false;
    } else {
        const playPromise = backgroundAudio.play();
        if (playPromise !== undefined) {
            playPromise
                .then(() => {
                    playAudioBtn.innerHTML = '<i class="fas fa-pause"></i>';
                    playAudioBtn.style.background = '#ff4444';
                    isAudioPlaying = true;
                })
                .catch(error => {
                    console.log('Audio play failed:', error);
                    showNotification('Please allow audio autoplay in your browser');
                });
        }
    }
}

// Toggle background video
function toggleVideo() {
    if (isVideoPlaying) {
        bgVideo.pause();
        bgVideo.style.opacity = '0.3';
        toggleVideoBtn.innerHTML = '<i class="fas fa-video-slash"></i>';
        isVideoPlaying = false;
    } else {
        bgVideo.play();
        bgVideo.style.opacity = '1';
        toggleVideoBtn.innerHTML = '<i class="fas fa-video"></i>';
        isVideoPlaying = true;
    }
}

// Toggle background audio from controls
function toggleBackgroundAudio() {
    toggleAudio();
}

// Handle social icon clicks
function handleSocialClick(event) {
    const icon = event.currentTarget;
    
    if (icon.classList.contains('discord')) {
        showNotification('Opening Discord...');
        // Opening CN ONE's Discord profile
        window.open('http://discord.com/channels/@1368057095383154708', '_blank');
    } else if (icon.classList.contains('spotify')) {
        showNotification('Opening Spotify...');
        // You can add actual Spotify integration here
        window.open('https://spotify.com', '_blank');
    } else if (icon.classList.contains('instagram')) {
        showNotification('Opening Instagram...');
        // Opening CN ONE's Instagram profile
        window.open('https://www.instagram.com/aintone_1/', '_blank');
    }
    
    // Animation effect
    icon.style.transform = 'scale(1.2)';
    setTimeout(() => {
        icon.style.transform = 'scale(1)';
    }, 200);
}

// Change profile image on click
function changeProfileImage() {
    const profileImg = document.getElementById('profile-img');
    const images = [
        'profile-picture.jpg',
        'https://via.placeholder.com/80x80/ff4444/ffffff?text=CN',
        'https://via.placeholder.com/80x80/1DB954/ffffff?text=ONE',
        'https://via.placeholder.com/80x80/9146FF/ffffff?text=PRO'
    ];
    
    const currentSrc = profileImg.src;
    let currentIndex = images.findIndex(img => currentSrc.includes(img.split('?')[1]));
    currentIndex = (currentIndex + 1) % images.length;
    
    profileImg.style.transform = 'scale(0)';
    setTimeout(() => {
        profileImg.src = images[currentIndex];
        profileImg.style.transform = 'scale(1)';
    }, 200);
}

// Animate stats counter
function animateStatsCounter() {
    let count = 0;
    const target = currentLikes;
    const increment = target / 50;
    
    const timer = setInterval(() => {
        count += increment;
        if (count >= target) {
            count = target;
            clearInterval(timer);
        }
        statNumber.textContent = Math.floor(count);
    }, 50);
}

// Increment likes with animation
function incrementLikes() {
    currentLikes += Math.floor(Math.random() * 5) + 1;
    
    // Create floating number animation
    const floatingNumber = document.createElement('div');
    floatingNumber.textContent = '+' + Math.floor(Math.random() * 3 + 1);
    floatingNumber.style.cssText = `
        position: absolute;
        color: #ff4444;
        font-weight: bold;
        font-size: 1.2rem;
        pointer-events: none;
        z-index: 1000;
        animation: floatUp 2s ease-out forwards;
    `;
    
    // Add floating animation CSS
    if (!document.querySelector('#floating-animation-style')) {
        const style = document.createElement('style');
        style.id = 'floating-animation-style';
        style.textContent = `
            @keyframes floatUp {
                0% { transform: translateY(0); opacity: 1; }
                100% { transform: translateY(-50px); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }
    
    const statsElement = document.querySelector('.stat-item');
    const rect = statsElement.getBoundingClientRect();
    floatingNumber.style.left = (rect.right + 10) + 'px';
    floatingNumber.style.top = (rect.top) + 'px';
    
    document.body.appendChild(floatingNumber);
    
    // Update counter with smooth animation
    animateNumberChange(parseInt(statNumber.textContent), currentLikes);
    
    // Remove floating number after animation
    setTimeout(() => {
        document.body.removeChild(floatingNumber);
    }, 2000);
}

// Animate number changes
function animateNumberChange(from, to) {
    const duration = 1000;
    const startTime = performance.now();
    
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const current = Math.floor(from + (to - from) * easeOutCubic(progress));
        statNumber.textContent = current;
        
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }
    
    requestAnimationFrame(update);
}

// Easing function
function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
}

// Keyboard shortcuts
function handleKeyboardShortcuts(event) {
    switch(event.code) {
        case 'Space':
            event.preventDefault();
            toggleAudio();
            break;
        case 'KeyV':
            if (event.ctrlKey) {
                event.preventDefault();
                toggleVideo();
            }
            break;
        case 'KeyM':
            if (event.ctrlKey) {
                event.preventDefault();
                toggleBackgroundAudio();
            }
            break;
    }
}

// Sound effects (placeholder functions)
function playHoverSound() {
    // You can add actual sound effects here
    // const hoverSound = new Audio('hover-sound.mp3');
    // hoverSound.volume = 0.1;
    // hoverSound.play();
}

function playClickSound() {
    // You can add actual sound effects here
    // const clickSound = new Audio('click-sound.mp3');
    // clickSound.volume = 0.2;
    // clickSound.play();
}

// Show notifications
function showNotification(message) {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: rgba(0, 0, 0, 0.9);
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        border-left: 4px solid #ff4444;
        z-index: 1000;
        animation: slideIn 0.3s ease-out;
    `;
    
    // Add slide-in animation
    if (!document.querySelector('#notification-style')) {
        const style = document.createElement('style');
        style.id = 'notification-style';
        style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    
    // Auto-remove after 3 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideIn 0.3s ease-out reverse';
            setTimeout(() => {
                notification.remove();
            }, 300);
        }
    }, 3000);
}

// Error handling for media
bgVideo.addEventListener('error', function(e) {
    console.log('Video error:', e);
    showNotification('Background video failed to load');
});

backgroundAudio.addEventListener('error', function(e) {
    console.log('Audio error:', e);
    showNotification('Background audio failed to load');
});

// Update status randomly
setInterval(() => {
    const statuses = ['Playing', 'Online', 'Streaming', 'In Game'];
    const currentStatus = document.querySelector('.status-text').textContent;
    const newStatus = statuses[Math.floor(Math.random() * statuses.length)];
    
    if (newStatus !== currentStatus) {
        document.querySelector('.status-text').textContent = newStatus;
    }
}, 45000); // Every 45 seconds