import React, { useState, useEffect } from 'react';
import { App, Page,  } from 'konsta/react';

import Footer from './components/Footer';
import Header from './components/Header';
import themes from './components/themes';
import Tasks from './components/Tasks'; 
import LoadingScreen from './components/LoadingScreen'; 
import Home from './page/Home';

import WebApp, { initTelegramWebApp, getTelegramUser } from './utils/telegramWebApp';

// Add these near the top of the file, after other imports
const LeaderboardPage = ({ isDarkMode }) => <div>Leaderboard Page</div>;
const PowerUpsPage = ({ isDarkMode }) => <div>Power Ups Page</div>;

function MyApp() {
  const [points, setPoints] = useState(0);
  const [level, setLevel] = useState(1);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [telegramUser, setTelegramUser] = useState(null);
  const [activePage, setActivePage] = useState('home');
  const [xFollowClaimed, setXFollowClaimed] = useState(false);
  const [youtubeClaimed, setYoutubeClaimed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [mood, setMood] = useState('sad');
  const [backgroundImgUrl, setBackground] = useState("url('/assets/background/sad_dark_bg.png')")

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 600);
  }, []);

  useEffect(() => {
    initTelegramWebApp();
    const user = getTelegramUser();
    if (user) {
      setTelegramUser(user);
    }
    
    const isLargeScreen = window.matchMedia('(min-width: 1024px)').matches;
    
    if (isLargeScreen) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(true);
    }

    WebApp.onEvent('themeChanged', () => {
      setIsDarkMode(WebApp.colorScheme === 'dark');
    });
  }, []);

  useEffect(() => {
    setBackground(e => {
      let res = ''
      switch (mood) {
        case "sad":
          res = isDarkMode ? "url('/assets/background/sad_dark_bg.png')" : "url('/assets/background/sad_light_bg.png')";
          break;
        case "playful":
          res = isDarkMode ? "url('/assets/background/playful_dark_bg.png')" : "url('/assets/background/playful_light_bg.png')";
          break;
        case "happy":
          res = isDarkMode ? "url('/assets/background/happy_dark_bg.png')" : "url('/assets/background/happy_light_bg.png')";
          break;
        default: break;
      }
      return res;
    })
  }, [mood, isDarkMode]);

  const handleXFollowClaim = () => {
    if (!xFollowClaimed) {
      setPoints(prevPoints => prevPoints + 500);
      setXFollowClaimed(true);
    }
  };

  const handleYouTubeClaim = () => {
    if (!youtubeClaimed) {
      setPoints(prevPoints => prevPoints + 500);
      setYoutubeClaimed(true);
    }
  };

  const renderActivePage = () => {
    switch (activePage) {
      case 'tasks':
        return (
          <Tasks 
            isDarkMode={isDarkMode} 
            onClaimX={handleXFollowClaim} 
            xClaimed={xFollowClaimed}
            onClaimYouTube={handleYouTubeClaim}
            youtubeClaimed={youtubeClaimed}
          />
        );
      case 'leaderboard':
        return <LeaderboardPage isDarkMode={isDarkMode} />;
      case 'powerups':
        return <PowerUpsPage isDarkMode={isDarkMode} />;
      case 'home':
      default:
        return (
          <Home
            isDarkMode={isDarkMode}
            setMood={setMood}
            mood={mood}
          />
        );
    }
  };

  const theme = isDarkMode ? themes.dark : themes.light;
  const appStyle = {
    backgroundImage: backgroundImgUrl,
    backgroundSize: 'cover', // or 'contain' depending on your needs
    backgroundRepeat: 'no-repeat',
    height: '100vh', // Adjust height as necessary
  };
  return (
    <App theme={isDarkMode ? 'dark' : 'light'}>
      <Page className={`flex items-center justify-center h-full w-full ${theme.background}`}>
        { loading ? (
          <LoadingScreen />
          ) : (
            <div className={`w-full h-full flex flex-col mobile-container relative 
              // ${theme.containerBg}
              bg-cover bg-center
            `}  style={appStyle}>
                <Header 
                  points={points} 
                  level={level} 
                  isDarkMode={isDarkMode} 
                  telegramUser={telegramUser}
                />
                
                {renderActivePage()}
              
              <Footer 
                isDarkMode={isDarkMode} 
                activePage={activePage} 
                onPageChange={setActivePage}
              />
            </div>
          )
        }
      </Page>
    </App>
  );
}

export default MyApp;