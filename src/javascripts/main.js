import '../styles/main.scss';
import navbar from './components/navbar/navbar';
import messageLimit from './components/messageLimit/messageLimit';
import largeText from './components/largeText/largeText';
import clearMessages from './components/clearMessages/clearMessages';
import darkMode from './components/darkMode/darkMode';
import displayMessage from './components/displayMessage/displayMessage';

const init = () => {
  navbar.loadNavbar();
  displayMessage.displayAllMessages();
  navbar.events();
  clearMessages.clearMessageEvent();
  largeText.largeTextEvents();
  messageLimit.getMessageLimit();
  darkMode.makeDarkEvents();
};

init();
