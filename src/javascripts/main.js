import '../styles/main.scss';
import nav from './components/navbar/navbar';
import displayMessage from './components/displayMessage/displayMessage';


const init = () => {
  nav.loadNavbar();
  displayMessage.displayAllMessages();
};

init();
