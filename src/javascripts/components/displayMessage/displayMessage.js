import './displayMessage.scss';
// eslint-disable-next-line import/no-cycle
import addBrandNewMessage from '../addMessage/addMessage';
import messageData from '../../helpers/data/messageData';
import userData from '../../helpers/data/userData';
import utilities from '../../helpers/utilities';
import giphyJs from '../giphy/giphy';

const displayAllMessages = () => {
  const allMessages = messageData.getMessages();
  let domString = '';
  allMessages.forEach((message) => {
    const users = userData.getUsers();
    const findUser = users.find((x) => x.id === message.id);
    const giph = giphyJs.getGiphyImageArray();
    const loggedUser = addBrandNewMessage.selectedRadio();
    console.error('here', giph.url);
    domString += `<div id="${message.messageId}" class="messageCard card mb-3">`;
    // Anca S: Added conditional statement to display the Delete button only if the user logged in - aka selected radio button - is the same as the user on the message:
    if (loggedUser === message.id) {
      domString += '<div id="close-button" class="closebtn"><i class="fas fa-trash"></i></div>';
    }
    domString += '<div>';
    domString += `<img src=${findUser.imgUrl} class="img-rounded col-3" alt="user">`;
    domString += '<div class="card-body p-0">';
    domString += `<h3 class="messageName card-text">${findUser.name}</h3>`;
    if ($('#gif-select').hasClass('visible')) {
      domString += `<img src="${giph.url}">`;
    } else {
      domString += '';
    }
    domString += `<p class="messageText text-center card-text">${message.text}</p>
              <p class="timestamp"><small>${message.timestamp}</small></p>
          </div>
      </div>
    </div>`;
  });
  utilities.printToDom('message-container', domString);
};

const deleteMessageEvent = (e) => {
  const selectedMessage = e.target.closest('.card').id;
  const messages = messageData.getMessages();
  const selectedMessagePosition = messages.findIndex((x) => x.messageId === selectedMessage);
  messages.splice(selectedMessagePosition, 1);
  displayAllMessages();
};

$('body').on('click', '.closebtn', deleteMessageEvent);

export default { displayAllMessages };
