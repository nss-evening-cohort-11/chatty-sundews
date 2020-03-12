import utilities from '../../helpers/utilities';
import './navbar.scss';

const loadNavbar = () => {
  let domString = '';
  domString += '<nav>';
  domString += '<div class="nav fixed-top navbar-light bg-light">';
  domString += '  <img src="src/img/sundew-smoozer.png"  alt="Sundew Smoozers Logo" height="100">';
  domString += '   <form>';
  domString += '     <input class="form-control" type="text" placeholder="Enter message and hit ENTER" aria-label="text">';
  domString += '     <button class="btn btn-outline-success">Clear</>';
  domString += '   </form>';
  domString += '</div>';
  domString += '</nav>';
  domString += '';
  domString += '';
  domString += '';
  domString += '';

  utilities.printToDom('nav-container', domString);
};

export default { loadNavbar };
