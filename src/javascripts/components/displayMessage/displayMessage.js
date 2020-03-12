import './displayMessage.scss';
import messageData from '../../helpers/data/messageData';
import utilities from '../../helpers/utilities';

const displayAllMessages = () => {
  let domString = '';
  const chatMessages = messageData.getMessages();
  chatMessages.forEach((message) => {
    domString += `
      <div class="card text-center">${message.name}</div>
    `;
  });
  utilities.printToDom('message-container', domString);
};

export default { displayAllMessages };
