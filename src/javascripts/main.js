import '../styles/main.scss';
import nav from './components/navbar/navbar';
import messageLimit from './components/messageLimit/messageLimit';
import displayMessage from './components/displayMessage/displayMessage';


const init = () => {
  nav.loadNavbar();
  displayMessage.displayAllMessages();
  messageLimit.getMessageLimit();
};

init();
