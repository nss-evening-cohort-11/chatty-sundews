import '../styles/main.scss';
import messageLimit from './components/messageLimit/messageLimit';
import displayMessage from './components/displayMessage/displayMessage';

const init = () => {
  displayMessage.displayAllMessages();
  messageLimit.getMessageLimit();
};

init();
