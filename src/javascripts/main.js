import '../styles/main.scss';
import nav from './components/navbar/navbar';
import messageLimit from './components/messageLimit/messageLimit';
import displayMessage from './components/displayMessage/displayMessage';
import largeText from './components/largeText/largeText';
import darkMode from './components/darkMode/darkMode';


const init = () => {
  nav.loadNavbar();
  displayMessage.displayAllMessages();
  largeText.largeTextEvents();
  messageLimit.getMessageLimit();
  darkMode.makeDarkEvents();
};

init();
