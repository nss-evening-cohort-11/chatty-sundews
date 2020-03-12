import utilities from '../../helpers/utilities';
import getInfo from '../../helpers/data/userData';
import './navbar.scss';

const loadNavbar = () => {
  const radioUser = getInfo.getUsers();
  let domString = '';
  domString += '<nav class="fixed-top navbar navbar-custom container-fluid>';
  domString += '  <div class="img-container">';
  domString += '    <img class="logo ml-4 mt-3" src="src/img/sundew-smoozer.png" alt="Sundew Smoozers"></div>';
  domString += '      <div class="user-display col d-flex justify-content-center"></div>';
  radioUser.forEach((user) => {
    domString += '      <div class="form-check-inline">';
    domString += '        <label>';
    domString += '            <input class="form-check-input" type="radio" name="inlineRadioOptions" value="small">';
    domString += `            <img class="p-1 form-check-label rounded-circle" src="${user.imgUrl}" width="60px" height="60px">`;
    domString += `            <p class="text-center">${user.name}</p>`;
    domString += '        </label>';
    domString += '      </div>';
  });
  domString += '      </div>';
  domString += '  </div>';
  domString += '  <div class="col-4 flex align-self-center">';
  domString += '    <div class="form-check row">';
  domString += '      <input class="form-check-input" type="checkbox" value="dark theme" id="defaultCheck1">';
  domString += '      <label class="form-check-label" for="defaultCheck1">Dark Theme</label>';
  domString += '    </div>';
  domString += '    <div class="form-check row">';
  domString += '      <input class="form-check-input" type="checkbox" value="large-text" id="defaultCheck1">';
  domString += '      <label class="form-check-label" for="defaultCheck1">Large Text </label>';
  domString += '    </div>';
  domString += '  </div>';
  domString += '<div class="container-fluid pb-3">';
  domString += '    <form class="col-9 offset-md-2 d-inline-flex">';
  domString += '      <input class="form-control col-8" type="text" placeholder="Enter message and hit ENTER" aria-label="text">';
  domString += '      <button class="btn btn-secondary btn-block ml-2">CLEAR</button>';
  domString += '    </form>';
  domString += '</div>';
  domString += '</nav>';

  utilities.printToDom('nav-container', domString);
};

export default { loadNavbar };
