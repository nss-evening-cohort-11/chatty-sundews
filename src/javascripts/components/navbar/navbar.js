import utilities from '../../helpers/utilities';
import getInfo from '../../helpers/data/userData';
import './navbar.scss';

const radioButtons = () => {
  const radioUser = getInfo.getUsers();
  let domString = '';
  radioUser.forEach((user) => {
    domString += '<div class="form-check-inline">';
    domString += '  <label>';
    domString += '    <input class="form-check-input" type="radio" name="inlineRadioOptions" value="small">';
    domString += `    <img class="p-1 form-check-label rounded-circle" src="${user.imgUrl}" width="60px" height="60px">`;
    domString += `    <p class="text-center">${user.name}</p>`;
    domString += '  </label>';
    domString += '</div>';
  });
  return domString;
};
const loadNavbar = () => {
  let domString = '';
  domString += '<nav class="navbar navbar-custom navbar-collapse fixed-top navbar-light bg-light container-fluid>';
  domString += '  <div class="img-container">';
  domString += '    <img class="logo" src="src/img/sundew-smoozer.png" alt="Sundew Smoozers"></div>';
  domString += '      <div class="user-display mx-auto">';
  domString += `  <div>${radioButtons()}</div>`;
  domString += '  </div>';
  domString += '  <div class="col-4 flex align-self-center nav-item">';
  domString += '    <div class="form-check row">';
  domString += '      <input class="form-check-input" type="checkbox" value="dark theme" id="defaultCheck1">';
  domString += '      <label class="form-check-label" for="defaultCheck1">Dark Theme</label>';
  domString += '    </div>';
  domString += '    <div class="form-check row nav-item">';
  domString += '      <input class="form-check-input" type="checkbox" value="large-text" id="defaultCheck1">';
  domString += '      <label class="form-check-label" for="defaultCheck1">Large Text </label>';
  domString += '    </div>';
  domString += '  </div>';
  domString += '<div class="container-fluid pb-3">';
  domString += '    <form class="col-10 offset-md-1 d-inline-flex">';
  domString += '      <input class="form-control col-10" type="text" placeholder="Select User above, add message and hit ENTER" aria-label="text">';
  domString += '      <button class="btn btn-secondary  btn-block ml-1">CLEAR</button>';
  domString += '    </form>';
  domString += '</div>';
  domString += '</nav>';

  utilities.printToDom('nav-container', domString);
};

export default { loadNavbar };
