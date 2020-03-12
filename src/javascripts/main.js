import addMessage from './components/addMessage/addMessage';
import displayMessage from './components/displayMessage/displayMessage';

import '../styles/main.scss';


console.error('hi');

const init = () => {
  addMessage.buildMessageCard();
  addMessage.addMessageButtonEvent();
  displayMessage.displayAllMessages();
};

init();
