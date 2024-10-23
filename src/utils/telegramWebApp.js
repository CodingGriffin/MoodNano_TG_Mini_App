import WebApp from '@twa-dev/sdk';

export const initTelegramWebApp = () => {
  WebApp.ready();
  WebApp.expand();
};

export const closeTelegramWebApp = () => {
  WebApp.close();
};

export const getTelegramUser = () => {
  return WebApp.initDataUnsafe?.user;
};

export const showBackButton = (callback) => {
  WebApp.BackButton.show();
  WebApp.BackButton.onClick(callback);
};

export const hideBackButton = () => {
  WebApp.BackButton.hide();
};

export default WebApp;