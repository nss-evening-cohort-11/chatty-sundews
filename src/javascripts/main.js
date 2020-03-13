import displayMessage from './components/displayMessage/displayMessage';

import '../styles/main.scss';
import addMessage from './components/addMessage/addMessage';

console.error('hi');

const init = () => {
  displayMessage.displayAllMessages();
  addMessage.pressEnterEvent();
};

init();
