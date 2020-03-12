import '../styles/main.scss';
import displayMessage from './components/displayMessage/displayMessage';
import nav from './components/navbar/navbar';


const init = () => {
  displayMessage.displayAllMessages();
  nav.loadNavbar();
};

init();
