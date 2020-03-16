import utilities from '../../helpers/utilities';
import getInfo from '../../helpers/data/userData';
import './navbar.scss';
import addMessage from '../addMessage/addMessage';

const radioButtons = () => {
  const radioUser = getInfo.getUsers();
  let domString = '';
  radioUser.forEach((user) => {
    domString += '<div class="form-check-inline">';
    domString += '  <label>';
    domString += `    <input id="${user.id}" class="form-check-input" type="radio" name="inlineRadioOptions" value="small">`;
    domString += `    <img class="p-1 form-check-label rounded-circle" src="${user.imgUrl}" width="60px" height="60px">`;
    domString += `    <p class="text-center">${user.name}</p>`;
    domString += '  </label>';
    domString += '</div>';
  });
  return domString;
};

const loadNavbar = () => {
  let domString = '';
  domString += '<nav class="navbar navbar-custom fixed-top navbar-light bg-light justify-content-center">';
  domString += '    <img class="logo navbar-brand" src="src/img/sundew-smoozer.png" alt="Sundew Smoozers">';
  domString += `    <div class="user-display mx-auto">${radioButtons()}`;
  domString += '      </div>';
  domString += '  </div>';
  domString += '  <div class="col-4 flex align-self-center">';
  domString += '    <div class="form-check row">';
  domString += '      <input type="checkbox" value="dark theme" id="darkModeBtn">';
  domString += '      <label class="form-check-label" for="darkModeBtn">Dark Theme</label>';
  domString += '      </div>';
  domString += '      <div class="form-check row">';
  domString += '        <input type="checkbox" value="large-text" id="largeTextBtn">';
  domString += '        <label class="form-check-label" for="largeTextBtn">Large Text</label>';
  domString += '      </div>';
  domString += '    </div>';
  domString += '<div class="container-fluid pb-3">';
  domString += '    <form class="col-8 d-inline-flex">';
  domString += '      <input id="messageInputField" class="form-control col-12" type="text" placeholder="Select User above, add message and hit ENTER" aria-label="text">';
  domString += '      <button id="btn-clear" class="btn btn-block ml-5">CLEAR</button>';
  domString += '    </form>';
  domString += '</div>';
  domString += '</nav>';
  utilities.printToDom('nav-container', domString);
};

const alertTextValidation = () => {
  $('#validationTextInput').modal('show');
};

const events = () => {
  $('#messageInputField').keypress((event) => {
    if (event.keyCode === 13) {
      if (document.getElementById('messageInputField').value === '') {
        event.preventDefault();
        alertTextValidation();
      } else {
        addMessage.buildNewMessageObject();
        event.preventDefault();
      }
    }
  });
};

export default { loadNavbar, events };
