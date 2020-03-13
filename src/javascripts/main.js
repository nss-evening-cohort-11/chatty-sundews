import '../styles/main.scss';
import clearMessages from './components/clearMessages/clearMessages';
import nav from './components/navbar/navbar';
import messageLimit from './components/messageLimit/messageLimit';
// import displayMessage from './components/displayMessage/displayMessage';
import largeText from './components/largeText/largeText';
import addMessage from './components/addMessage/addMessage';

console.error('hi');

const init = () => {
  nav.loadNavbar();
  // displayMessage.displayAllMessages();
  addMessage.buildNewMessageObject();
  largeText.largeTextEvents();
  messageLimit.getMessageLimit();
  clearMessages.clearMessages();
};

init();
