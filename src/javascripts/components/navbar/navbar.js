import utilities from '../../helpers/utilities';
import './navbar.scss';

const loadNavbar = () => {
  let domString = '';
  domString += '<nav>';
  domString += '<a class="navbar-brand" href="#">Sticky top</a>';
  domString += '</nav>';

  utilities.printToDom('nav-container', domString);
};

export default { loadNavbar };
