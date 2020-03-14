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
    domString += `
    <div id="${message.messageId}" class="messageCard card mb-3">
      <div id="close-button" class="closebtn"><i class="fas fa-trash"></i>
      </div>
      <div>
          <div class="card-body p-0">
              <p class="messageText text-center card-text">${message.text}</p>
              <p class="timestamp"><small>${message.timestamp}</small></p>
          </div>
      </div>
    </div>`;
    console.error(findUser);
  });
  utilities.printToDom('message-container', domString);
};

// NOTE: deleted this from above card-body div in domString above: DELETE this note when user info added to a new message.
//       <img src=${user.imgUrl} class="img-rounded col-3" alt="user">

const deleteMessageEvent = (e) => {
  const selectedMessage = e.target.closest('.card').id;
  const messages = messageData.getMessages();
  const selectedMessagePosition = messages.findIndex((x) => x.messageId === selectedMessage);
  messages.splice(selectedMessagePosition, 1);
  displayAllMessages();
};

$('body').on('click', '.closebtn', deleteMessageEvent);

export default { displayAllMessages };
