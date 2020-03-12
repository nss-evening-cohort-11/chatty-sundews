import utilities from '../../helpers/utilities';
import getInfo from '../../helpers/data/userData';
import './navbar.scss';

const loadNavbar = () => {
  const radioUser = getInfo.getUsers();
  let domString = '';
  domString += '<nav class="nav fixed-top navbar-light bg-light">';
  domString += '  <div class="container col-12 d-flex flex-wrap">';
  domString += '    <img src="src/img/sundew-smoozer.png" alt="Sundew Smoozers Logo" height="150">';
  domString += '    <div class="col-10 p-3 d-flex justify-content-center">';
  radioUser.forEach((user) => {
    domString += '     <div class="form-check form-check-inline">';
    domString += '        <label>';
    domString += '          <input class="form-check-input" type="radio" name="inlineRadioOptions" value="small">';
    domString += `            <img class="p-1 form-check-label rounded-circle" src="${user.imgUrl}" width="100px" height="100px">`;
    domString += `            <p class="text-center">${user.name}</p>`;
    domString += '        </label>';
    domString += '     </div>';
  });
  // domString += ''; add checkboxes and clear button to the right of radio users
  domString += '    </div>';
  domString += '<div class="row">';
  domString += '    <form>';
  domString += '      <input class="form-control" type="text" placeholder="Enter message and hit ENTER" aria-label="text">';
  domString += '    </form>';
  domString += '</div>';
  domString += '</div>';
  domString += '</div>';
  domString += '</nav>';
  domString += '';
  domString += '';
  domString += '';
  domString += '';

  utilities.printToDom('nav-container', domString);
};

export default { loadNavbar };

// domString += '    <div class="radio-buttons col-8 p-2">';
// domString += '      <div class="radio">';
// domString += '        <div class="form-check form-check-inline col-12">';
// domString += '        </div>';
// domString += '     </div>';
// domString += '          <input class="form-check-input radio-btn" type="radio" name="inlineRadioOptions" id="user1" value="Zoe">';
// domString += '          <label class="form-check-label" for="inlineRadio1">Zoe</label>';
// domString += '          <input class="form-check-input" type="radio" name="inlineRadioOptions" id="user2" value="Luke">';
// domString += '          <label class="form-check-label" for="inlineRadio1">Luke</label>';
// domString += '          <input class="form-check-input" type="radio" name="inlineRadioOptions" id="user3" value="Mary">';
// domString += '          <label class="form-check-label" for="inlineRadio1"></label>';
// domString += '    <input id="my_id" type="radio" name="${user.name">';
// domString += `    <label for="my_id">${radioUser.name}</label>`;
