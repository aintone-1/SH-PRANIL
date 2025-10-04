# CN ONE Profile Website

A modern, interactive profile website with background video and audio features, similar to gaming profile pages.

## Features

- 🎥 **Background Video**: Fullscreen video background with blur effects
- 🎵 **Audio Player**: Background music with play/pause controls
- 👤 **Profile Card**: Interactive profile section with social media links
- 🎮 **Media Controls**: Gaming-style control buttons
- 📊 **Live Stats**: Animated counter with click interactions
- ⌨️ **Keyboard Shortcuts**: Quick controls via keyboard
- 📱 **Responsive Design**: Works on all devices
- ✨ **Smooth Animations**: Professional fade-in and hover effects

## Quick Start

1. **Open the website**: Double-click `index.html` or open it in your web browser
2. **Add your media files** (optional):
   - Place your background video as `background-video.mp4`
   - Place your background music as `background-music.mp3`

## File Structure

```
portfoli/
├── index.html          # Main HTML file
├── styles.css          # All styling and animations
├── script.js          # JavaScript functionality
├── README.md          # This file
├── background-video.mp4  # Your background video (add your own)
└── background-music.mp3  # Your background audio (add your own)
```

## Adding Your Own Media

### Background Video
- **Format**: MP4 (recommended)
- **Resolution**: 1920x1080 or higher
- **Duration**: 30 seconds to 2 minutes (will loop)
- **Size**: Keep under 50MB for faster loading
- **Filename**: `background-video.mp4`

### Background Music
- **Format**: MP3 (recommended)
- **Quality**: 128kbps or higher
- **Duration**: 2-5 minutes (will loop)
- **Size**: Keep under 10MB
- **Filename**: `background-music.mp3`

## Customization

### Change Profile Information
Edit these lines in `index.html`:
```html
<h1 class="username">CN ONE</h1>  <!-- Change username -->
<div class="username-small">CN ONE</div>  <!-- Change display name -->
<span class="status-text">Playing</span>  <!-- Change status -->
```

### Change Colors
Edit the color variables in `styles.css`:
```css
/* Main theme color (red) */
color: #ff4444;
background: #ff4444;

/* Green accent (online status) */
background: #4CAF50;

/* Discord blue */
background: #5865F2;

/* Spotify green */
background: #1DB954;
```

### Add Your Profile Image
Replace the placeholder image URL in `index.html`:
```html
<img src="your-profile-image.jpg" alt="Profile" id="profile-img">
```

## Controls

### Mouse Controls
- **Spotify Button**: Play/pause background music
- **Video Controls (bottom right)**: Toggle video and audio
- **Profile Image**: Click to cycle through different avatars
- **Stats Number**: Click to increment likes
- **Social Icons**: Click to open Discord/Spotify

### Keyboard Shortcuts
- **Spacebar**: Toggle background music
- **Ctrl + V**: Toggle background video
- **Ctrl + M**: Toggle background audio

## Browser Compatibility

- ✅ **Chrome** (recommended)
- ✅ **Firefox**
- ✅ **Safari**
- ✅ **Edge**

**Note**: Some browsers may block autoplay. If video/audio doesn't start automatically, click anywhere on the page to begin.

## Troubleshooting

### Video/Audio Not Playing
1. **Check file formats**: Ensure MP4 for video, MP3 for audio
2. **Check file names**: Must be exactly `background-video.mp4` and `background-music.mp3`
3. **Browser restrictions**: Some browsers require user interaction before playing media
4. **File size**: Large files may take time to load

### Performance Issues
1. **Reduce video quality**: Use lower resolution or bitrate
2. **Compress audio**: Use lower bitrate MP3
3. **Check browser**: Update to latest version
4. **Clear cache**: Refresh the page (Ctrl+F5)

### Customization Help
1. **Colors**: Search for color codes (e.g., `#ff4444`) in `styles.css`
2. **Text**: Edit content in `index.html`
3. **Animations**: Modify timing values in `styles.css` and `script.js`

## Features Explained

### Interactive Elements
- **Pulsing Status Indicator**: Shows "online" status
- **Floating Numbers**: Animated "+1" effects when clicking stats
- **Hover Effects**: All buttons have smooth hover animations
- **Loading Animations**: Staggered fade-in effects for controls

### Smart Fallbacks
- **Autoplay Protection**: Shows click-to-play overlay if autoplay is blocked
- **Missing Media**: Graceful handling when video/audio files are missing
- **Error Notifications**: User-friendly error messages

### Responsive Design
- **Mobile Friendly**: Adapts to phone screens
- **Touch Support**: All interactions work on touch devices
- **Flexible Layout**: Adjusts to different screen sizes

## Getting Help

If you need help customizing or have issues:

1. Check the browser console (F12) for error messages
2. Ensure all files are in the correct locations
3. Test with different browsers
4. Check file permissions and formats

## License

This project is open source. Feel free to modify and customize for your own use!

---

**Enjoy your new profile website! 🚀**