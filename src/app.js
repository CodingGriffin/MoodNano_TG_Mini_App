import React, { useState, useEffect } from 'react';
import { App, Page,  } from 'konsta/react';

import Footer from './components/Footer';
import Header from './components/Header';
import themes from './components/themes';
import Tasks from './components/Tasks'; 
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
      setIsDarkMode(WebApp.colorScheme === 'dark');
    }

    WebApp.onEvent('themeChanged', () => {
      setIsDarkMode(WebApp.colorScheme === 'dark');
    });
  }, []);

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
          />
        );
    }
  };

  const theme = isDarkMode ? themes.dark : themes.light;

  return (
    <App theme={isDarkMode ? 'dark' : 'light'}>
      <Page className={`flex items-center justify-center h-full w-full ${theme.background}`}>
      <div className={`w-full h-full flex flex-col mobile-container relative 
        // ${theme.containerBg}
        bg-app-background bg-cover bg-center
      `}>
          <div className="flex-grow overflow-y-auto overflow-x-hidden pb-16">
            <Header 
              points={points} 
              level={level} 
              isDarkMode={isDarkMode} 
              telegramUser={telegramUser}
            />
            
            {renderActivePage()}
          </div>
          
          <Footer 
            isDarkMode={isDarkMode} 
            activePage={activePage} 
            onPageChange={setActivePage}
          />
        </div>
      </Page>
    </App>
  );
}


export default MyApp;