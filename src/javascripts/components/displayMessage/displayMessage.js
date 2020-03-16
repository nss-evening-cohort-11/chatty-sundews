import './displayMessage.scss';
import messageData from '../../helpers/data/messageData';
import userData from '../../helpers/data/userData';
import utilities from '../../helpers/utilities';

const displayAllMessages = () => {
  const allMessages = messageData.getMessages();
  let domString = '';
  allMessages.forEach((message) => {
    const users = userData.getUsers();
    const findUser = users.find((x) => x.id === message.id);
    domString += `<div id="${message.messageId}" class="messageCard card mb-3">`;
    domString += '<div class="findUserId"></div>';
    domString += `<div id="${message.id}" class="closebtn"><i id="${findUser.id}" class="fas fa-trash"></i>
      </div>
      <div>
      <img src=${findUser.imgUrl} class="img-rounded col-3" alt="user">
          <div class="card-body p-0">
          <h3 class="messageName card-text">${findUser.name}</h3>
              <p class="messageText text-center card-text">${message.text}</p>
              <p class="timestamp"><small>${message.timestamp}</small></p>
          </div>
      </div>
    </div>`;
  });
  utilities.printToDom('message-container', domString);
};

const deleteMessageEvent = (e) => {
  const selectedMessage = e.target.closest('.card').id;
  const selectedMessageUser = e.target.closest('.closebtn').id;
  const selectedMessageId = e.target.closest('.fas').id;
  const messages = messageData.getMessages();
  const selectedMessagePosition = messages.findIndex((x) => x.messageId === selectedMessage);
  if (selectedMessageUser === selectedMessageId) {
    console.error();
    messages.splice(selectedMessagePosition, 1);
    displayAllMessages();
  }
};

$('body').on('click', '.closebtn', deleteMessageEvent);

export default { displayAllMessages };
