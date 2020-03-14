import messageData from '../../helpers/data/messageData';

import displayMessage from '../displayMessage/displayMessage';

const buildNewMessageObject = () => {
  const allMessages = messageData.getMessages();
  console.error(allMessages);
  const newMessageObject = {
    messageId: `message${allMessages.length + 1}`,
    text: document.getElementById('messageInputField').value,
  };
  allMessages.push(newMessageObject);
  console.error('new message here', newMessageObject);
  // messageData.setUpdatedMessageArray(newMessageObject);
  console.error('all messages listed here', allMessages);
  displayMessage.displayAllMessages();
};

export default { buildNewMessageObject };
