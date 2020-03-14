import './displayMessage.scss';
import messageData from '../../helpers/data/messageData';
import utilities from '../../helpers/utilities';

const displayAllMessages = () => {
  let domString = '';
  messageData.getMessages().forEach((message) => {
    // const user = users.find((x) => x.id === message.id);
    domString += `
    <div class="messageCard card mb-3">
      <div class="closebtn"><i class="fas fa-trash" id="${message.messageId}"></i>
      </div>
      <div>
          <div class="card-body p-0">
              <p class="messageText text-center card-text">${message.text}</p>
              <p class="timestamp"><small>${message.timestamp}</small></p>
          </div>
      </div>
    </div>`;
  });

  utilities.printToDom('message-container', domString);
};

export default { displayAllMessages };
