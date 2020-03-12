import './displayMessage.scss';
import messageData from '../../helpers/data/messageData';
import utilities from '../../helpers/utilities';

const displayAllMessages = () => {
  let domString = '';
  const chatMessages = messageData.getMessages();
  chatMessages.forEach((message) => {
    domString += `
    <div class="messageCard" style="margin-right: 5px; margin-left: auto;">
      <span class="closebtn" id="${message.id}">x</span>
      <h3 class="messageName">${message.name}</h3>
      <p class="messageText text-center">${message.text}</p>
      <div class="timestamp">${message.timestamp}</div>
    </div>
    `;
  });
  utilities.printToDom('message-container', domString);
};

export default { displayAllMessages };
