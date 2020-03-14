import '../styles/main.scss';
import navbar from './components/navbar/navbar';
import messageLimit from './components/messageLimit/messageLimit';
import largeText from './components/largeText/largeText';
import addMessage from './components/addMessage/addMessage';
import clearMessages from './components/clearMessages/clearMessages';
import darkMode from './components/darkMode/darkMode';

console.error('hi');

const init = () => {
  navbar.loadNavbar();
  navbar.events();
  clearMessages.clearMessageEvent();
  addMessage.buildNewMessageObject();
  largeText.largeTextEvents();
  messageLimit.getMessageLimit();
  darkMode.makeDarkEvents();
};

init();
