import './displayMessage.scss';
import messageData from '../../helpers/data/messageData';
import utilities from '../../helpers/utilities';

const displayAllMessages = () => {
  // const messages = messageData.setUpdatedMessageArray();
  // console.error(messageData.setUpdatedMessageArray());
  // let domString = '<div>';
  // messages.forEach((message) => {
  //   domString += addMessage.buildMessageCard(message);
  const messages = messageData.getMessages();
  let domString = '<div>';
  messages.forEach((message) => {
    domString += '<div class="messageCard mb-3">';
    domString += `<span class="closebtn" id="${message.id}">x</span>`;
    domString += `<h3 class="messageName">${message.name}</h3>`;
    domString += `<p class="messageText text-center">${message.text}</p>`;
    domString += `<div class="timestamp">${message.timestamp}</div>`;
    domString += '</div>';
  });
  domString += '</div>';
  utilities.printToDom('message-container', domString);
};

export default { displayAllMessages };
