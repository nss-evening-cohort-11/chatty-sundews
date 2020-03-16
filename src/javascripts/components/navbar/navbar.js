import utilities from '../../helpers/utilities';
import getInfo from '../../helpers/data/userData';
import './navbar.scss';
import addMessage from '../addMessage/addMessage';
// import giphy from '../giphy/giphy';

const radioButtons = () => {
  const radioUser = getInfo.getUsers();
  let domString = '';
  radioUser.forEach((user) => {
    domString += '<div class="form-check-inline">';
    domString += '  <label>';
    domString += `    <input id="${user.id}" class="form-check-input" type="radio" name="inlineRadioOptions" value="small">`;
    domString += `    <img class="p-1 form-check-label rounded-circle" src="${user.imgUrl}" width="60px" height="60px">`;
    domString += `    <p class="text-center no-margin">${user.name}</p>`;
    domString += '  </label>';
    domString += '</div>';
  });
  return domString;
};
const loadNavbar = () => {
  let domString = '';
  domString += '<nav class="navbar-custom fixed-top navbar-light bg-light">';
  domString += '  <div class="flex flex-wrap">';
  domString += '    <img src="src/img/sundew-smoozer.png" class="" alt="Sundew Smoozers">';
  domString += '  </div>';
  domString += '<div class="container align-content-center">';
  domString += `  <div class="user-display mb-0 pb-0 radio-users">${radioButtons()}`;
  domString += '  </div>';
  domString += '<form class="ml-5 mr-5">';
  domString += '<div class="row text-align-center m-0">';
  domString += '    <input id="messageInputField" class="form-control col m-0 text-center" type="text" placeholder="Select User above, add message and hit ENTER" aria-label="text">';
  // Added the gif button and elements - Jose Marquez
  domString += '      <button type="button" id="giph-btn" class="btn col-2 ml-2" data-toggle="modal" data-target="#exampleModal">Add Gif</button>';
  domString += '</div>';
  domString += '</form>';
  domString += '<div class="container align-content-center  m-auto pt-2">';
  domString += '    <input class="" type="checkbox" value="dark theme" class="mt-1 " id="darkModeBtn">';
  domString += '    <label class="form-check-label" for="darkModeBtn">Dark Theme</label>';
  domString += '    <input type="checkbox" value="large-text" class="m-1" id="largeTextBtn">';
  domString += '    <label class="form-check-label" for="largeTextBtn">Large Text</label>';
  domString += '    <button id="btn-clear" class="btn ml-5">CLEAR</button>';
  domString += '  </div>';
  domString += '<p id="gif-select" class="invisible">Gif Selected</p>';
  domString += '  </div>';
  domString += '</nav>';
  utilities.printToDom('nav-container', domString);
  $('.form-check-input')[0].checked = true;
};

const alertTextValidation = () => {
  $('#validationTextInput').modal('show');
};

const events = () => {
  $('#messageInputField').keypress((event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      addMessage.buildNewMessageObject();
      $('#gif-select').removeClass('visible');
      $('#gif-select').addClass('invisible');
      // giphy.sendSelectedGif();

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
