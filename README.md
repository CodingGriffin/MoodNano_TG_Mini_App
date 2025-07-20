# Mood Maker Tontopia 🎭

A Telegram Web App built with React that creates an interactive mood-based gaming experience. Users can interact with a virtual character, manage energy levels, complete tasks, and progress through different mood states.

## 🚀 Features

- **Interactive Character System**: Tap-based interactions with mood-responsive animations
- **Dynamic Mood States**: Character transitions between sad, playful, and happy moods
- **Energy Management**: Strategic energy consumption and regeneration mechanics
- **Task System**: Complete social media tasks to earn rewards
- **Progressive Leveling**: Point-based progression with evolution mechanics
- **Telegram Integration**: Native Telegram Web App with user authentication
- **Responsive Design**: Optimized for mobile devices with desktop support
- **Theme Support**: Dark/light mode with automatic Telegram theme detection

## 🛠 Tech Stack

- **Frontend**: React 18, Konsta UI
- **Styling**: Tailwind CSS with custom animations
- **Icons**: Heroicons, Phosphor React
- **Animations**: Framer Motion, GSAP, Lottie React
- **Telegram**: @twa-dev/sdk
- **Build Tool**: Create React App

## 📦 Installation

```bash
# Clone the repository
git clone <repository-url>
cd moodmakerr

# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

## 🏗 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── assets/          # SVG components and icons
│   │   ├── functions/   # Game function icons
│   │   ├── footer/      # Navigation components
│   │   └── time/        # Mood and status displays
│   ├── Character.js     # Main character component
│   ├── Footer.js        # Bottom navigation
│   ├── Header.js        # Top status bar
│   ├── MoodDisplay.js   # Mood progress indicator
│   └── Tasks.js         # Task completion system
├── page/
│   └── Home.js          # Main game screen
├── utils/
│   ├── telegramWebApp.js # Telegram integration
│   └── errorLogger.js   # Error handling
└── app.js               # Main application component
```

## 🎮 Game Mechanics

### Mood System
- **Sad** → **Playful** → **Happy** (progression through interactions)
- Automatic mood decay after 2 minutes of inactivity
- Visual feedback with background changes and character animations

### Energy System
- Maximum energy: 500 points
- Energy cost per interaction: 10 points
- Automatic regeneration: +1 energy per second
- Meditation feature for instant energy boost

### Progression
- Base points per tap: 10
- Quest multiplier: 2x (5-minute cooldown)
- Evolution cost: 10,000 points
- Level calculation: points ÷ 10,000 + 1

## 🔧 Configuration

### Environment Variables
```bash
REACT_APP_BACKEND_URL=your_backend_url
```

### Tailwind Configuration
Custom theme extensions in `tailwind.config.js`:
- App-specific colors and backgrounds
- Custom animations (breathe, glow-breathe, point-wave)
- Mobile-first responsive breakpoints
- Konsta UI integration

## 📱 Telegram Web App Setup

1. Create a bot with @BotFather
2. Set up Web App URL in bot settings
3. Configure domain in Telegram Bot settings
4. Deploy to HTTPS-enabled hosting

## 🚀 Deployment

### Build Optimization
```bash
# Production build with source map removal
npm run build
```

### Hosting Requirements
- HTTPS required for Telegram Web Apps
- Static file hosting (Netlify, Vercel, etc.)
- `_redirects` file included for SPA routing

## 🎨 Customization

### Adding New Moods
1. Add mood state to `Home.js`
2. Create corresponding background images
3. Update mood transition logic
4. Add character animations

### Custom Themes
Modify `tailwind.config.js` colors and extend theme object for new color schemes.

## 🐛 Error Handling

- Top-level error boundary with user-friendly fallbacks
- Telegram-specific error logging
- Development vs production error reporting

## 📊 Performance Optimizations

- Component lazy loading
- CSS-in-JS animations for better performance
- Image optimization and preloading
- Efficient re-rendering with React hooks

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

This project is private and proprietary.

## 🔗 Links

- [Telegram Web Apps Documentation](https://core.telegram.org/bots/webapps)
- [Konsta UI Documentation](https://konstaui.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
