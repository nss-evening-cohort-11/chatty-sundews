import '../styles/main.scss';
import nav from './components/navbar/navbar';
import messageLimit from './components/messageLimit/messageLimit';
import displayMessage from './components/displayMessage/displayMessage';
import largeText from './components/largeText/largeText';
import addMessage from './components/addMessage/addMessage';

console.error('hi');

const init = () => {
  nav.loadNavbar();
  displayMessage.displayAllMessages();
  addMessage.pressEnterEvent();
  largeText.largeTextEvents();
  messageLimit.getMessageLimit();
};

init();
