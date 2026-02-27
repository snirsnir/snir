# Snir Doani - Interactive Portfolio Website

A gamified portfolio website featuring locked sections that can be unlocked by winning mini-games. Built with vanilla HTML, CSS, and JavaScript with a dark blue high-tech cyber theme.

## Features

### Core Functionality
- **Gamified Unlocking System**: All menu sections (About Me, Projects, Portfolio, Blog, Contact) are locked with 🔒 icons
- **Five Different Mini-Games**: Each section has a unique challenge to unlock it
- **Progress Persistence**: Uses localStorage to remember unlocked sections and dark mode preference
- **Dark Mode Toggle**: Custom-designed toggle with animated moon/stars (dark) and sun/cloud (light)
- **Intro Animation**: Multi-step sequence with loading spinner → HELLO! → name reveal → waving hand

### Mini-Games

1. **About Me** - Rock-Paper-Scissors (best of 3)
2. **Projects** - Memory Card Matching (8 pairs of emojis)
3. **Portfolio** - Quiz Challenge (3 questions)
4. **Blog** - Typing Speed Test (30 seconds)
5. **Contact** - Math Problems (3 consecutive correct answers)

### Design Features
- **Dark Blue High-Tech Theme**: Uses cyan (#0EA5E9), electric blue (#3B82F6), and deep navy colors
- **Cyber Circuit Background**: Animated grid pattern with binary numbers (0s and 1s) scrolling
- **Responsive Design**: Mobile-friendly layout with media queries
- **Custom Animations**: Smooth transitions, glowing effects, and interactive hover states

## Tech Stack

- **HTML5**: Semantic structure with sections and ARIA labels
- **CSS3**: Custom properties (CSS variables), flexbox, grid, animations, gradients
- **Vanilla JavaScript**: DOM manipulation, localStorage API, game logic
- **Google Fonts**: Bricolage Grotesque, Josefin Sans, Varela Round, Open Sans

## File Structure

```
snirdoani/
├── index.html          # Main HTML structure
├── styles.css          # Complete styling and animations
├── script.js           # Game logic and interactivity
├── snir.png           # Profile image
└── README.md          # This file
```

## Setup

1. Clone or download this repository
2. Ensure `snir.png` profile image is in the root directory
3. Open `index.html` in a modern web browser
4. No build process or dependencies required!

## Usage

### First Visit
1. Watch the intro animation sequence (takes ~7 seconds)
2. The main portfolio site loads automatically
3. Try clicking on locked menu items to start games
4. Win games to unlock sections and view content

### Dark Mode
- Click the toggle button in the top-left corner
- Your preference is saved automatically
- Watch the custom moon/sun animation

### Games
- Each game appears in a modal when clicking a locked section
- Win conditions vary per game
- Progress is saved automatically
- Close modal with × button or ESC key

## Color Palette

### Light Mode
- Primary Blue: #0EA5E9
- Accent Electric: #3B82F6
- Secondary Cyan: #06B6D4
- Background: #F8FAFC
- Text: #0F172A

### Dark Mode
- Primary Blue: #38BDF8
- Background Dark: #0F172A
- Background Card: #1E293B
- Text: #F1F5F9

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Requires JavaScript enabled
- Requires localStorage support

## Customization

### Changing Colors
Edit CSS variables in `styles.css` lines 8-46:
```css
:root {
    --primary-blue: #0EA5E9;
    --accent-electric: #3B82F6;
    /* ... */
}
```

### Modifying Games
Edit game configurations in `script.js`:
- Game questions/answers
- Timer durations
- Win conditions
- Card pairs for memory game

### Adding New Sections
1. Add navigation item in `index.html` (with `locked` class and `data-section` attribute)
2. Add corresponding section with `locked-section` class
3. Add game mapping in `script.js` gameState object
4. Create game function following existing pattern

## Known Issues

- Background circuit visibility may vary depending on screen/browser
- Welcome section positioning may need adjustment on some viewports

## Stats

- **Years Experience**: 7
- **Projects Completed**: 50+
- **Service Rating**: A+

## License

Personal portfolio project for Snir Doani.

## Contact

Unlock the Contact section by completing the Math Challenge game!

---

**Built with ❤️ and code by Snir Doani**
