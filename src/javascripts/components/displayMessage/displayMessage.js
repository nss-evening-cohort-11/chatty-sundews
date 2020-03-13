import './displayMessage.scss';
import messageData from '../../helpers/data/messageData';
import utilities from '../../helpers/utilities';
import addMessage from '../addMessage/addMessage';

const displayAllMessages = () => {
  const messages = messageData.setUpdatedMessageArray();
  console.error(messageData.setUpdatedMessageArray());
  let domString = '<div>';
  messages.forEach((message) => {
    domString += addMessage.buildMessageCard(message);
  });
  domString += '</div>';
  utilities.printToDom('message-container', domString);
};

export default { displayAllMessages };
