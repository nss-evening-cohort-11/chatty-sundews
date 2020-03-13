import '../styles/main.scss';
import nav from './components/navbar/navbar';
import messageLimit from './components/messageLimit/messageLimit';
import largeText from './components/largeText/largeText';
import addMessage from './components/addMessage/addMessage';
import clearMessages from './components/clearMessages/clearMessages';

console.error('hi');

const init = () => {
  nav.loadNavbar();
  nav.events();
  clearMessages.clearMessageFunction();
  addMessage.buildNewMessageObject();
  largeText.largeTextEvents();
  messageLimit.getMessageLimit();
};

init();
